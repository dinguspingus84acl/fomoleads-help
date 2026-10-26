# Fomo Leads Help Center

Static help center for Fomo Leads members. Plain HTML, CSS and a little vanilla JavaScript. No build step.

## Structure

- `index.html`: home page with search, collections and article lists
- `articles/<slug>.html`: one page per article
- `assets/css/style.css`: styles
- `assets/js/search.js` and `assets/js/search-index.js`: client-side search (the same index is also in `search-index.json`)
- `assets/img/`: annotated screenshots (WebP)
- `assets/video/`: walkthrough videos (MP4, H.264) and their poster frames
- `assets/brand/`: Fomo Leads logo and favicons, taken from members.fomoleads.io
- `404.html`: not-found page
- `.nojekyll`: tells GitHub Pages to serve files as-is
- `.github/workflows/pages.yml`: deploys the repo root to GitHub Pages on every push to `main`

All links are relative, so the site works at a project URL such as `https://<user>.github.io/<repo>/` or on a custom domain.

## Publish on GitHub Pages

1. Create a repository and push these files to the `main` branch, with this folder as the repo root.
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). The site URL appears in the workflow run.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Questions

Email support@fomoleads.io.
