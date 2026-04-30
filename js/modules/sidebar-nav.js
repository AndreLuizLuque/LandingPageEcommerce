/**
 * Sidebar dot navigation — aparece após hero,
 * marca a seção visível e faz scroll suave ao clicar.
 */
export function initSidebarNav() {
  const sidebar = document.querySelector('.sidebar-nav');
  const dots = document.querySelectorAll('.sidebar-dot');
  if (!sidebar || !dots.length) return;

  // Mostrar após sair do hero
  const hero = document.querySelector('.hero');
  if (hero) {
    const heroIO = new IntersectionObserver(([entry]) => {
      sidebar.classList.toggle('visible', !entry.isIntersecting);
    }, { threshold: 0.4 });
    heroIO.observe(hero);
  } else {
    sidebar.classList.add('visible');
  }

  // Click → scroll
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const target = document.querySelector(dot.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Active state
  const sections = [...dots].map((d) => document.querySelector(d.dataset.target)).filter(Boolean);
  const sectionIO = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = '#' + entry.target.id;
        dots.forEach((d) => d.classList.toggle('active', d.dataset.target === id));
      }
    });
  }, { threshold: 0.5 });
  sections.forEach((s) => sectionIO.observe(s));
}
