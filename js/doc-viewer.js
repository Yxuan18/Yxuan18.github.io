(function (window, document, KB) {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('doc-app');
    if (!app) {
      return;
    }

    const i18n = window.I18N;

    const translate = (key, replacements, fallback) => {
      if (i18n && typeof i18n.t === 'function') {
        return i18n.t(key, replacements || undefined);
      }
      if (typeof fallback === 'function') {
        return fallback();
      }
      return fallback != null ? fallback : key;
    };

    const state = {
      metadata: null
    };
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
      renderFatalError(translate('errors.noArticleSpecified', null, 'No article was specified. Please access this page from the knowledge base.'));
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

    if (i18n && typeof i18n.onChange === 'function') {
      i18n.onChange(() => {
        renderDocument(false);
      });
    }

    loadDocument().catch(error => {
      console.error(error);
      if (error && error.code === 'draft') {
        showError(translate('errors.draft', null, 'This article is marked as draft and is not published yet.'));
      } else {
        showError(error && error.message ? error.message : translate('errors.articleLoad', null, 'Unable to load the requested article.'));
      }
    });

    async function loadDocument() {
      const branch = await KB.getDefaultBranch(context);
      const markdown = await KB.fetchMarkdown(context, branch, docPath);
      const parsed = KB.parseFrontMatter(markdown);

      if (KB.isDraft(parsed.data)) {
        const draftError = new Error('draft');
        draftError.code = 'draft';
        throw draftError;
      }

      const title = parsed.data.title || KB.slugToTitle(docPath);
      const rawCategory = parsed.data.category || parsed.data.section || null;
      const category = typeof rawCategory === 'string' ? rawCategory.trim() || null : rawCategory;
      const tags = KB.normalizeTags(parsed.data.tags);
      const updated = parsed.data.updated || parsed.data.lastUpdated || parsed.data.date || null;
      const readTime = KB.estimateReadTime(parsed.content);

      if (!window.marked) {
        throw new Error('Markdown renderer not found. Please ensure marked.js is loaded.');
      }

      state.metadata = {
        title,
        category,
        tags,
        updated,
        readTime,
        contentHtml: window.marked.parse(parsed.content)
      };

      renderDocument(true);
    }

    function renderDocument(includeContent = false) {
      const metadata = state.metadata;
      if (!metadata) {
        return;
      }

      const { title, category, tags, updated, readTime, contentHtml } = metadata;

      if (titleEl) {
        titleEl.textContent = title;
      }
      document.title = translate('meta.docWindowTitle', { title }, () => `${title} · Knowledge Base`);

      if (categoryEl) {
        const trimmedCategory = typeof category === 'string' ? category.trim() : '';
        const categoryLabel = trimmedCategory || translate('common.generalCategory', null, 'General');
        if (categoryLabel) {
          categoryEl.textContent = categoryLabel;
          categoryEl.hidden = false;
        } else {
          categoryEl.hidden = true;
        }
      }

      if (updatedEl) {
        if (updated) {
          const formatted = KB.formatDate(updated);
          if (formatted) {
            updatedEl.textContent = translate('list.updatedOn', { date: formatted }, () => `Updated ${formatted}`);
            updatedEl.hidden = false;
          } else {
            updatedEl.hidden = true;
          }
        } else {
          updatedEl.hidden = true;
        }
      }

      if (readTimeEl) {
        readTimeEl.textContent = translate('list.readTime', { minutes: readTime }, () => `${readTime} min read`);
      }

      if (tagsEl && includeContent) {
        tagsEl.innerHTML = '';
        if (tags && tags.length) {
          tags.forEach(tag => {
            const link = document.createElement('a');
            link.href = `index.html?tag=${encodeURIComponent(tag.toLowerCase())}`;
            link.textContent = tag;
            tagsEl.appendChild(link);
          });
          tagsEl.hidden = false;
        } else {
          tagsEl.hidden = true;
        }
      }

      if (includeContent && contentHtml != null && contentEl) {
        contentEl.innerHTML = contentHtml;
        enhanceContent(contentEl);
        buildToc(contentEl, tocEl);
      } else if (!includeContent && contentEl) {
        buildToc(contentEl, tocEl);
      }
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
      const fallbackMessage = translate('errors.articleLoad', null, 'Unable to load the requested article.');
      const output = message || fallbackMessage;
      if (!errorEl) {
        alert(output);
        return;
      }
      errorEl.hidden = false;
      errorEl.textContent = output;
    }

    function renderFatalError(message) {
      const fatalContainer = document.createElement('div');
      fatalContainer.className = 'alert error';
      fatalContainer.textContent = message || translate('errors.articleLoad', null, 'Unable to load the requested article.');
      app.innerHTML = '';
      app.appendChild(fatalContainer);
    }
  });
})(window, document, window.KB || {});
