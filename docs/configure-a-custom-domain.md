---
title: Configure a Custom Domain
description: Point your knowledge base to a memorable domain name using GitHub Pages or another static host.
category: Operations
tags: [deployment, dns, hosting]
updated: 2024-02-02
---

You can share the knowledge base from the default GitHub Pages URL or attach a custom domain. The process takes only a few minutes and
helps your team remember where to find documentation.

## 1. Decide on your host

The site works anywhere static files can be served. Common options include:

- **GitHub Pages (default).** Ideal if this repository already publishes to `<username>.github.io`.
- **Cloudflare Pages, Netlify, or Vercel.** Connect the repository and let the platform rebuild whenever you push changes.
- **Self-hosted static server.** Copy the repository contents to your own infrastructure.

The steps below assume you are using GitHub Pages, but the DNS configuration is similar elsewhere.

## 2. Add a `CNAME` file

Inside the repository root, create a file named `CNAME` containing your desired domain, for example:

```
docs.example.com
```

Commit and push the change. GitHub Pages reads this file to map the site to your domain.

## 3. Update DNS records

Add the following records with your DNS provider:

| Type | Name | Value |
| ---- | ---- | ----- |
| CNAME | `docs` | `<username>.github.io` |
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |

> If you are using an apex domain (for example `example.com`), create the four A records pointing to GitHub Pages. For a subdomain,
> the CNAME record is sufficient.

DNS changes may take up to an hour to propagate. You can check status with `dig docs.example.com +short`.

## 4. Enforce HTTPS

In your repository settings under **Pages**, enable “Enforce HTTPS” once the certificate becomes available. This ensures every article
is delivered securely.

## 5. Test the site

Visit the new domain and browse a few articles. If you see a 404 or certificate warning, wait a few more minutes or double-check the DNS
configuration. You can always fall back to the default GitHub Pages URL while DNS propagates.

With the domain live, share it with your team and bookmark it for quick reference.
