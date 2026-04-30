/**
 * Hero slideshow — alterna o background a cada 5s.
 */
export function initHeroSlideshow({ interval = 5000 } = {}) {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length < 2) return;

  let index = 0;
  setInterval(() => {
    slides[index].classList.remove('active');
    slides[index].classList.add('prev');
    index = (index + 1) % slides.length;
    slides[index].classList.remove('prev');
    slides[index].classList.add('active');
  }, interval);
}
