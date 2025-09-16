---
title: Publish a New Article
description: Step-by-step instructions for writing, reviewing, and deploying Markdown content to the knowledge base.
category: Maintain
tags: [contributing, markdown, workflow]
updated: 2024-02-01
---

Follow this checklist whenever you want to add or update an article.

## 1. Create your Markdown file

1. Open the repository locally or within the GitHub web editor.
2. Add a new file inside the `docs/` directory. Use lowercase, hyphenated file names (for example, `setting-up-sso.md`).
3. If you want to group topics, place the file in a sub-folder: `docs/onboarding/creating-accounts.md`.

## 2. Add front matter metadata

Each article starts with a block between two sets of `---`. This metadata powers the site UI, so keep it accurate:

```yaml
---
title: Setting up single sign-on
description: Connect the product to your identity provider in under ten minutes.
category: Operations
tags: [authentication, how-to]
updated: 2024-02-01
---
```

- `title` becomes the article heading.
- `description` appears as the summary on the home page.
- `category` groups related articles.
- `tags` enable tag-based filtering. Use simple, lowercase keywords.
- `updated` should reflect the last significant edit.
- Optional: add `draft: true` to hide the file until it is ready to publish.

## 3. Write the body

Use plain Markdown. The viewer supports headings (`#` through `####`), lists, tables, code blocks, callouts, and links. Stick to
sentence-case headings and keep paragraphs short for readability.

### Embedding media

- **Images:** store static assets alongside the article (`docs/images/...`) and reference them with relative paths.
- **Diagrams:** export diagrams as PNG or SVG before embedding.
- **Videos:** link out to the hosted video rather than embedding large files in the repository.

## 4. Review and commit

1. Preview the Markdown locally (for example, with VS Code) to ensure formatting looks correct.
2. Run spelling or linting tools if your project uses them.
3. Commit the new file and any assets with a descriptive message.

If you work on a team, open a pull request so someone else can review the changes. Once merged into the default branch, GitHub Pages
(or your hosting provider) redeploys automatically. Refresh the site after the build completes to see the new article listed.

## 5. Keep content fresh

Schedule regular reviews for critical content. At minimum, glance over high-traffic articles quarterly to confirm instructions are still
accurate. Update the `updated` field whenever the material changes so readers know it is current.
