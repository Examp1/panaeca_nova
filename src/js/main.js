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
  
});
