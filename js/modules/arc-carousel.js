/**
 * Arc carousel — controla os 4 arcs com setas, indicadores e teclado.
 */
export function initArcCarousel() {
  const arcs = document.querySelectorAll('.arc');
  const indicators = document.querySelectorAll('.arc-indicator');
  const prevBtn = document.getElementById('arc-arrow-left');
  const nextBtn = document.getElementById('arc-arrow-right');
  if (!arcs.length) return;

  let current = 0;

  const update = (next) => {
    if (next < 0 || next >= arcs.length || next === current) return;
    arcs[current].classList.remove('active');
    indicators[current]?.classList.remove('active');
    current = next;
    arcs[current].classList.add('active');
    indicators[current]?.classList.add('active');
    if (prevBtn) prevBtn.disabled = current === 0;
    if (nextBtn) nextBtn.disabled = current === arcs.length - 1;
  };

  prevBtn?.addEventListener('click', () => update(current - 1));
  nextBtn?.addEventListener('click', () => update(current + 1));
  indicators.forEach((ind, i) => ind.addEventListener('click', () => update(i)));

  // Teclado (somente quando o main-container está visível)
  const main = document.querySelector('.main-container');
  if (main) {
    let active = false;
    new IntersectionObserver(([e]) => active = e.isIntersecting, { threshold: 0.3 }).observe(main);
    window.addEventListener('keydown', (e) => {
      if (!active) return;
      if (e.key === 'ArrowLeft') update(current - 1);
      if (e.key === 'ArrowRight') update(current + 1);
    });
  }

  // Estado inicial dos botões
  if (prevBtn) prevBtn.disabled = true;
}
