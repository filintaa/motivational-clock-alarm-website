# Motivational Clock Alarm — Website

Public landing page and App Store support pages for the Motivational Clock Alarm iPhone app.

## Live pages

- Landing page: https://filintaa.github.io/motivational-clock-alarm-website/
- Privacy policy: https://filintaa.github.io/motivational-clock-alarm-website/privacy.html
- Support: https://filintaa.github.io/motivational-clock-alarm-website/support.html
- Terms: https://filintaa.github.io/motivational-clock-alarm-website/terms.html

The earlier Sites address remains available at https://motivational-clock-alarm.svgbundle1001.chatgpt.site/.

## Local preview

The website is static and has no build step:

```bash
python3 -m http.server 4173 --directory dist
```

Then open `http://127.0.0.1:4173/`.

## Structure

- `dist/index.html` — landing page
- `dist/privacy.html` — privacy policy
- `dist/support.html` — support and troubleshooting
- `dist/terms.html` — terms of use
- `dist/assets/` — app screenshots, logo, font, and optimized sample videos

Personal videos selected by users remain local to their device; the sample clips in this repository are the optimized promotional versions used by the website.
