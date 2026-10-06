const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const header = document.querySelector('[data-header]');
const revealItems = document.querySelectorAll('.reveal');
const year = document.querySelector('[data-year]');

if (year) year.textContent = new Date().getFullYear();

if (!reduceMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });
  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
    observer.observe(item);
  });

  let frame = 0;
  window.addEventListener('pointermove', (event) => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      document.querySelectorAll('[data-depth]').forEach((item) => {
        const depth = Number(item.dataset.depth || 0);
        const x = (event.clientX / window.innerWidth - 0.5) * 22 * depth;
        const y = (event.clientY / window.innerHeight - 0.5) * 22 * depth;
        item.style.translate = `${x}px ${y}px`;
      });
      frame = 0;
    });
  }, { passive: true });
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

if (header) {
  const sentinel = document.createElement('span');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText = 'position:absolute;inset:60px auto auto 0;width:1px;height:1px;pointer-events:none';
  document.body.prepend(sentinel);
  const headerObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle('is-fixed', !entry.isIntersecting);
  });
  headerObserver.observe(sentinel);
}
