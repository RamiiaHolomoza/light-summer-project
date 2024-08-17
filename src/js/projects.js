import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

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

// Log the values of activeSlideIndex and totalSlideAmount

function btnDisable() {
  const btnNext = document.querySelector('.custom-button-next');
  const btnPrev = document.querySelector('.custom-button-prev');
  const totalSlideAmount = swiper.slides.length;
  const activeSlideIndex = swiper.activeIndex;

  console.log(
    `Active Slide Index: ${activeSlideIndex}, Total Slides: ${totalSlideAmount}`
  );

  if (activeSlideIndex === totalSlideAmount - 1) {
    btnNext.disabled = true;
    btnNext.classList.add('nav-button-disabled');
  } else {
    btnNext.disabled = false;
    btnNext.classList.remove('nav-button-disabled');
  }

  if (activeSlideIndex === 0) {
    btnPrev.disabled = true;
    btnPrev.classList.add('nav-button-disabled');
  } else {
    btnPrev.disabled = false;
    btnPrev.classList.remove('nav-button-disabled');
  }
}

swiper.on('toEdge', btnDisable);

btnDisable();
