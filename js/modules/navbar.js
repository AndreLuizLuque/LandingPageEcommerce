/**
 * Navbar — esconde ao rolar para baixo, mostra ao subir.
 * Hamburger — abre/fecha o menu mobile.
 */
export function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  // Auto-hide on scroll
  if (navbar) {
    let lastY = window.scrollY;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > lastY && y > 120) navbar.classList.add('nav-hidden');
      else navbar.classList.remove('nav-hidden');
      lastY = y;
    }, { passive: true });
  }

  // Hamburger toggle
  if (hamburger && mobileNav) {
    const toggle = () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    };

    hamburger.addEventListener('click', toggle);
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });

    mobileLinks.forEach((a) => a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }
}
