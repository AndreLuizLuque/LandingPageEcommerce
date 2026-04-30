/**
 * Reveal-on-scroll — adiciona .in-view aos elementos quando entram no viewport.
 * Aplica a [data-section], .quote-content, .timeline-header, .timeline-item,
 * .section-card, .fullwidth-image — qualquer coisa que use a classe `in-view`.
 */
export function initInViewObserver() {
  const targets = document.querySelectorAll(
    '[data-section], .quote-content, .timeline-header, .timeline-item, .section-card, .fullwidth-image'
  );
  if (!targets.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  targets.forEach((el) => io.observe(el));
}
