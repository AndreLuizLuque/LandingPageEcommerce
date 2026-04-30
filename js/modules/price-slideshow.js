/**
 * Price Slideshow — alterna as imagens da jaqueta a cada 5s com fade.
 */
export function initPriceSlideshow() {
  const slides = document.querySelectorAll('.price-jacket-slide');
  if (slides.length < 2) return;

  let current = 0;
  const INTERVAL = 5000;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, INTERVAL);
}
