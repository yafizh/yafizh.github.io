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

const previewLightboxState = {
  activeImages: [],
  currentImage: 0,
  lastFocusedElement: null,
};

const featureProjects = {
  'office-asset': {
    title: 'Office Asset & Inventory Management System (BPTP KALSEL)',
    description: 'End-to-end internal asset tracking for BPTP KALSEL, covering asset data, condition reports, maintenance, borrowing, returns, and employee self-service flows.',
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
    features: [
      {
        label: 'Admin',
        items: [
          'Employee and user account management',
          'Asset type, category, inventory, and detail management',
          'Asset additions, damaged assets, lost assets, and maintenance tracking',
          'Borrowing and return request verification',
          'Operational reports for assets, additions, damaged/lost assets, borrowing, returns, maintenance, conditions, and employees',
        ],
      },
      {
        label: 'Employee',
        items: [
          'Browse asset types, categories, and available assets',
          'Submit asset borrowing requests',
          'Track borrowing history and request details',
          'Submit return requests and review return history',
        ],
      },
    ],
    images: [
      ['assets/office-asset-features/admin-01-dashboard.png', 'Admin dashboard'],
      ['assets/office-asset-features/admin-02-employees.png', 'Employee management'],
      ['assets/office-asset-features/admin-03-users.png', 'User management'],
      ['assets/office-asset-features/admin-04-asset-types.png', 'Asset type list'],
      ['assets/office-asset-features/admin-05-asset-categories.png', 'Asset category list'],
      ['assets/office-asset-features/admin-06-assets-list.png', 'Asset inventory list'],
      ['assets/office-asset-features/admin-07-asset-detail.png', 'Asset detail'],
      ['assets/office-asset-features/admin-08-asset-additions.png', 'Asset additions'],
      ['assets/office-asset-features/admin-09-damaged-assets.png', 'Damaged assets'],
      ['assets/office-asset-features/admin-10-lost-assets.png', 'Lost assets'],
      ['assets/office-asset-features/admin-11-maintenance-summary.png', 'Maintenance summary'],
      ['assets/office-asset-features/admin-12-maintenance-active.png', 'Active maintenance assets'],
      ['assets/office-asset-features/admin-13-maintenance-finished.png', 'Finished maintenance assets'],
      ['assets/office-asset-features/admin-14-borrow-requests.png', 'Borrowing requests'],
      ['assets/office-asset-features/admin-15-borrow-request-detail.png', 'Borrowing request detail'],
      ['assets/office-asset-features/admin-16-return-requests.png', 'Return requests'],
      ['assets/office-asset-features/admin-17-return-request-detail.png', 'Return request detail'],
      ['assets/office-asset-features/admin-18-report-assets.png', 'Asset report'],
      ['assets/office-asset-features/admin-19-report-asset-additions.png', 'Asset additions report'],
      ['assets/office-asset-features/admin-20-report-damaged-assets.png', 'Damaged assets report'],
      ['assets/office-asset-features/admin-21-report-lost-assets.png', 'Lost assets report'],
      ['assets/office-asset-features/admin-22-report-maintenance.png', 'Maintenance report'],
      ['assets/office-asset-features/admin-23-report-borrowing.png', 'Borrowing report'],
      ['assets/office-asset-features/admin-24-report-returns.png', 'Returns report'],
      ['assets/office-asset-features/admin-25-report-borrowing-chart.png', 'Borrowing chart report'],
      ['assets/office-asset-features/admin-27-report-asset-condition.png', 'Asset condition report'],
      ['assets/office-asset-features/admin-28-report-employees.png', 'Employee report'],
      ['assets/office-asset-features/employee-01-asset-types.png', 'Employee asset type browser'],
      ['assets/office-asset-features/employee-02-asset-categories.png', 'Employee asset category browser'],
      ['assets/office-asset-features/employee-03-available-assets.png', 'Available assets'],
      ['assets/office-asset-features/employee-04-borrow-request-form.png', 'Borrowing request form'],
      ['assets/office-asset-features/employee-05-borrow-history.png', 'Borrowing history'],
      ['assets/office-asset-features/employee-06-borrow-detail.png', 'Borrowing detail'],
      ['assets/office-asset-features/employee-07-return-request-form.png', 'Return request form'],
      ['assets/office-asset-features/employee-08-return-history.png', 'Return history'],
      ['assets/office-asset-features/employee-09-return-detail.png', 'Return detail'],
    ],
  },
  'school-management': {
    title: 'Digital School Management & Grading System',
    description: 'Multi-role school operations system covering classroom activity, digital books, assignments, attendance, grading, reporting, and student progress workflows.',
    availability: 'Live demo is not publicly hosted yet. Feature screenshots are available below.',
    features: [
      {
        label: 'Admin',
        items: [
          'Dashboard, admin users, class, semester, subject, teacher, and student management',
          'Digital book library and book detail pages',
          'Active class student and subject management',
          'Grade input and academic report screens',
          'Student, teacher attendance, active class, and gender chart reports',
        ],
      },
      {
        label: 'Teacher',
        items: [
          'Classroom dashboard and subject tools',
          'Attendance detail and attendance input',
          'Task grading and report-card grade input',
          'Homeroom ranking and digital book access',
        ],
      },
      {
        label: 'Student',
        items: [
          'Classroom dashboard',
          'Attendance record',
          'Forum discussion',
          'Assignments and digital books',
        ],
      },
    ],
    images: [
      ['assets/school-management-features/admin-01-dashboard.png', 'Admin dashboard'],
      ['assets/school-management-features/admin-02-admin-users.png', 'Admin users'],
      ['assets/school-management-features/admin-03-classes.png', 'Class management'],
      ['assets/school-management-features/admin-04-semesters.png', 'Semester management'],
      ['assets/school-management-features/admin-05-subjects.png', 'Subject management'],
      ['assets/school-management-features/admin-06-digital-books.png', 'Digital books'],
      ['assets/school-management-features/admin-07-digital-book-detail.png', 'Digital book detail'],
      ['assets/school-management-features/admin-08-teachers.png', 'Teacher management'],
      ['assets/school-management-features/admin-09-students.png', 'Student management'],
      ['assets/school-management-features/admin-10-active-class-list.png', 'Active class list'],
      ['assets/school-management-features/admin-11-active-class-students.png', 'Active class students'],
      ['assets/school-management-features/admin-12-active-class-subjects.png', 'Active class subjects'],
      ['assets/school-management-features/admin-13-grade-input.png', 'Grade input'],
      ['assets/school-management-features/admin-14-teacher-report.png', 'Teacher report'],
      ['assets/school-management-features/admin-15-student-report.png', 'Student report'],
      ['assets/school-management-features/admin-16-active-class-report.png', 'Active class report'],
      ['assets/school-management-features/admin-17-gender-chart-report.png', 'Gender chart report'],
      ['assets/school-management-features/admin-18-teacher-attendance-report.png', 'Teacher attendance report'],
      ['assets/school-management-features/teacher-01-classroom-dashboard.png', 'Teacher classroom dashboard'],
      ['assets/school-management-features/teacher-02-subject-tools.png', 'Teacher subject tools'],
      ['assets/school-management-features/teacher-03-attendance-detail.png', 'Attendance detail'],
      ['assets/school-management-features/teacher-04-task-grading.png', 'Task grading'],
      ['assets/school-management-features/teacher-05-homeroom-ranking.png', 'Homeroom ranking'],
      ['assets/school-management-features/teacher-06-grade-input.png', 'Teacher grade input'],
      ['assets/school-management-features/teacher-07-attendance.png', 'Teacher attendance'],
      ['assets/school-management-features/teacher-08-digital-books.png', 'Teacher digital books'],
      ['assets/school-management-features/student-01-classroom-dashboard.png', 'Student classroom dashboard'],
      ['assets/school-management-features/student-02-attendance.png', 'Student attendance'],
      ['assets/school-management-features/student-03-forum-discussion.png', 'Student forum discussion'],
      ['assets/school-management-features/student-04-assignments.png', 'Student assignments'],
      ['assets/school-management-features/student-05-digital-books.png', 'Student digital books'],
    ],
  },
};

