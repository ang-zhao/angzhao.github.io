// nav-open.js
window.addEventListener('DOMContentLoaded', () => {
  // limit to the homepage; tweak the test if your home lives elsewhere
  if (location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')) {
    const nav     = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');
    if (nav && toggler) {
      nav.classList.add('show');          // make the menu visible
      toggler.setAttribute('aria-expanded', 'true'); // keep screen-readers in sync
    }
  }
});