# Azita J — azitaj.com

A one-page website in plain HTML and CSS. It doesn't use a framework or build step, so it runs on any web host.

## Files

```
index.html            The whole page (all sections, in order)
css/styles.css        All styling. Brand colors and fonts are at the top under :root
js/main.js            Small extras: form sending, nav highlight, footer year
assets/logo/          Transparent logo, wordmark, J monogram, favicons
assets/img/           Portrait, image tiles, social share card
```

## Section order

Hero (logo + intro) → three image tiles → A Visionary Approach → About Me (with portrait)
→ The Approach → Effortless Living → Residences → Contact (form + email/phone) → Footer

## Common edits

- **Text:** open `index.html` and edit the words between the tags. Each section is labelled with a comment like `<!-- ============ ABOUT ME ============ -->`.
- **Brand colors / fonts:** change the values at the top of `css/styles.css` (`--gold`, `--olive`, `--ivory`, etc.). Every section updates.
- **Swap an image:** replace the file in `assets/img/` and keep the same filename. Recommended sizes:
  - `azita-portrait.jpg`: portrait, about 1000 × 1250 px
  - `tile-coast-dunes.jpg`, `tile-arch-courtyard.jpg`, `tile-terrace-lounge.jpg`: landscape, at least 1800 × 1200 px

  The current tiles are cropped from the mockup and are low resolution. Replace them with real photos or renderings before launch.

## Turn on the inquiry form (about 5 minutes)

1. Go to https://formspree.io, sign up with Azita@azitaj.com, and create a new form.
2. Copy the form ID (it looks like `xayzabcd`).
3. In `index.html`, replace `YOUR_FORM_ID` in `action="https://formspree.io/f/YOUR_FORM_ID"` with that ID.

Until this is done, the form tells visitors to email or call instead.

## Publish

Pick any one of these:

- **Netlify (easiest):** drag this `site` folder onto https://app.netlify.com/drop, then add the domain azitaj.com under *Domain settings*.
- **GitHub Pages:** push this folder to a GitHub repo, then turn on Pages under *Settings → Pages* (branch `main`, root folder), then add azitaj.com as the custom domain.
- **Existing host:** upload the contents of this folder to the web root (usually `public_html`).

## Figma

To bring the page into Figma, use the free **html.to.design** plugin. Import from the live URL once it's published, or upload the `site` folder as a zip.
