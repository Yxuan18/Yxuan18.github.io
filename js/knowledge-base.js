(function (window, document, KB) {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('kb-app');
    if (!app) {
      return;
    }

    let context;
    try {
      context = KB.normalizeContext(app);
    } catch (error) {
      console.error(error);
      renderFatalError(error.message);
      return;
    }

    const searchInput = document.getElementById('kb-search');
    const listContainer = document.getElementById('article-list');
    const loadingIndicator = document.getElementById('kb-loading');
    const emptyState = document.getElementById('empty-state');
    const errorState = document.getElementById('error-state');
    const tagCloud = document.getElementById('tag-cloud');
    const activeFilters = document.getElementById('active-filters');
    const articleCount = document.getElementById('article-count');
    const resultCount = document.getElementById('result-count');

    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('q') || '';
    const initialTagParam = urlParams.get('tags') || urlParams.get('tag') || '';
    const initialTags = initialTagParam
      .split(',')
      .map(tag => tag.trim().toLowerCase())
      .filter(Boolean);

    const state = {
      docs: [],
      query: initialQuery,
      activeTags: new Set(initialTags),
      branch: null
    };

    if (searchInput) {
      searchInput.value = initialQuery;
      searchInput.addEventListener('input', event => {
        state.query = event.target.value.trim();
        applyFilters();
      });
    }

    init().catch(error => {
      console.error(error);
      showError(error.message || 'Unable to load knowledge base content.');
    });

    async function init() {
      showLoading(true);
      const branch = await KB.getDefaultBranch(context);
      state.branch = branch;
      const docs = await loadDocuments(branch);
      state.docs = docs;
      updateArticleCount(docs.length);
      buildTagCloud(docs);
      applyFilters();
      showLoading(false);
    }

    async function loadDocuments(branch) {
      const tree = await KB.getTree(context, branch);
      const docsPath = context.docsPath.replace(/\/+$/, '') + '/';
      const matches = tree.filter(item => item.type === 'blob' && item.path.startsWith(docsPath) && item.path.toLowerCase().endsWith('.md'));

      if (!matches.length) {
        return [];
      }

      const documents = [];
      for (const entry of matches) {
        try {
          const markdown = await KB.fetchMarkdown(context, branch, entry.path);
          const parsed = KB.parseFrontMatter(markdown);
          if (KB.isDraft(parsed.data)) {
            continue;
          }

          const title = parsed.data.title || KB.slugToTitle(entry.path);
          const description = parsed.data.description || KB.createExcerpt(parsed.content, 220);
          const tags = KB.normalizeTags(parsed.data.tags);
          const category = parsed.data.category || parsed.data.section || 'General';
          const updated = parsed.data.updated || parsed.data.lastUpdated || parsed.data.date || null;
          const readTime = KB.estimateReadTime(parsed.content);

          documents.push({
            path: entry.path,
            title,
            description,
            tags,
            category,
            updated,
            readTime,
            content: parsed.content
          });
        } catch (error) {
          console.warn('Failed to load article', entry.path, error);
        }
      }

      documents.sort((a, b) => {
        if (a.updated && b.updated) {
          return new Date(b.updated).getTime() - new Date(a.updated).getTime();
        }
        if (a.updated) {
          return -1;
        }
        if (b.updated) {
          return 1;
        }
        return a.title.localeCompare(b.title);
      });

      return documents;
    }

    function applyFilters() {
      if (!listContainer) {
        return;
      }

      let results = state.docs.slice();
      const query = state.query.toLowerCase();
      if (query) {
        results = results.filter(doc => {
          const haystacks = [doc.title, doc.description, doc.category, doc.tags.join(' '), doc.content];
          return haystacks.some(haystack => haystack && haystack.toLowerCase().includes(query));
        });
      }

      if (state.activeTags.size) {
        results = results.filter(doc => {
          if (!doc.tags.length) {
            return false;
          }
          return Array.from(state.activeTags).every(tag => doc.tags.some(docTag => docTag.toLowerCase() === tag.toLowerCase()));
        });
      }

      renderActiveFilters();
      renderList(results);
      updateResultCount(results.length);
      updateUrlState();
    }

    function renderList(results) {
      listContainer.innerHTML = '';

      if (!results.length) {
        emptyState.hidden = false;
        listContainer.hidden = true;
        return;
      }

      emptyState.hidden = true;
      listContainer.hidden = false;

      const fragment = document.createDocumentFragment();
      results.forEach(doc => {
        const article = document.createElement('article');
        article.className = 'kb-card';

        const category = document.createElement('p');
        category.className = 'category';
        category.textContent = doc.category;
        article.appendChild(category);

        const title = document.createElement('h3');
        const titleLink = document.createElement('a');
        titleLink.href = `doc.html?doc=${encodeURIComponent(doc.path)}`;
        titleLink.textContent = doc.title;
        titleLink.className = 'read-more-link';
        title.appendChild(titleLink);
        article.appendChild(title);

        const description = document.createElement('p');
        description.textContent = doc.description;
        article.appendChild(description);

        const meta = document.createElement('div');
        meta.className = 'meta';
        if (doc.updated) {
          const date = document.createElement('span');
          date.textContent = `Updated ${KB.formatDate(doc.updated)}`;
          meta.appendChild(date);
        }
        const readTime = document.createElement('span');
        readTime.textContent = `${doc.readTime} min read`;
        meta.appendChild(readTime);
        article.appendChild(meta);

        if (doc.tags.length) {
          const tagList = document.createElement('div');
          tagList.className = 'tags';
        doc.tags.forEach(tag => {
          const chip = document.createElement('span');
          chip.textContent = formatTagLabel(tag);
          tagList.appendChild(chip);
        });
          article.appendChild(tagList);
        }

        const link = document.createElement('a');
        link.href = `doc.html?doc=${encodeURIComponent(doc.path)}`;
        link.className = 'read-more';
        link.innerHTML = 'Read article <svg aria-hidden="true" viewBox="0 0 20 20"><path fill="currentColor" d="M12.293 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L14.586 10H4a1 1 0 1 1 0-2h10.586l-2.293-2.293a1 1 0 0 1 0-1.414z"></path></svg>';
        article.appendChild(link);

        fragment.appendChild(article);
      });

      listContainer.appendChild(fragment);
    }

    function buildTagCloud(docs) {
      if (!tagCloud) {
        return;
      }

      const tagCounts = new Map();
      docs.forEach(doc => {
        doc.tags.forEach(tag => {
          const key = tag.toLowerCase();
          tagCounts.set(key, (tagCounts.get(key) || 0) + 1);
        });
      });

      tagCloud.innerHTML = '';

      if (!tagCounts.size) {
        const hint = document.createElement('p');
        hint.textContent = 'Tags will appear once your articles include the "tags" front matter field.';
        hint.className = 'tag-hint';
        tagCloud.appendChild(hint);
        return;
      }

      Array.from(tagCounts.keys())
        .sort((a, b) => a.localeCompare(b))
        .forEach(tag => {
          const button = document.createElement('button');
          const label = `${formatTagLabel(tag)} (${tagCounts.get(tag)})`;
          button.type = 'button';
          button.dataset.tag = tag;
          button.textContent = label;
          if (state.activeTags.has(tag)) {
            button.dataset.active = 'true';
          }
          button.addEventListener('click', () => {
            toggleTag(tag);
          });
          tagCloud.appendChild(button);
        });

      updateTagCloudSelection();
    }

    function toggleTag(tag) {
      if (state.activeTags.has(tag)) {
        state.activeTags.delete(tag);
      } else {
        state.activeTags.add(tag);
      }
      applyFilters();
      updateTagCloudSelection();
    }

    function updateTagCloudSelection() {
      if (!tagCloud) {
        return;
      }

      tagCloud.querySelectorAll('button[data-tag]').forEach(button => {
        const tag = button.dataset.tag;
        button.dataset.active = state.activeTags.has(tag) ? 'true' : 'false';
      });
    }

    function renderActiveFilters() {
      if (!activeFilters) {
        return;
      }

      activeFilters.innerHTML = '';
      if (!state.activeTags.size) {
        activeFilters.hidden = true;
        return;
      }

      activeFilters.hidden = false;
      state.activeTags.forEach(tag => {
        const pill = document.createElement('span');
        pill.className = 'filter-pill';
        pill.textContent = `Tag: ${formatTagLabel(tag)}`;

        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.setAttribute('aria-label', `Remove tag filter ${tag}`);
        removeButton.textContent = '×';
        removeButton.addEventListener('click', () => {
          state.activeTags.delete(tag);
          applyFilters();
          updateTagCloudSelection();
        });

        pill.appendChild(removeButton);
        activeFilters.appendChild(pill);
      });
    }

    function updateArticleCount(count) {
      if (articleCount) {
        articleCount.textContent = count;
      }
    }

    function updateResultCount(count) {
      if (!resultCount) {
        return;
      }

      const pieces = [];
      pieces.push(`${count} article${count === 1 ? '' : 's'}`);
      if (state.query) {
        pieces.push(`matching “${state.query}”`);
      }
      if (state.activeTags.size) {
        pieces.push(`filtered by ${Array.from(state.activeTags).map(formatTagLabel).join(', ')}`);
      }

      resultCount.textContent = pieces.join(' · ');
    }

    function showLoading(isLoading) {
      if (!loadingIndicator) {
        return;
      }
      loadingIndicator.hidden = !isLoading;
    }

    function showError(message) {
      if (!errorState) {
        alert(message);
        return;
      }
      errorState.hidden = false;
      errorState.textContent = message;
      showLoading(false);
    }

    function renderFatalError(message) {
      const fatalContainer = document.createElement('div');
      fatalContainer.className = 'alert error';
      fatalContainer.textContent = message;
      app.innerHTML = '';
      app.appendChild(fatalContainer);
    }

    function updateUrlState() {
      const params = new URLSearchParams();
      if (state.query) {
        params.set('q', state.query);
      }
      if (state.activeTags.size) {
        params.set('tags', Array.from(state.activeTags).join(','));
      }

      const queryString = params.toString();
      const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
    function formatTagLabel(tag) {
      return tag
        .split(/[-_\s]+/)
        .map(part => (part ? part.charAt(0).toUpperCase() + part.slice(1) : ''))
        .join(' ');
    }

  });
})(window, document, window.KB || {});
