# Landlord Safety Certificate — React + Bootstrap 5

A full home page replica of [landlordsafetycertificate.co.uk](https://www.landlordsafetycertificate.co.uk/)
built with **React 18 + Vite + Bootstrap 5 + nested SCSS architecture**.

---

## Quick Start

```bash
# 1. Navigate into the project
cd react-bootstrap5-app

# 2. Install dependencies (includes sass for SCSS compilation)
npm install

# 3. Start the dev server → http://localhost:3000
npm run dev
```

---

## Scripts

| Command           | Description                        |
|-------------------|------------------------------------|
| `npm run dev`     | Dev server at http://localhost:3000 |
| `npm run build`   | Production build                   |
| `npm run preview` | Preview production build           |

---

## Tech Stack

| Tool                  | Version  | Purpose                        |
|-----------------------|----------|--------------------------------|
| React                 | 18.x     | UI library                     |
| Vite                  | 5.x      | Build tool & dev server        |
| Bootstrap             | 5.3      | CSS framework                  |
| Bootstrap Icons       | 1.11     | Icon library                   |
| React Router DOM      | 6.x      | Client-side routing            |
| Sass                  | 1.80+    | SCSS preprocessor              |

---

## Project Structure

```
src/
├── data/
│   ├── constants.js          # Phone, address, full nav structure
│   └── homeData.js           # All home page content (why, services, packages, reviews, FAQs)
│
├── components/
│   ├── layout/
│   │   ├── TopBar.jsx        # Green announcement bar
│   │   ├── Header.jsx        # Logo + phone box
│   │   ├── Navbar.jsx        # Sticky mega-menu nav (desktop + mobile)
│   │   └── Footer.jsx        # Footer with links, certs, social
│   │
│   ├── home/
│   │   ├── Hero.jsx          # Full-width hero banner
│   │   ├── WhyChoose.jsx     # Green features card + image
│   │   ├── Services.jsx      # 6-service grid
│   │   ├── Packages.jsx      # 4-package pricing cards
│   │   ├── Reviews.jsx       # Google review cards
│   │   ├── HomeFaqs.jsx      # FAQ accordion
│   │   └── About.jsx         # About us section
│   │
│   └── ui/                   # Reusable UI primitives
│       ├── SectionLabel.jsx  # Eyebrow label (e.g. "OUR SERVICES")
│       ├── FaqAccordion.jsx  # Accordion component (takes items prop)
│       ├── CtaBanner.jsx     # Dark overlay CTA banner
│       ├── WhatsAppFloat.jsx # Fixed WhatsApp button
│       └── ScrollToTopBtn.jsx
│
├── pages/
│   └── HomePage.jsx          # Composes all home sections
│
├── styles/
│   ├── _variables.scss       # Brand colours, spacing, BS overrides
│   ├── _mixins.scss          # Reusable mixins (flex-center, icon-box…)
│   ├── main.scss             # SCSS entry — @uses bootstrap + partials
│   ├── main.css              # Compiled CSS fallback (same styles)
│   └── components/
│       ├── _topbar.scss
│       ├── _header.scss
│       ├── _navbar.scss
│       ├── _hero.scss
│       ├── _buttons.scss
│       ├── _sections.scss    # why, services, packages, reviews, faq, about, cta
│       └── _footer.scss
│
├── App.jsx                   # Root routes + layout wrapper
└── main.jsx                  # Entry point
```

---

## Switching from CSS to SCSS

By default the project uses `src/styles/main.css`. Once you run `npm install`
(which installs `sass`), switch to SCSS in `src/main.jsx`:

```js
// Replace:
import './styles/main.css'

// With:
import './styles/main.scss'
```

---

## Customizing Brand Colours

Edit `src/styles/_variables.scss`:

```scss
$green:      #28a745;   // primary brand green
$green-dark: #1e7e34;   // hover state
$dark-nav:   #1c1c1c;   // navbar background
```

Or edit the CSS custom properties in `src/styles/main.css`:

```css
:root {
  --green: #28a745;
  --dark-nav: #1c1c1c;
}
```

---

## Home Page Sections

All 8 sections from the original site are included:

1. **Hero** — Full-width background image + two CTAs
2. **Why Choose** — 4 USP items on green card + engineer photo
3. **Our Services** — EICR, Gas, Fire, Asbestos, EIC, EPC cards
4. **Landlord Packages** — 4 bundle pricing cards with save badges
5. **Customer Reviews** — 5 Google review cards with rating summary
6. **FAQs** — 5 Q&As in Bootstrap accordion
7. **About** — Company description with image
8. **CTA Banner** — Dark overlay call-to-action strip
