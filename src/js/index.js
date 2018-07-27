// vars
const html          = document.documentElement;
const aboutMeBtn    = document.querySelector('.about-me');
const aboutCloseBtn = document.querySelector('.modal__close-btn');
const modal         = document.querySelector('.modal');
const modalOverlay  = document.querySelector('.modal-overlay');
const goToTop       = document.querySelector('.goToTop-btn');
const headerTop     = document.querySelector('.page-header__top');



// functions
const aboutMeToggle = () => {
  if ( !modal.classList.contains('is-close') ) {
    modal.classList.add('is-close');
    modalOverlay.classList.add('is-close');
    document.body.style.overflow = '';
    return
  }

  document.body.style.overflow = 'hidden';
  modalOverlay.classList.remove('is-close');
  modal.classList.remove('is-close');
  return
};
const goToTopToggle = (scroll) => {
  if (scroll === 0) {
    goToTop.style.zIndex = -1;
    goToTop.style.opacity = 0;
    return
  } else if (scroll >= 345) {
    goToTop.style.zIndex = 1;
    goToTop.style.opacity = 1;
    return
  }

  goToTop.style.zIndex = -1;
  goToTop.style.opacity = 0;
  return
};
const headerTopToggle = (scroll) => {
  if (scroll > 620) {
    return headerTop.classList.add('page-header__top--scroll-fixed');
  }
  return headerTop.classList.remove('page-header__top--scroll-fixed');
};

// events
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return html.classList.add('touch');
  }

  html.classList.add('no-touch');
  return
});
aboutMeBtn.addEventListener('click', aboutMeToggle);
aboutCloseBtn.addEventListener('click', aboutMeToggle);
modalOverlay.addEventListener('click', aboutMeToggle);
document.addEventListener('keydown', (e) => {
  const keyCode = e.keyCode || e.which;
  if (keyCode === 27) {
    e.preventDefault();
    aboutMeToggle();
  }
});
goToTop.addEventListener('click', () => {
  html.scrollTop = 0;
});
document.addEventListener('scroll', () => {
  const scrollTop = html.scrollTop;

  goToTopToggle(scrollTop);
  headerTopToggle(scrollTop);
});
