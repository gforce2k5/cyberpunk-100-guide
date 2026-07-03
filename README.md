# Cyberpunk 2077 — 100% Route

Mobile-first completionist companion site for Cyberpunk 2077 + Phantom Liberty.

## Local setup

```bash
npm install
npm run dev
```

## GitHub Pages deploy

1. Create a GitHub repo named `cyberpunk-100-guide`.
2. Push this project to the `main` branch.
3. In GitHub: Settings → Pages → Source → GitHub Actions.
4. Push to `main`; the included workflow deploys the site.

If your repo name is different, edit `vite.config.js` and change:

```js
base: '/cyberpunk-100-guide/'
```

to:

```js
base: '/YOUR_REPO_NAME/'
```

## Progress storage

Checklist progress is stored locally in the browser using `localStorage`, so it works well on your phone without an account or backend.

