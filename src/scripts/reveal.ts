/**
 * Gently fades in elements marked with data-reveal as they scroll into view.
 * The hidden starting state only applies when JavaScript runs and the guest has
 * not asked for reduced motion (see global.css), so content is never lost.
 */
const items = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (!('IntersectionObserver' in window)) {
  items.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  items.forEach((el) => observer.observe(el));
}
