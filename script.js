const sections = document.querySelectorAll('[data-animate]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
    }
  );

  sections.forEach((section) => observer.observe(section));
} else {
  sections.forEach((section) => section.classList.add('is-visible'));
}

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function initPreviewGalleries() {
  const galleries = document.querySelectorAll('.project-card__preview-gallery');

  galleries.forEach((gallery) => {
    const slides = Array.from(gallery.querySelectorAll('img'));
    if (slides.length <= 4 || gallery.classList.contains('is-slideshow')) {
      return;
    }

    let currentSlide = 0;
    const controls = document.createElement('div');
    const counter = document.createElement('span');
    const previousButton = document.createElement('button');
    const nextButton = document.createElement('button');

    gallery.classList.add('is-slideshow');
    gallery.setAttribute('role', 'group');
    gallery.setAttribute('aria-roledescription', 'carousel');
    controls.className = 'preview-gallery__controls';
    counter.className = 'preview-gallery__counter';
    counter.setAttribute('aria-live', 'polite');

    previousButton.className = 'preview-gallery__control';
    previousButton.type = 'button';
    previousButton.setAttribute('aria-label', 'Previous preview');
    previousButton.innerHTML = `
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    `;

    nextButton.className = 'preview-gallery__control';
    nextButton.type = 'button';
    nextButton.setAttribute('aria-label', 'Next preview');
    nextButton.innerHTML = `
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    `;

    const setSlide = (index) => {
      currentSlide = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === currentSlide;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
      });

      counter.textContent = `${currentSlide + 1} / ${slides.length}`;
    };

    previousButton.addEventListener('click', () => setSlide(currentSlide - 1));
    nextButton.addEventListener('click', () => setSlide(currentSlide + 1));

    gallery.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        previousButton.click();
      }

      if (event.key === 'ArrowRight') {
        nextButton.click();
      }
    });

    controls.append(previousButton, counter, nextButton);
    gallery.append(controls);
    setSlide(0);
  });
}

initPreviewGalleries();
window.initPreviewGalleries = initPreviewGalleries;
