---
title: Troubleshoot Deployments
description: Diagnose why new Markdown articles are not appearing or updates are missing from the live site.
category: Support
tags: [troubleshooting, deployment]
updated: 2024-02-03
---

If a newly published article is missing or content looks out of date, work through the checks below.

## 1. Confirm the file path

- The file must live somewhere under the `docs/` directory.
- Ensure the filename ends in `.md`.
- If you renamed or moved a file, confirm there are no leftover uppercase letters or spaces in the path.

## 2. Validate the front matter

The site ignores articles marked as drafts. Make sure the top of the file looks similar to the following:

```yaml
---
title: Example article
description: Short summary.
category: Start Here
tags: [example]
updated: 2024-02-03
---
```

If the metadata block is missing, malformed, or contains `draft: true`, the article will be skipped.

## 3. Check the deployment logs

- For GitHub Pages, open the repository → **Actions** → **Pages build and deployment** to inspect recent runs.
- Look for red ❌ icons indicating a failure. Click through to view error details.
- Fix any build errors (for example, merge conflicts, missing files) and push a new commit to trigger another deployment.

## 4. Bypass the cache

Sometimes browsers cache the homepage. Perform a hard refresh or open the site in an incognito/private window. If you use a CDN,
invalidate the cache for the `index.html` and `doc.html` files.

## 5. Verify API rate limits

The article list relies on the GitHub API. If you reload the homepage dozens of times in a short period while unauthenticated, you
might hit the rate limit (60 requests per hour). Wait a few minutes, or sign in to GitHub in the same browser session to increase the
limit.

## 6. Still stuck?

Capture the console output from your browser’s developer tools and open an issue in the repository. Include details about the file you
added, the URL you expected to load, and any error messages displayed in the UI.
