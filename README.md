Adidas China New Year Jacket — static site

One-page site reorganized into a modular structure (HTML, CSS, and pure JavaScript, no build step).

📁 Structure

LandingPageEcommerce/
├── index.html
├── README.md
├── assets/                     ← images (Back1.png, ChinaxAdidas.png, ...)
├── css/
│   ├── base.css                ← reset + tokens (colors, fonts, transitions)
│   ├── layout.css              ← global containers
│   ├── components/             ← reusable parts
│   │   ├── preloader.css
│   │   ├── navbar.css          ← navbar + mobile nav + hamburger
│   │   ├── cursor.css
│   │   ├── sidebar-nav.css
│   │   └── buttons.css
│   ├── sections/               ← one file per page section
│   │   ├── hero.css
│   │   ├── quote.css
│   │   ├── timeline.css        ← timeline + section cards
│   │   ├── arcs.css            ← arcs carousel + navigation
│   │   ├── fullwidth-image.css
│   │   ├── price.css
│   │   ├── contact.css
│   │   └── footer.css
│   └── utilities/
│       ├── animations.css      ← global keyframes
│       └── responsive.css      ← media queries, loaded last
└── js/
    ├── main.js                 ← entry point, imports all modules
    └── modules/
        ├── preloader.js
        ├── navbar.js
        ├── cursor.js
        ├── hero-slideshow.js
        ├── in-view.js          ← IntersectionObserver for reveal animations
        ├── sidebar-nav.js
        ├── arc-carousel.js
        └── contact-form.js

| Token               | Value         | Usage                           |
| ------------------- | ------------- | ------------------------------- |
| `--color-bg`        | `#0a0a0a`     | Main background                 |
| `--color-fg`        | `#ffffff`     | Main text                       |
| `--color-accent`    | `#91bb4d`     | Details, hover, lines           |
| `--color-muted`     | `#74b438`     | Secondary, subtle text          |
| `--color-highlight` | `#c9b99a`     | Gold, highlights                |
| `--font-display`    | Bebas Neue    | Headings                        |
| `--font-body`       | Inter         | Body text                       |
| `--font-jp`         | Noto Serif JP | Japanese and Chinese characters |
