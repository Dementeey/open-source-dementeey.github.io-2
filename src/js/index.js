// vars
const html = document.documentElement;
const aboutMeBtn = document.querySelector('.about-me');
const modal = document.querySelector('.modal');


// functions
const aboutMeToggle = () => {
  return modal;
};


// events
document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return html.classList.add('touch');
  }

  return html.classList.add('no-touch');
})

aboutMeBtn.addEventListener('click', aboutMeToggle);
