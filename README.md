# Adidas China New Year Jacket — site estático

Site one-page reorganizado em estrutura modular (HTML / CSS / JS puro,
sem build step).

## 📁 Estrutura

```
adidas-cny/
├── index.html
├── README.md
├── assets/                     ← imagens (Back1.png, ChinaxAdidas.png, ...)
├── css/
│   ├── base.css                ← reset + tokens (cores, fontes, transições)
│   ├── layout.css              ← containers globais
│   ├── components/             ← peças reutilizáveis
│   │   ├── preloader.css
│   │   ├── navbar.css          ← navbar + mobile nav + hamburger
│   │   ├── cursor.css
│   │   ├── sidebar-nav.css
│   │   └── buttons.css
│   ├── sections/               ← uma folha por bloco da página
│   │   ├── hero.css
│   │   ├── quote.css
│   │   ├── timeline.css        ← timeline + section-cards
│   │   ├── arcs.css            ← carousel de arcs + nav
│   │   ├── fullwidth-image.css
│   │   ├── price.css
│   │   ├── contact.css
│   │   └── footer.css
│   └── utilities/
│       ├── animations.css      ← keyframes globais
│       └── responsive.css      ← media queries (carregado por último)
└── js/
    ├── main.js                 ← entry point (importa todos os módulos)
    └── modules/
        ├── preloader.js
        ├── navbar.js
        ├── cursor.js
        ├── hero-slideshow.js
        ├── in-view.js          ← IntersectionObserver para reveal animations
        ├── sidebar-nav.js
        ├── arc-carousel.js
        └── contact-form.js
```

## 🎨 Tokens de design (`css/base.css`)

| Token              | Valor       | Uso                          |
|--------------------|-------------|------------------------------|
| `--color-bg`       | `#0a0a0a`   | Fundo principal              |
| `--color-fg`       | `#ffffff`   | Texto principal              |
| `--color-accent`   | `#91bb4d`   | Detalhes / hovers / linhas   |
| `--color-muted`    | `#74b438`   | Secundário / textos suaves   |
| `--color-highlight`| `#c9b99a`   | Dourado / destaque           |
| `--font-display`   | Bebas Neue  | Títulos                      |
| `--font-body`      | Inter       | Corpo                        |
| `--font-jp`        | Noto Serif JP | Caracteres japoneses/chineses |
