// vars
const html          = document.documentElement;
const aboutMeBtn    = document.querySelector('.about-me');
const aboutCloseBtn = document.querySelector('.modal__close-btn');
const modal         = document.querySelector('.modal');
const modalOverlay  = document.querySelector('.modal-overlay');
const goToTop       = document.querySelector('.goToTop-btn');
const headerTop     = document.querySelector('.page-header__top');



// functions
let timers;
const scrolledTop = () => {
  const top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);

  if (top > 0) {
    window.scrollTo( 0, Math.floor(top /1.7) );
    timers = setTimeout("scrolledTop()", 30);
  } else {
    clearTimeout(timers);
  }

  return false;
}
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
  var innerHeight = html.clientHeight;
  if (scroll === 0) {
    goToTop.style.zIndex = -1;
    goToTop.style.opacity = 0;
    return
  } else if (scroll >= innerHeight) {
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
goToTop.addEventListener('click', scrolledTop);
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

document.addEventListener('DOMContentLoaded',headerTopToggle);
document.addEventListener('scroll', () => {
  const scroll = window.pageYOffset;

  goToTopToggle(scroll);
  headerTopToggle(scroll);

});
