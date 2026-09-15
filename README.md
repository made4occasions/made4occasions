# Made for Occasions — website

A complete, mobile-first website for Made for Occasions (light-up number hire, Lancashire, Cheshire & Cumbria). Plain HTML/CSS/JS — no build step, no framework, works on any standard web host.

## Viewing it locally

Open `index.html` directly in a browser, or for the full experience (forms, accordions, config-driven content) serve the folder over HTTP rather than `file://`. If you have Node or Python installed:

```bash
npx serve .
```
```bash
python -m http.server 8080
```

A `serve.ps1` PowerShell script is also included (no dependencies) — run it and visit `http://localhost:8791`.

## Pages

`index.html` (home) · `light-up-numbers.html` · `light-up-letters.html` · `gallery.html` · `how-it-works.html` · `about.html` · `faqs.html` · `contact.html` (Check Availability / booking enquiry form) · `privacy-policy.html` · `terms-conditions.html` · `hire-agreement.html` · `cookie-policy.html`

## Before this goes live

**1. Edit `assets/js/config.js`.** This one file drives contact details, pricing, service areas, product specs, FAQs and the number inventory across every page. Everything marked `TBC` or `ADD FINAL...` is a placeholder:

- Real phone number and email
- Real Instagram / Facebook / TikTok links
- Single / two-number pricing
- Product height, power requirements and hire period
- Booking payment / deposit policy (referenced in FAQs, Terms and the Hire Agreement)

**2. Replace the photography — including the AI stand-in shots.** Two kinds of placeholder remain in the code:
   - Styled dark panels labelled "PLACEHOLDER PHOTO" (search the HTML for `ph-photo` / `PLACEHOLDER`) — just the Baby Showers slot in `gallery.html` and the map/reviews spots on the homepage at this point.
   - AI-generated marquee-number photos in `assets/img/photos/*.png`, used as realistic stand-ins so the site previews closer to its finished look. They cover the homepage hero, Introduction, the full-bleed Light-Up Numbers section, gallery previews, the Light-Up Numbers product page, About, all four How It Works steps, and 11 of `gallery.html`'s 12 slots (including Corporate and Behind the Scenes). A few were deliberately picked for colour variety beyond gold/cream — a blue disco scene, a purple-lit venue, a sage-green balloon arch, a navy corporate shot — rather than making every photo look identical. **None of these are real photos of your own numbers or venues** — swap every `<img src="assets/img/photos/...">` for your own photography once you've built and shot the real thing. One extra unused shot (`gallery-30-pool-blue.png`, an evening poolside scene) is sitting in that folder too if you want to place it somewhere yourself.

**3. Get the legal pages reviewed.** `privacy-policy.html`, `terms-conditions.html`, `hire-agreement.html` and `cookie-policy.html` contain clearly-flagged placeholder legal text and are **not** ready to publish as-is — have a solicitor check them, in particular the liability, cancellation and public liability insurance sections.

**4. Connect analytics (optional).** `config.js` has empty placeholders for Google Analytics, Meta Pixel and TikTok Pixel IDs — the site fires internal conversion events (`check_availability_clicked`, `enquiry_submitted`, `phone_clicked`, etc., see `assets/js/main.js`) that will forward automatically to `gtag`/`fbq`/`ttq` once those scripts are added.

**5. Wire up the enquiry form.** The "Check Your Date" form on `contact.html` currently shows a success message on submit but doesn't send anywhere — hook `assets/js/main.js` → `initForm()` up to a real form backend (email service, booking system API, etc.) when you're ready.

**6. Update `sitemap.xml` / `robots.txt`** if the final domain differs from `made4occasions.co.uk`.

## Logo files

Your supplied logo artwork, untouched, lives in `assets/img/logo/`:
- `made-for-occasions-logo.png` — full lockup with tagline, used on the footer brand block.
- `made-for-occasions-wordmark.png` — a cropped version (tagline removed) used in the header logo and as the large, low-opacity watermark at the very bottom of the footer.
- `mo-monogram.png` — used as the favicon source and as a subtle background watermark on the homepage hero and every "Got a date in mind?" CTA band.