const featureModalState = {
  project: null,
  selectedImage: 0,
  lastFocusedElement: null,
  shouldRestoreFocus: false,
};

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

        if (slide.dataset.lightboxReady === 'true') {
          slide.tabIndex = isActive ? 0 : -1;
        }
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

function initPreviewLightbox() {
  const galleries = document.querySelectorAll('.project-card__preview-gallery');
  if (!galleries.length) {
    return;
  }

  let lightbox = document.querySelector('.preview-lightbox');

  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'preview-lightbox';
    lightbox.hidden = true;
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Project preview image');
    lightbox.innerHTML = `
      <button class="preview-lightbox__close" type="button" aria-label="Close preview">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      <button class="preview-lightbox__nav preview-lightbox__nav--previous" type="button"
        aria-label="Previous preview">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <figure class="preview-lightbox__figure">
        <img class="preview-lightbox__image" alt="" />
        <figcaption class="preview-lightbox__caption"></figcaption>
      </figure>
      <button class="preview-lightbox__nav preview-lightbox__nav--next" type="button"
        aria-label="Next preview">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      <span class="preview-lightbox__counter" aria-live="polite"></span>
    `;
    document.body.append(lightbox);
  }

  const image = lightbox.querySelector('.preview-lightbox__image');
  const caption = lightbox.querySelector('.preview-lightbox__caption');
  const counter = lightbox.querySelector('.preview-lightbox__counter');
  const closeButton = lightbox.querySelector('.preview-lightbox__close');
  const previousButton = lightbox.querySelector('.preview-lightbox__nav--previous');
  const nextButton = lightbox.querySelector('.preview-lightbox__nav--next');

  const setLightboxImage = (index) => {
    previewLightboxState.currentImage = (index + previewLightboxState.activeImages.length)
      % previewLightboxState.activeImages.length;
    const selectedImage = previewLightboxState.activeImages[previewLightboxState.currentImage];
    const altText = selectedImage.getAttribute('alt') || 'Project preview image';
    const hasMultipleImages = previewLightboxState.activeImages.length > 1;

    image.src = selectedImage.currentSrc || selectedImage.src;
    image.alt = altText;
    caption.textContent = altText;
    counter.textContent = `${previewLightboxState.currentImage + 1} / ${previewLightboxState.activeImages.length}`;
    previousButton.hidden = !hasMultipleImages;
    nextButton.hidden = !hasMultipleImages;
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.hidden = true;
    document.body.classList.remove('is-lightbox-open');

    if (previewLightboxState.lastFocusedElement) {
      previewLightboxState.lastFocusedElement.focus();
    }
  };

  const openLightbox = (images, index) => {
    previewLightboxState.activeImages = images;
    previewLightboxState.lastFocusedElement = document.activeElement;
    setLightboxImage(index);
    lightbox.hidden = false;
    document.body.classList.add('is-lightbox-open');
    requestAnimationFrame(() => {
      lightbox.classList.add('is-open');
      closeButton.focus();
    });
  };

  window.openPreviewLightbox = openLightbox;

  if (lightbox.dataset.handlersReady !== 'true') {
    previousButton.addEventListener('click', () => {
      setLightboxImage(previewLightboxState.currentImage - 1);
    });
    nextButton.addEventListener('click', () => {
      setLightboxImage(previewLightboxState.currentImage + 1);
    });
    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    window.addEventListener('keydown', (event) => {
      if (lightbox.hidden) {
        return;
      }

      if (event.key === 'Escape') {
        closeLightbox();
      }

      if (event.key === 'ArrowLeft' && previewLightboxState.activeImages.length > 1) {
        setLightboxImage(previewLightboxState.currentImage - 1);
      }

      if (event.key === 'ArrowRight' && previewLightboxState.activeImages.length > 1) {
        setLightboxImage(previewLightboxState.currentImage + 1);
      }
    });

    lightbox.dataset.handlersReady = 'true';
  }

  galleries.forEach((gallery) => {
    if (gallery.closest('[data-feature-project]')) {
      return;
    }

    const galleryImages = Array.from(gallery.querySelectorAll('img'));

    galleryImages.forEach((galleryImage) => {
      if (galleryImage.dataset.lightboxReady === 'true') {
        return;
      }

      const altText = galleryImage.getAttribute('alt') || 'project preview image';
      const isInactiveSlideshowImage = gallery.classList.contains('is-slideshow')
        && !galleryImage.classList.contains('is-active');

      galleryImage.dataset.lightboxReady = 'true';
      galleryImage.tabIndex = isInactiveSlideshowImage ? -1 : 0;
      galleryImage.setAttribute('role', 'button');
      galleryImage.setAttribute('aria-label', `Open ${altText} full view`);

      const openCurrentImage = () => {
        const currentImages = Array.from(gallery.querySelectorAll('img'));
        const selectedIndex = currentImages.indexOf(galleryImage);
        openLightbox(currentImages, selectedIndex >= 0 ? selectedIndex : 0);
      };

      galleryImage.addEventListener('click', openCurrentImage);
      galleryImage.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openCurrentImage();
        }
      });
    });
  });
}

