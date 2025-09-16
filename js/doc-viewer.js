(function (window, document, KB) {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('doc-app');
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

    const params = new URLSearchParams(window.location.search);
    const docParam = params.get('doc');
    if (!docParam) {
      renderFatalError('No article was specified. Please access this page from the knowledge base.');
      return;
    }

    const docPath = decodeURIComponent(docParam).replace(/^\/+/, '');

    const titleEl = document.getElementById('doc-title');
    const categoryEl = document.getElementById('doc-category');
    const updatedEl = document.getElementById('doc-updated');
    const readTimeEl = document.getElementById('doc-read-time');
    const tagsEl = document.getElementById('doc-tags');
    const contentEl = document.getElementById('doc-content');
    const tocEl = document.getElementById('toc');
    const errorEl = document.getElementById('doc-error');

    loadDocument().catch(error => {
      console.error(error);
      showError(error.message || 'Unable to load the requested article.');
    });

    async function loadDocument() {
      const branch = await KB.getDefaultBranch(context);
      const markdown = await KB.fetchMarkdown(context, branch, docPath);
      const parsed = KB.parseFrontMatter(markdown);

      if (KB.isDraft(parsed.data)) {
        throw new Error('This article is marked as draft and is not published yet.');
      }

      const title = parsed.data.title || KB.slugToTitle(docPath);
      const category = parsed.data.category || parsed.data.section || 'General';
      const tags = KB.normalizeTags(parsed.data.tags);
      const updated = parsed.data.updated || parsed.data.lastUpdated || parsed.data.date || null;
      const readTime = KB.estimateReadTime(parsed.content);

      if (titleEl) {
        titleEl.textContent = title;
      }
      document.title = `${title} · Knowledge Base`;

      if (categoryEl) {
        categoryEl.textContent = category;
      }

      if (updatedEl && updated) {
        updatedEl.textContent = `Updated ${KB.formatDate(updated)}`;
        updatedEl.hidden = false;
      }

      if (readTimeEl) {
        readTimeEl.textContent = `${readTime} min read`;
      }

      if (tagsEl) {
        tagsEl.innerHTML = '';
        if (tags.length) {
          tags.forEach(tag => {
            const link = document.createElement('a');
            link.href = `index.html?tag=${encodeURIComponent(tag.toLowerCase())}`;
            link.textContent = tag;
            tagsEl.appendChild(link);
          });
        } else {
          tagsEl.hidden = true;
        }
      }

      if (!window.marked) {
        throw new Error('Markdown renderer not found. Please ensure marked.js is loaded.');
      }

      const html = window.marked.parse(parsed.content);
      contentEl.innerHTML = html;

      enhanceContent(contentEl);
      buildToc(contentEl, tocEl);
    }

    function enhanceContent(container) {
      if (!container) {
        return;
      }

      container.querySelectorAll('a[href^="http"]').forEach(anchor => {
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noopener');
      });
    }

    function buildToc(container, tocContainer) {
      if (!container || !tocContainer) {
        return;
      }

      const headings = Array.from(container.querySelectorAll('h2, h3'));
      if (!headings.length) {
        tocContainer.hidden = true;
        return;
      }

      const list = document.createElement('ul');
      const slugCounts = new Map();

      headings.forEach(heading => {
        const level = Number(heading.tagName.replace('H', ''));
        const slug = createHeadingSlug(heading.textContent, slugCounts);
        heading.id = heading.id || slug;

        const item = document.createElement('li');
        if (level === 3) {
          item.className = 'nested';
        }

        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        item.appendChild(link);
        list.appendChild(item);
      });

      tocContainer.hidden = false;
      tocContainer.querySelector('ul')?.remove();
      tocContainer.appendChild(list);
    }

    function createHeadingSlug(text, slugCounts) {
      const baseSlug = text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');
      const current = slugCounts.get(baseSlug) || 0;
      slugCounts.set(baseSlug, current + 1);
      return current ? `${baseSlug}-${current}` : baseSlug || `section-${slugCounts.size + 1}`;
    }

    function showError(message) {
      if (!errorEl) {
        alert(message);
        return;
      }
      errorEl.hidden = false;
      errorEl.textContent = message;
    }

    function renderFatalError(message) {
      const fatalContainer = document.createElement('div');
      fatalContainer.className = 'alert error';
      fatalContainer.textContent = message;
      app.innerHTML = '';
      app.appendChild(fatalContainer);
    }
  });
})(window, document, window.KB || {});
