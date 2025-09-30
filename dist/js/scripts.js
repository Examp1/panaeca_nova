window.addEventListener("DOMContentLoaded", () => {
  const btnPrev = document.querySelector('.button-prev');
  const btnNext = document.querySelector('.button-next');
  const swiper = new Swiper('.swiper', {
    // slidesPerView: 4,
    spaceBetween: 24,
      breakpoints: {
        1366: {
            slidesPerView: 4,
        },
        1024: {
           slidesPerView: 3,
        },
        768: {
            slidesPerView: 2, 
        },
        320:{
            slidesPerView: 1,
        }
      }
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
    trigger.addEventListener('click', () => {
      item.classList.toggle('active');
    })
  })
  const burger = document.querySelector('.mdi-menu');
  const menu = document.querySelector('.menu');
  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  })
});
