import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
});