function initFeatureModal() {
  const projectCards = document.querySelectorAll('[data-feature-project]');
  if (!projectCards.length) {
    return;
  }

  let modal = document.querySelector('.feature-modal');

  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'feature-modal';
    modal.hidden = true;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'feature-modal-title');
    modal.innerHTML = `
      <div class="feature-modal__panel">
        <button class="feature-modal__close" type="button" aria-label="Close feature view">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
        <div class="feature-modal__body">
          <section class="feature-modal__summary" aria-label="Project feature summary">
            <p class="feature-modal__eyebrow">Screenshot preview</p>
            <h2 id="feature-modal-title"></h2>
            <p class="feature-modal__description"></p>
            <p class="feature-modal__availability"></p>
            <div class="feature-modal__features"></div>
          </section>
          <section class="feature-modal__gallery" aria-label="Project screenshots">
            <figure class="feature-modal__active-preview">
              <div class="feature-modal__image-shell">
                <button class="feature-modal__step feature-modal__step--previous" type="button"
                  aria-label="Previous feature screenshot">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button class="feature-modal__image-button" type="button" aria-label="Open selected screenshot full view">
                  <img class="feature-modal__active-image" alt="" />
                </button>
                <button class="feature-modal__step feature-modal__step--next" type="button"
                  aria-label="Next feature screenshot">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
              <figcaption class="feature-modal__caption"></figcaption>
            </figure>
            <div class="feature-modal__thumbs" aria-label="Screenshot thumbnails"></div>
          </section>
        </div>
      </div>
    `;
    document.body.append(modal);
  }

  const panel = modal.querySelector('.feature-modal__panel');
  const title = modal.querySelector('#feature-modal-title');
  const description = modal.querySelector('.feature-modal__description');
  const availability = modal.querySelector('.feature-modal__availability');
  const featureList = modal.querySelector('.feature-modal__features');
  const activeImage = modal.querySelector('.feature-modal__active-image');
  const imageButton = modal.querySelector('.feature-modal__image-button');
  const previousButton = modal.querySelector('.feature-modal__step--previous');
  const nextButton = modal.querySelector('.feature-modal__step--next');
  const caption = modal.querySelector('.feature-modal__caption');
  const thumbs = modal.querySelector('.feature-modal__thumbs');
  const closeButton = modal.querySelector('.feature-modal__close');

  const getModalImages = () => Array.from(thumbs.querySelectorAll('img'));

  const setFeatureImage = (index) => {
    const project = featureModalState.project;
    if (!project) {
      return;
    }

    featureModalState.selectedImage = (index + project.images.length) % project.images.length;
    const [src, alt] = project.images[featureModalState.selectedImage];
    activeImage.src = src;
    activeImage.alt = alt;
    caption.textContent = `${featureModalState.selectedImage + 1} / ${project.images.length} · ${alt}`;

    thumbs.querySelectorAll('button').forEach((button, buttonIndex) => {
      const isSelected = buttonIndex === featureModalState.selectedImage;
      button.classList.toggle('is-selected', isSelected);
      button.setAttribute('aria-current', String(isSelected));
    });
  };

  const closeFeatureModal = () => {
    modal.classList.remove('is-open');
    modal.hidden = true;
    document.body.classList.remove('is-feature-modal-open');

    if (featureModalState.shouldRestoreFocus && featureModalState.lastFocusedElement) {
      featureModalState.lastFocusedElement.focus();
    } else if (featureModalState.lastFocusedElement) {
      featureModalState.lastFocusedElement.blur();
    }
  };

  const openFeatureModal = (projectKey, shouldRestoreFocus = false) => {
    const project = featureProjects[projectKey];
    if (!project) {
      return;
    }

    featureModalState.project = project;
    featureModalState.lastFocusedElement = document.activeElement;
    featureModalState.shouldRestoreFocus = shouldRestoreFocus;
    title.textContent = project.title;
    description.textContent = project.description;
    availability.textContent = project.availability;
    featureList.replaceChildren();
    thumbs.replaceChildren();

    project.features.forEach((group) => {
      const groupEl = document.createElement('div');
      const groupTitle = document.createElement('h3');
      const list = document.createElement('ul');

      groupTitle.textContent = group.label;
      group.items.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.append(listItem);
      });

      groupEl.className = 'feature-modal__feature-group';
      groupEl.append(groupTitle, list);
      featureList.append(groupEl);
    });

    project.images.forEach(([src, alt], imageIndex) => {
      const button = document.createElement('button');
      const image = document.createElement('img');

      button.className = 'feature-modal__thumb';
      button.type = 'button';
      button.setAttribute('aria-label', `Show ${alt}`);
      image.src = src;
      image.alt = alt;
      image.loading = 'lazy';

      button.append(image);
      button.addEventListener('click', () => setFeatureImage(imageIndex));
      thumbs.append(button);
    });

    setFeatureImage(0);
    modal.hidden = false;
    document.body.classList.add('is-feature-modal-open');
    requestAnimationFrame(() => {
      modal.classList.add('is-open');
      closeButton.focus();
    });
  };

  if (modal.dataset.handlersReady !== 'true') {
    closeButton.addEventListener('click', closeFeatureModal);
    modal.addEventListener('click', (event) => {
      if (!panel.contains(event.target)) {
        closeFeatureModal();
      }
    });
    imageButton.addEventListener('click', () => {
      if (window.openPreviewLightbox) {
        window.openPreviewLightbox(getModalImages(), featureModalState.selectedImage);
      }
    });
    previousButton.addEventListener('click', () => {
      setFeatureImage(featureModalState.selectedImage - 1);
    });
    nextButton.addEventListener('click', () => {
      setFeatureImage(featureModalState.selectedImage + 1);
    });

    window.addEventListener('keydown', (event) => {
      if (modal.hidden) {
        return;
      }

      if (document.body.classList.contains('is-lightbox-open')) {
        return;
      }

      if (event.key === 'Escape') {
        closeFeatureModal();
      }

      if (event.key === 'ArrowLeft') {
        setFeatureImage(featureModalState.selectedImage - 1);
      }

      if (event.key === 'ArrowRight') {
        setFeatureImage(featureModalState.selectedImage + 1);
      }
    }, true);

    modal.dataset.handlersReady = 'true';
  }

  projectCards.forEach((card) => {
    if (card.dataset.featureHandlersReady === 'true') {
      return;
    }

    const openFromCard = (event) => {
      const interactiveTarget = event.target.closest('button, a, .preview-gallery__controls');
      if (interactiveTarget) {
        return;
      }

      openFeatureModal(card.dataset.featureProject, false);
    };

    card.addEventListener('click', openFromCard);
    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      event.preventDefault();
      openFeatureModal(card.dataset.featureProject, true);
    });
    card.dataset.featureHandlersReady = 'true';
  });
}

initPreviewGalleries();
initPreviewLightbox();
initFeatureModal();
window.initPreviewGalleries = initPreviewGalleries;
window.initPreviewLightbox = initPreviewLightbox;
window.initFeatureModal = initFeatureModal;
