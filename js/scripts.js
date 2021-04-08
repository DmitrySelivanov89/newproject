document.querySelector('.faq-accordion').addEventListener('click', (event) => {
  // TIP ближайший item сохраняем в переменную, т.к. он нам ещё понадобится, а ходить в дом за элементами - дорогая операция
  const item = event.target.closest('.faq-accordion__item')
  console.log({ item })
  if (item) {
    // TIP Это не метод querySelector, тут точка перед названием класса не нужна
    item.classList.toggle('faq-accordion__item--active');
    // (если её поставить, то он так и повесит - class=".class-name", а ты этого, скорее всего, не хочешь)
  }
});

// TIP Обработчики для удобства можно выносить в отдельные переменные
// Для новых браузеров вместо проверки if (item) можно заюзать оператор безопасной навигации - ?. - его ещё Элвисом называют иногда =)
// Две строчки ниже делают то же самое, что код выше
// const accordionToggler = e => e.target.closest('.faq-accordion__item')?.classList.toggle('faq-accordion__item--active')
// document.querySelector('.faq-accordion').addEventListener('click', accordionToggler)
