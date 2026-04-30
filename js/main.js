/**
 * Entry point — carrega todos os módulos do site.
 */
import { initPreloader }       from './modules/preloader.js';
import { initNavbar }          from './modules/navbar.js';
import { initCursor }          from './modules/cursor.js';
import { initHeroSlideshow }   from './modules/hero-slideshow.js';
import { initInViewObserver }  from './modules/in-view.js';
import { initSidebarNav }      from './modules/sidebar-nav.js';
import { initArcCarousel }     from './modules/arc-carousel.js';
import { initPriceSlideshow }  from './modules/price-slideshow.js';
import { initContactForm }     from './modules/contact-form.js';

const boot = () => {
  initPreloader();
  initNavbar();
  initCursor();
  initHeroSlideshow();
  initInViewObserver();
  initSidebarNav();
  initArcCarousel();
  initPriceSlideshow();
  initContactForm();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
