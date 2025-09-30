window.addEventListener("DOMContentLoaded", () => {
  const btnPrev = document.querySelector('.button-prev');
  const btnNext = document.querySelector('.button-next');
  const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 24,
  });
  btnNext.addEventListener('click', () => {
    swiper.slideNext();
  })
  btnPrev.addEventListener('click', () => {
    swiper.slidePrev();
  })
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');
    trigger.addEventListener('click', () => {
      item.classList.toggle('active');
    })
  })
});
