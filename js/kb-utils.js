(function (window) {
  'use strict';

  const KB = {
    cache: {
      branch: null,
      repoInfo: null,
      trees: new Map()
    }
  };

  function normalizeContext(el) {
    if (!el) {
      throw new Error('Knowledge base root element not found.');
    }

    const owner = el.dataset.owner || '';
    const repo = el.dataset.repo || '';
    if (!owner || !repo) {
      throw new Error('Knowledge base configuration is missing the repository owner or name.');
    }

    return {
      owner,
      repo,
      docsPath: el.dataset.docsPath || 'docs',
      branch: el.dataset.branch || null,
      offline: el.dataset.offline === 'true',
      cache: {
        branch: null,
        tree: null
      }
    };
  }

  function buildApiBase(context) {
    return `https://api.github.com/repos/${context.owner}/${context.repo}`;
  }

  function buildRawBase(context) {
    return `https://raw.githubusercontent.com/${context.owner}/${context.repo}`;
  }

  async function fetchJson(url) {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github+json'
      }
    });

    if (!response.ok) {
      const error = new Error(`Request failed with status ${response.status}`);
      error.status = response.status;
      error.url = url;
      throw error;
    }

    return response.json();
  }

  async function getDefaultBranch(context) {
    if (context.branch) {
      return context.branch;
    }

    if (context.cache.branch) {
      return context.cache.branch;
    }

    if (KB.cache.branch && KB.cache.repoInfo && KB.cache.repoInfo.owner === context.owner && KB.cache.repoInfo.repo === context.repo) {
      return KB.cache.branch;
    }

    const apiBase = buildApiBase(context);
    const data = await fetchJson(apiBase);
    const branch = data.default_branch || 'main';

    KB.cache.repoInfo = { owner: context.owner, repo: context.repo };
    KB.cache.branch = branch;
    context.cache.branch = branch;

    return branch;
  }

  async function getTree(context, branch) {
    const cacheKey = `${context.owner}/${context.repo}#${branch}`;
    if (context.cache.tree) {
      return context.cache.tree;
    }

    if (KB.cache.trees.has(cacheKey)) {
      return KB.cache.trees.get(cacheKey);
    }

    const apiBase = buildApiBase(context);
    const treeUrl = `${apiBase}/git/trees/${encodeURIComponent(branch)}?recursive=1`;
    const data = await fetchJson(treeUrl);
    if (!data.tree) {
      throw new Error('The Git tree response did not include any file information.');
    }

    KB.cache.trees.set(cacheKey, data.tree);
    context.cache.tree = data.tree;

    return data.tree;
  }

  function buildRawUrl(context, branch, path) {
    const encodedPath = path.split('/').map(encodeURIComponent).join('/');
    return `${buildRawBase(context)}/${encodeURIComponent(branch)}/${encodedPath}`;
  }

  async function fetchMarkdown(context, branch, path) {
    const rawUrl = buildRawUrl(context, branch, path);

    try {
      const response = await fetch(rawUrl, { cache: 'no-store' });
      if (response.ok) {
        return await response.text();
      }
    } catch (error) {
      console.warn('Falling back to same-origin fetch for', path, error);
    }

    const fallback = path.startsWith('/') ? path : `/${path}`;
    try {
      const response = await fetch(fallback, { cache: 'no-store' });
      if (response.ok) {
        return await response.text();
      }
    } catch (fallbackError) {
      console.warn('Fallback fetch failed for', path, fallbackError);
    }

    throw new Error(`Unable to load markdown file at ${path}`);
  }

  function parseFrontMatter(markdown) {
    if (!markdown.startsWith('---')) {
      return { data: {}, content: markdown.trim() };
    }

    const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    if (!match) {
      return { data: {}, content: markdown.trim() };
    }

    const yaml = match[1];
    const rest = markdown.slice(match[0].length);
    const data = parseYaml(yaml);

    return { data, content: rest.trim() };
  }

  function parseYaml(block) {
    const lines = block.split(/\r?\n/);
    const result = {};
    let currentArrayKey = null;

    for (const rawLine of lines) {
      const line = rawLine.trimEnd();
      if (!line.trim()) {
        continue;
      }

      const arrayItemMatch = line.match(/^-(.+)$/);
      if (arrayItemMatch && currentArrayKey && Array.isArray(result[currentArrayKey])) {
        result[currentArrayKey].push(cleanValue(arrayItemMatch[1].trim()));
        continue;
      }

      const kvMatch = line.match(/^([A-Za-z0-9_\- ]+):\s*(.*)$/);
      if (!kvMatch) {
        continue;
      }

      const key = kvMatch[1].trim();
      const value = kvMatch[2].trim();

      if (!value) {
        result[key] = [];
        currentArrayKey = key;
        continue;
      }

      if (value.startsWith('[') && value.endsWith(']')) {
        const inner = value.slice(1, -1).trim();
        result[key] = inner ? inner.split(',').map(item => cleanValue(item.trim())).filter(Boolean) : [];
        currentArrayKey = key;
        continue;
      }

      result[key] = cleanValue(value);
      currentArrayKey = key;
    }

    return result;
  }

  function cleanValue(value) {
    if (value === 'true' || value === 'false') {
      return value === 'true';
    }

    const numeric = Number(value);
    if (!Number.isNaN(numeric) && value !== '') {
      return numeric;
    }

    return value.replace(/^['"]|['"]$/g, '');
  }

  function createExcerpt(text, length = 200) {
    const withoutCode = text.replace(/```[\s\S]*?```/g, ' ');
    const withoutInlineCode = withoutCode.replace(/`[^`]*`/g, ' ');
    const withoutLinks = withoutInlineCode.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ').replace(/\[[^\]]*\]\([^)]*\)/g, '$1');
    const stripped = withoutLinks.replace(/[#>*_~]/g, ' ').replace(/\s+/g, ' ').trim();

    if (stripped.length <= length) {
      return stripped;
    }

    return `${stripped.slice(0, length).trimEnd()}…`;
  }

  function estimateReadTime(text) {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }

  function formatDate(value) {
    if (!value) {
      return null;
    }

    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) {
      return null;
    }

    return new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  }

  function slugToTitle(path) {
    const base = path.split('/').pop() || path;
    const withoutExt = base.replace(/\.md$/i, '');
    return withoutExt
      .split(/[-_]/g)
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }

  function normalizeTags(tags) {
    if (!tags) {
      return [];
    }
    if (Array.isArray(tags)) {
      return tags.map(tag => String(tag)).filter(Boolean);
    }
    if (typeof tags === 'string') {
      return tags.split(',').map(tag => tag.trim()).filter(Boolean);
    }
    return [];
  }

  function isDraft(meta = {}) {
    if (meta.draft === true) {
      return true;
    }
    if (typeof meta.draft === 'string') {
      return meta.draft.toLowerCase() === 'true';
    }
    if (meta.published === false) {
      return true;
    }
    if (typeof meta.status === 'string' && meta.status.toLowerCase() === 'draft') {
      return true;
    }
    return false;
  }

  window.KB = Object.assign(KB, {
    normalizeContext,
    getDefaultBranch,
    getTree,
    fetchMarkdown,
    parseFrontMatter,
    createExcerpt,
    estimateReadTime,
    formatDate,
    slugToTitle,
    normalizeTags,
    isDraft
  });
})(window);
