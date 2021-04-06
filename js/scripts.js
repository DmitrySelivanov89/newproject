document.querySelector('.faq-accordion').addEventListener('click', (event) => {
  if (event.target.closest('.faq-accordion__item')) {
    event.target.closest('.faq-accordion__item').classList.toggle('.faq-accordion__item--active');
  }
});