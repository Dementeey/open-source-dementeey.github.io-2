// vars
const html = document.documentElement;
const aboutMeBtn = document.querySelector('.about-me');
const aboutCloseBtn = document.querySelector('.modal__close-btn');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');


// functions
const aboutMeToggle = () => {
  if ( !modal.classList.contains('is-close') ) {
    modal.classList.add('is-close');
    modalOverlay.classList.add('is-close');
    return
  }

  modalOverlay.classList.remove('is-close');
  modal.classList.remove('is-close');
  return
};


// events
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return html.classList.add('touch');
  }

  html.classList.add('no-touch');
  return
})
aboutMeBtn.addEventListener('click', aboutMeToggle);
aboutCloseBtn.addEventListener('click', aboutMeToggle);
modalOverlay.addEventListener('click', aboutMeToggle);
document.addEventListener('keydown', (e) => {
  const keyCode = e.keyCode || e.which;
  if (keyCode === 27) {
    e.preventDefault();
    aboutMeToggle();
  }
})
