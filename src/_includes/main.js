/**
 * Remove no-js class from the html
 * Reference: https://stackoverflow.com/questions/4665748/define-css-if-javascript-is-not-enabled
 */
document.documentElement.classList.remove("no-js");

const scrollObserver = new IntersectionObserver((entries) => {
  if ( entries[0].isIntersecting || entries[0].isVisible) {
    backToTopLink.style.opacity = 0;
  } else {
    backToTopLink.style.opacity = 1;
  }
});

const backToTopLink = document.getElementById('back-to-top-link');
const header = document.querySelector("header");
const footer = document.querySelector("footer");
scrollObserver.observe(header);
scrollObserver.observe(footer);
