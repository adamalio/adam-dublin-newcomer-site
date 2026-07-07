# Implement real web images on the concise Dublin Astrolabe site

Adam explicitly asked: learn how to use images from the web and implement that on the website so he can see it.

Current site is concise and action-first. Preserve that. Do NOT add bloat. Use real web images as evidence/texture only where they make the actions more concrete.

Available downloaded real web images in `web-images/`:
1. `web-images/grand-canal-dock.jpg`
   - Wikimedia Commons: File:Grand-canal-docks-dublin.jpg
   - Author: Remca
   - License: CC BY-SA 4.0
   - Page: https://commons.wikimedia.org/wiki/File:Grand-canal-docks-dublin.jpg
2. `web-images/grand-canal-station.jpg`
   - Wikimedia Commons: File:Dublin City - Grand Canal Dock Railway Station And Surrounding Area - 5546980629.jpg
   - Author: William Murphy
   - License: CC BY-SA 2.0
   - Page: https://commons.wikimedia.org/wiki/File:Dublin_City_-_Grand_Canal_Dock_Railway_Station_And_Surrounding_Area_-_5546980629.jpg
3. `web-images/sandymount-strand.jpg`
   - Wikimedia Commons: File:Sandymount Strand - geograph.org.uk - 467652.jpg
   - Author: Doug Lee
   - License: CC BY-SA 2.0
   - Page: https://commons.wikimedia.org/wiki/File:Sandymount_Strand_-_geograph.org.uk_-_467652.jpg
4. `web-images/aviva-stadium.jpg`
   - Wikimedia Commons: File:Aviva Stadium(Dublin Arena).JPG
   - Author: Tarafuku10
   - License: Public domain
   - Page: https://commons.wikimedia.org/wiki/File:Aviva_Stadium(Dublin_Arena).JPG

Task:
- Edit `index.html` and `styles.css` (and `app.js` only if necessary).
- Add a compact real-image strip or evidence panel near the top / action board.
- Use 3-4 images max, with captions tied to action: Docklands base, commute rail/dock, Sandymount reset, football/stadium.
- Keep the generated astrolabe hero as the atmospheric hero, but make the real photos visible early enough that Adam sees web images were used.
- Include small attribution/source links in a concise credits area, not huge legal text.
- Ensure images are local files, not hotlinked.
- Keep page concise: no more than 9 `<p>` tags, checklist still 8 items, no new decorative fluff.
- Maintain premium dark/esoteric design: images should look like evidence cards / film stills, not stock-photo collage.

Verify:
- `node --check app.js`
- ensure all four image files are referenced or intentionally at least three are referenced
- ensure `<img` count >= 4 total including hero
- ensure checklist items = 8
- no huge text expansion.