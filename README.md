# Dublin Astrolabe

An action-first static relocation board for Adam's Hamburg-to-Dublin move. It combines housing and commute decisions, arrival admin, Google onboarding references, social/football actions, a filterable checklist and source links.

## Open locally

No npm dependencies or build step are required. From the repository root:

```sh
git clone https://github.com/adamalio/adam-dublin-newcomer-site.git
cd adam-dublin-newcomer-site
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://localhost:8000`. The configured publishing path is GitHub Pages via `.github/workflows/deploy-pages.yml` on `master`. The default project URL would be [adamalio.github.io/adam-dublin-newcomer-site/](https://adamalio.github.io/adam-dublin-newcomer-site/); confirm the current Pages URL in repository Settings or the latest deployment before treating it as live.

## Files and design context

| File | Role |
| --- | --- |
| `index.html` | Page content, section anchors, source links and metadata |
| `styles.css` | Astrolabe visual direction and responsive layout |
| `app.js` | Checklist state, filtering and interactive rendering |
| `dublin-astrolabe-hero.png` and `web-images/` | Local visual assets |
| [concise-redesign-brief.md](concise-redesign-brief.md) | Concise action-first design requirements |
| [esoteric-redesign-brief.md](esoteric-redesign-brief.md) | Visual direction preceding the concise brief |
| [deep-relocation-brief.md](deep-relocation-brief.md) | Relocation research context |

All earlier briefs and assets remain available. The current page should remain concise and actionable; additions should have a source and a clear arrival decision they support.

## Data and sources

Checklist progress is stored under `adam-dublin-checklist` in this browser's `localStorage`. It does not sync between devices or accounts. Preserve that storage during routine work; test in a separate browser profile rather than clearing a real checklist.

Relocation guidance is curated content, not a live feed. The page includes a 2025 cost-of-living reference; its presence does not prove every source was rechecked recently. Follow the official links in the Sources section when confirming PPS, tax, healthcare or transport rules. Keep employer guidance and the final relocation letter authoritative for personal terms; do not invent amounts or deadlines.

## Verification

```sh
node --check app.js
```

Then serve the site and check:

1. Hero and section links at desktop and phone widths, including keyboard navigation.
2. All checklist filters; toggle a test item and reload to confirm persistence in the test profile.
3. Local images and CSS load beneath a project URL, not just `/`.
4. Source links still point to the intended official guidance; record the check date when refreshing factual claims.

The deployment stages files from the repository root, so review public content before publishing. Do not add private letters, employer documents or credentials here. A future content refresh should update source dates and decisions while preserving existing checklist keys.
