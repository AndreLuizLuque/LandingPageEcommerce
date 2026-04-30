/**
 * Custom cursor (desktop apenas) — segue o ponteiro com easing.
 */
export function initCursor() {
  const cursor = document.querySelector('.cursor');
  const dot = document.querySelector('.cursor-dot');
  if (!cursor || !dot) return;
  if (window.matchMedia('(hover: none)').matches) return;

  let mx = 0, my = 0, cx = 0, cy = 0;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });

  const tick = () => {
    cx += (mx - cx) * 0.18;
    cy += (my - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  tick();

  // Hover state em links/botões
  document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.style.transform += ' scale(1.6)');
    el.addEventListener('mouseleave', () => { /* reset feito no tick */ });
  });
}
