// Control step 1 accordion
const accordionButtons = document.querySelectorAll('.js-accordion-button')

const buttonClickHandler = e => {
  const target = e.target;

  if (target.getAttribute('aria-expanded')  === 'true') {
    hideContent(target);
  } else {
    accordionButtons.forEach(button => {
      hideContent(button);
    })
    showContent(target)
  }
}

const hideContent = (el) => {
  const contentId = el.getAttribute('aria-controls');
  const content = document.getElementById(contentId);
  el.setAttribute('aria-expanded', 'false');
  content.style.display = 'none';
}

const showContent = (el) => {
  const contentId = el.getAttribute('aria-controls');
  const content = document.getElementById(contentId);
  el.setAttribute('aria-expanded', 'true');
  content.style.display = 'block';
}

accordionButtons.forEach(button => {
  button.addEventListener('click', buttonClickHandler);
})

window.addEventListener('load', () => document.querySelector('.js-accordion-button').click() )

// Control step 2 slider
const sliderContainer = document.querySelector(".js-slider-container");
const slider = document.getElementById('slider');

slider.addEventListener("input", (e) => {
  sliderContainer.style.setProperty('--scroller', e.target.value + "%");
})