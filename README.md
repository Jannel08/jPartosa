# Jannel Partosa — Portfolio (React)

React + Vite version of the portfolio. Same design, same content.

## Run it on your computer
```bash
npm install
npm run dev
```
Then open the link it prints (usually http://localhost:5173/jPartosa/).

## Put it on GitHub Pages
1. Make sure `vite.config.js` has `base: "/jPartosa/"` (your repo name).
2. Push this project to your `jPartosa` repo.
3. Run: `npm run deploy` (this builds the site and publishes it to the `gh-pages` branch).
4. On GitHub: Settings → Pages → Source: "Deploy from a branch" → Branch: `gh-pages` / `(root)`.

Your site will be at https://jannel08.github.io/jPartosa/

## Files you still need to add
- `public/background.mp4` — the video background of the About page (it wasn't in the files I received).

## Placeholders to update later
- Phone number in `src/pages/Contact.jsx` (currently +63 900 000 0000)
- Projects 2–5 in `src/data/projects.js` still use example.com links
