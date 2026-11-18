# Knowledge Weaver — Apna Shiksha Kendra

A free, responsive starter website for `knowledgeweaver.in`.

## Files
- `index.html` — website content and structure
- `styles.css` — design and responsive layout
- `script.js` — mobile navigation, resource search and class filters
- `CNAME` — custom domain for GitHub Pages

## Preview on your computer
1. Extract the ZIP file.
2. Open the `knowledge_weaver_v1` folder.
3. Double-click `index.html` to preview it in your browser.
4. You can also edit the files using Visual Studio Code.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new **public** repository named `knowledge-weaver`.
2. Upload `index.html`, `styles.css`, `script.js`, `README.md` and `CNAME` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the site.

## Connect your GoDaddy domain
In the repository, open **Settings → Pages → Custom domain** and enter:

`knowledgeweaver.in`

Save. GitHub will provide the DNS records required for your domain. In GoDaddy DNS management, add the exact records GitHub currently recommends. Do not delete unrelated records, especially any email records. Enable **Enforce HTTPS** in GitHub Pages after DNS verification and certificate provisioning.

DNS changes and HTTPS provisioning can take some time. Follow GitHub's current documentation:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Before launch
- Replace the empty `mailto:` link in `index.html` with your intended public contact email.
- Add your own PDF links only when you are ready to publish them.
- Replace the sample resource cards with real chapter titles and materials.
- Check all pages and links on mobile and desktop.

## Important limitations of this first version
This is a static public website. It does **not** include secure student accounts, payment processing, private paid downloads, or a protected PDF reader. Do not upload paid or confidential notes to a public GitHub repository. Those features need a secure backend and private file storage in a later stage.
