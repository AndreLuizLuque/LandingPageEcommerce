/**
 * Contact form — submit via fetch para o Formspree, com feedback inline.
 * Substitua a action do form pelo seu endpoint Formspree.
 */
export function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    // If the action is still the placeholder, fall back to the default submit
    if (form.action.includes('https://formspree.io/f/xnjldgzn')) return;

    e.preventDefault();
    const btn = form.querySelector('.form-submit-btn');
    const original = btn?.innerHTML;
    if (btn) { btn.disabled = true; btn.textContent = 'SENDING...'; }

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        if (btn) btn.textContent = 'MESSAGE SENT ✓';
      } else {
        throw new Error('Send failed');
      }
    } catch {
      if (btn) btn.textContent = 'ERROR — TRY AGAIN';
    } finally {
      setTimeout(() => {
        if (btn && original) { btn.disabled = false; btn.innerHTML = original; }
      }, 3000);
    }
  });
}
