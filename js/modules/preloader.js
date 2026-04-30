/**
 * Preloader — esconde após o load completo.
 */
export function initPreloader() {
  const preloader = document.querySelector('.preloader');
  if (!preloader) return;

  window.addEventListener('load', () => {
    setTimeout(() => preloader.classList.add('hidden'), 600);
  });
}
