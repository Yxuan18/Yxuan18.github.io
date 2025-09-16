(function (window, document) {
  'use strict';

  const translations = {
    zh: {
      'meta.homeTitle': '知识库 | 基于 Markdown 的帮助中心',
      'meta.homeDescription': '提交 Markdown 文档，即可通过自定义域名在互联网上访问你的知识库。',
      'meta.docTitle': '知识库文章',
      'meta.docDescription': '阅读直接从 Markdown 文件发布的知识库文章。',
      'meta.docWindowTitle': '{title} · 知识库',
      'brand.name': '知识库',
      'nav.primaryLabel': '主导航',
      'nav.overview': '概览',
      'nav.articles': '文章',
      'nav.contribute': '贡献',
      'nav.backToTop': '返回顶部',
      'nav.contributorGuide': '贡献者指南',
      'nav.viewSource': '查看源码',
      'nav.footerLabel': '底部导航',
      'language.toggle': '切换到英文',
      'hero.title': '几分钟内上线你的知识库',
      'hero.description': '将 Markdown 文件放入 <code>docs/</code> 文件夹，它们就会立即在网上发布。通过搜索、筛选和分享集中管理团队所需的全部信息。',
      'hero.cta.primary': '浏览文章',
      'hero.cta.secondary': '发布新文章',
      'hero.quickStatsLabel': '知识库亮点',
      'hero.stat.articles': '已发布文章',
      'hero.stat.articlesDesc': '当前可用的文章数量。',
      'hero.stat.markdown': '专注 Markdown',
      'hero.stat.markdownDesc': '在本地撰写内容并自动部署发布。',
      'hero.stat.searchable': '随时可搜索',
      'hero.stat.searchableDesc': '通过关键字、分类和标签进行筛选。',
      'search.label': '搜索整个知识库',
      'search.placeholder': '按标题、主题或关键字搜索',
      'tools.ariaLabel': '知识库筛选与工具',
      'tools.tagHeading': '热门标签',
      'tags.ariaLabel': '标签筛选',
      'articles.ariaLabel': '知识库文章',
      'articles.loading': '文章加载中…',
      'articles.empty.title': '发布你的第一篇文章',
      'articles.empty.body': '你添加到 <code>docs/</code> 的每个 Markdown 文件都会自动出现在这里。使用下面的模板开始创作。',
      'contribute.heading': '使用 Markdown 发布',
      'contribute.intro': '保持工作流简单。用 Markdown 撰写、提交到代码仓库，剩下的部署交给 GitHub Pages（或任意静态托管服务）。文件顶部的 Front Matter 将用于驱动搜索、筛选和文章元数据。',
      'contribute.callout1.title': '1. 创建 Markdown 文件',
      'contribute.callout1.body': '使用描述性文件名，例如 <code>incident-response.md</code>。',
      'contribute.callout2.title': '2. 添加有用的元数据',
      'contribute.callout2.body': '包括标题、描述、标签和分类，站点即可自动组织内容。',
      'contribute.callout3.title': '3. 提交并推送',
      'contribute.callout3.body': '当文件进入默认分支后，知识库会自动更新。',
      'contribute.draftHint': '需要隐藏草稿？在 Front Matter 中添加 <code>draft: true</code>。你也可以在 <code>docs/</code> 内的子文件夹中整理内容，系统会递归索引所有文件。',
      'faq.heading': '常见问题',
      'faq.q1': '<strong>文章存放在哪里？</strong> 所有 Markdown 文件都位于仓库的 <code>docs/</code> 目录。',
      'faq.q2': '<strong>如何分享？</strong> 将你的自定义域名指向 GitHub Pages，或直接分享 <code>https://yxuan18.github.io</code>。',
      'faq.q3': '<strong>可以嵌套内容吗？</strong> 可以。将 Markdown 文件放入 <code>docs/</code> 的子文件夹中，系统同样会索引。',
      'faq.q4': '<strong>可以使用其他托管吗？</strong> 当然。任何能够托管此仓库的静态站点服务都可以。',
      'footer.note': '为以 Markdown 为中心的团队打造，可部署到任意静态站点。',
      'doc.footer.note': '文章直接来自 <code>docs/</code> 目录中的 Markdown 文件。',
      'doc.return': '返回知识库',
      'doc.loadingTitle': '加载中…',
      'doc.tocHeading': '页面导航',
      'doc.loadingContent': '文章加载中…',
      'errors.loadKnowledgeBase': '无法加载知识库内容。',
      'errors.noArticleSpecified': '未指定文章，请从知识库页面访问此链接。',
      'errors.articleLoad': '无法加载所请求的文章。',
      'errors.draft': '此文章被标记为草稿，尚未发布。',
      'list.readArticle': '阅读文章',
      'list.updatedOn': '更新于 {date}',
      'list.readTime': '{minutes} 分钟阅读',
      'list.resultCount.count': '共 {count} 篇文章',
      'list.resultCount.query': '匹配“{query}”',
      'list.resultCount.tags': '筛选条件：{tags}',
      'tags.hint': '当文章包含 “tags” 元数据后，这里会显示可筛选的标签。',
      'tags.filterLabel': '{tag}（{count}）',
      'filters.tagPrefix': '标签：{tag}',
      'filters.removeTagAria': '移除标签筛选 {tag}',
      'meta.docWindowTitle': '{title} · 知识库',
      'common.generalCategory': '常规'
    },
    en: {
      'meta.homeTitle': 'Knowledge Base | Markdown-powered help centre',
      'meta.homeDescription': 'Publish Markdown documents and access them anywhere with your custom domain.',
      'meta.docTitle': 'Knowledge Base Article',
      'meta.docDescription': 'Read knowledge base articles published directly from Markdown files.',
      'meta.docWindowTitle': '{title} · Knowledge Base',
      'brand.name': 'Knowledge Base',
      'nav.primaryLabel': 'Primary navigation',
      'nav.overview': 'Overview',
      'nav.articles': 'Articles',
      'nav.contribute': 'Contribute',
      'nav.backToTop': 'Back to top',
      'nav.contributorGuide': 'Contributor guide',
      'nav.viewSource': 'View source',
      'nav.footerLabel': 'Footer navigation',
      'language.toggle': 'Switch to Chinese',
      'hero.title': 'Ship your knowledge base in minutes',
      'hero.description': 'Drop Markdown files into the <code>docs/</code> folder and they are instantly available on the web. Search, filter, and share everything your team needs to know from a single, elegant hub.',
      'hero.cta.primary': 'Browse articles',
      'hero.cta.secondary': 'Publish a new article',
      'hero.quickStatsLabel': 'Knowledge base highlights',
      'hero.stat.articles': 'Published articles',
      'hero.stat.articlesDesc': 'Total number of articles currently available.',
      'hero.stat.markdown': 'Markdown first',
      'hero.stat.markdownDesc': 'Author content locally and push to deploy automatically.',
      'hero.stat.searchable': 'Always searchable',
      'hero.stat.searchableDesc': 'Filter by keywords, categories, and reusable tags.',
      'search.label': 'Search the knowledge base',
      'search.placeholder': 'Search by title, topic, or keyword',
      'tools.ariaLabel': 'Knowledge base filters and tools',
      'tools.tagHeading': 'Popular tags',
      'tags.ariaLabel': 'Tag filters',
      'articles.ariaLabel': 'Knowledge base articles',
      'articles.loading': 'Loading articles…',
      'articles.empty.title': 'Publish your first article',
      'articles.empty.body': 'Every Markdown file you add to <code>docs/</code> appears here automatically. Use the template below to get started.',
      'contribute.heading': 'Publish with Markdown',
      'contribute.intro': 'Keep your workflow simple. Write in Markdown, commit to the repository, and GitHub Pages (or any static host) takes care of the rest. Front matter at the top of each file powers search, filters, and article metadata.',
      'contribute.callout1.title': '1. Create a markdown file',
      'contribute.callout1.body': 'Name it descriptively, like <code>incident-response.md</code>.',
      'contribute.callout2.title': '2. Add helpful metadata',
      'contribute.callout2.body': 'Include title, description, tags, and a category so the site can organise it.',
      'contribute.callout3.title': '3. Commit and push',
      'contribute.callout3.body': 'Once the file lands on the default branch, the knowledge base updates automatically.',
      'contribute.draftHint': 'Need to hide a draft? Add <code>draft: true</code> to the front matter. You can also organise content into sub-folders inside <code>docs/</code>; everything is indexed recursively.',
      'faq.heading': 'Frequently asked questions',
      'faq.q1': '<strong>Where are the articles stored?</strong> Every markdown file lives in the <code>docs/</code> directory of this repository.',
      'faq.q2': '<strong>How do I share it?</strong> Point your custom domain at GitHub Pages or share <code>https://yxuan18.github.io</code>.',
      'faq.q3': '<strong>Can I nest content?</strong> Yes. Place markdown files in sub-folders under <code>docs/</code>; they will still be indexed.',
      'faq.q4': '<strong>Can I use another host?</strong> Absolutely. Any static hosting service that serves this repository works.',
      'footer.note': 'Built for Markdown-first teams. Deploy anywhere a static site can live.',
      'doc.footer.note': 'Articles are published straight from Markdown files inside <code>docs/</code>.',
      'doc.return': 'Back to the knowledge base',
      'doc.loadingTitle': 'Loading…',
      'doc.tocHeading': 'On this page',
      'doc.loadingContent': 'Loading article…',
      'errors.loadKnowledgeBase': 'Unable to load knowledge base content.',
      'errors.noArticleSpecified': 'No article was specified. Please access this page from the knowledge base.',
      'errors.articleLoad': 'Unable to load the requested article.',
      'errors.draft': 'This article is marked as draft and is not published yet.',
      'list.readArticle': 'Read article',
      'list.updatedOn': 'Updated {date}',
      'list.readTime': '{minutes} min read',
      'list.resultCount.count': '{count} article{plural}',
      'list.resultCount.query': 'matching “{query}”',
      'list.resultCount.tags': 'filtered by {tags}',
      'tags.hint': 'Tags will appear once your articles include the "tags" front matter field.',
      'tags.filterLabel': '{tag} ({count})',
      'filters.tagPrefix': 'Tag: {tag}',
      'filters.removeTagAria': 'Remove tag filter {tag}',
      'common.generalCategory': 'General'
    }
  };

  const locales = {
    zh: 'zh-Hans',
    en: 'en'
  };

  const storageKey = 'kb-language';
  const listeners = new Set();
  const toggleButtons = new Set();
  let currentLanguage = 'zh';

  function normalizeLanguage(lang) {
    return lang && Object.prototype.hasOwnProperty.call(translations, lang) ? lang : 'zh';
  }

  function translate(key, replacements) {
    const languagePack = translations[currentLanguage] || {};
    let template = languagePack[key];
    if (template == null) {
      const fallbackPack = translations.en || {};
      template = fallbackPack[key];
    }
    if (template == null) {
      template = key;
    }

    if (replacements && typeof replacements === 'object') {
      return template.replace(/\{(\w+)\}/g, (match, name) => {
        if (Object.prototype.hasOwnProperty.call(replacements, name)) {
          return replacements[name];
        }
        return '';
      });
    }

    return template.replace(/\{(\w+)\}/g, '');
  }

  function apply(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) {
        return;
      }
      const mode = el.getAttribute('data-i18n-mode');
      const value = translate(key);
      if (mode === 'html') {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attrPairs = el.getAttribute('data-i18n-attr');
      if (!attrPairs) {
        return;
      }
      attrPairs.split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(part => (part || '').trim());
        if (attr && key) {
          el.setAttribute(attr, translate(key));
        }
      });
    });
  }

  function updateDocumentLanguage() {
    const locale = locales[currentLanguage] || locales.zh;
    document.documentElement.setAttribute('lang', locale);
    document.documentElement.setAttribute('data-language', currentLanguage);
  }

  function updateToggleButtons() {
    toggleButtons.forEach(button => {
      button.setAttribute('data-language', currentLanguage);
    });
  }

  function setLanguage(lang) {
    const normalized = normalizeLanguage(lang);
    if (normalized === currentLanguage) {
      return;
    }
    currentLanguage = normalized;
    updateDocumentLanguage();
    try {
      window.localStorage.setItem(storageKey, currentLanguage);
    } catch (error) {
      // Ignore storage errors
    }
    apply();
    updateToggleButtons();
    listeners.forEach(listener => {
      try {
        listener(currentLanguage);
      } catch (error) {
        console.error(error);
      }
    });
  }

  function registerToggle(button) {
    if (!button || toggleButtons.has(button)) {
      return;
    }
    toggleButtons.add(button);
    button.addEventListener('click', () => {
      setLanguage(currentLanguage === 'zh' ? 'en' : 'zh');
    });
    button.setAttribute('data-language', currentLanguage);
  }

  function setupToggles() {
    document.querySelectorAll('.language-toggle').forEach(registerToggle);
  }

  function initialize() {
    try {
      const stored = window.localStorage.getItem(storageKey);
      currentLanguage = normalizeLanguage(stored) || currentLanguage;
    } catch (error) {
      currentLanguage = 'zh';
    }
    updateDocumentLanguage();
    apply();
    setupToggles();
    updateToggleButtons();
  }

  const api = {
    t: translate,
    apply,
    setLanguage,
    getLanguage() {
      return currentLanguage;
    },
    getLocale() {
      const locale = locales[currentLanguage];
      return locale || locales.zh;
    },
    onChange(callback) {
      if (typeof callback === 'function') {
        listeners.add(callback);
        return () => listeners.delete(callback);
      }
      return () => {};
    }
  };

  window.I18N = api;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize();
  }
})(window, document);
