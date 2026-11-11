# Azita J — azitaj.com

A small multi-page website in plain HTML and CSS. It doesn't use a framework or build step, so it runs on any web host.

## Files

```
index.html            Home: one screen — logo and descriptor, portrait + Visionary Approach, three tiles linking to the pages below
about.html            A Visionary Approach + About Me
approach.html         The Approach
living.html           Effortless Living
selections.html       Selections gallery (selected projects)
contact.html          Contact details + inquiry form
css/theme.css         Theme settings: colors, fonts, sizes, photo crops (written by the theme editor)
css/styles.css        Layout and styling; reads its values from theme.css
editor.html           Theme editor (not linked from the site, hidden from search engines)
js/main.js            Small extras: form sending, nav highlight, footer year
assets/logo/          Transparent logo, wordmark, J monogram, favicons
assets/img/           Portrait, image tiles, social share card
```

## Page structure

The home page fits in one screen on desktop: logo and intro line, then two
blocks on top (framed portrait + "A Visionary Approach" with an About Me button)
and three image tiles below (Selections, The Approach, Effortless Living),
then a contact strip.
Each tile opens its own page. Every inner page has the same top menu and a
"Continue" link to the next page: About → Approach → Living → Selections → Contact.

## Common edits

- **Text:** open the page's `.html` file and edit the words between the tags. Each section is labelled with a comment like `<!-- ============ ABOUT ME ============ -->`.
- **Colors, fonts, sizes, photo crops:** use the theme editor (below) instead of editing CSS by hand.
- **Swap an image:** replace the file in `assets/img/` and keep the same filename. Recommended sizes:
  - `azita-portrait.jpg`: portrait, about 1000 × 1250 px
  - `tile-coast-dunes.jpg`, `tile-arch-courtyard.jpg`, `tile-terrace-lounge.jpg`: landscape, at least 1800 × 1200 px

  The current tiles are cropped from the mockup and are low resolution. Replace them with real photos or renderings before launch.

## Theme editor

Open **azitaj.com/editor.html**. It's a private page: there are no links to it on the site, and it's hidden from search engines.

1. Adjust colors, fonts, text sizes, spacing, the home page logo and portrait, and photo shapes and crops. The preview on the right updates as you go. Use **Page** and **Desktop / Tablet / Phone** to check each page.
2. Changed settings get a gold dot. If a text color gets hard to read, a warning appears under it. **Undo** steps back, and **Reset to live site** throws away everything you changed.
3. Your changes are kept in your browser if you close the tab. They aren't on the live site yet.
4. Click **Download theme file**. That saves `theme.css`.
5. Put it live: open https://github.com/livio96/azitaj/upload/main/css, drag `theme.css` in (rename it if your browser added a number), and click **Commit changes**. The site updates in 1–2 minutes; refresh with Ctrl + F5.

To keep working on a saved version later, use **Open theme file…**. To undo a published theme, upload an older `theme.css`, or restore it from the repo history.

## Inquiry form

The form on `contact.html` sends to info@azitaj.com through FormSubmit (free, no account). The first time anyone submits it, FormSubmit emails an activation link to info@azitaj.com. Click it once and every later inquiry arrives in that inbox. Until then, visitors see a message asking them to email info@azitaj.com directly.

## Publish

Pick any one of these:

- **Netlify (easiest):** drag this `site` folder onto https://app.netlify.com/drop, then add the domain azitaj.com under *Domain settings*.
- **GitHub Pages:** push this folder to a GitHub repo, then turn on Pages under *Settings → Pages* (branch `main`, root folder), then add azitaj.com as the custom domain.
- **Existing host:** upload the contents of this folder to the web root (usually `public_html`).

## Figma

To bring the page into Figma, use the free **html.to.design** plugin. Import from the live URL once it's published, or upload the `site` folder as a zip.
