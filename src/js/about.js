// const skills = ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'React Native', ' Soft skills', 'HTML/CSS', 'JavaScript', 'React', 'Node.js', 'React Native', ' Soft skills'];
const skills = [
  'HTML/CSS',
  'JavaScript',
  'React',
  'Node.js',
  'React Native',
  ' Soft skills',
];

const skillsContentList = document.querySelector('.skills-content-list');

skills.forEach(skill => {
  const listItem = document.createElement('li');
  listItem.classList.add('swiper-slide', 'slide-item-ab');
  listItem.innerHTML = `<p class="swiper-ab-text">${skill}</p>`;
  skillsContentList.appendChild(listItem);
});

// const swiperContainerAb = document.getElementsByClassName('skills-content-list');

const swiperAbout = new Swiper('.skilla-about-swiper', {
  slidesPerView: 6,
  slidesPerGroup: 1,
  spaceBetween: 0,
  modules: [Navigation],
  loop: true, // нескінченний цикл

  navigation: {
    nextEl: '.swiper-button-next-ab',
  },

  breakpoints: {
    320: {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 'auto',
    },
    1440: {
      slidesPerView: 'auto',
    },
  },
});

swiperAbout.update();

// document.querySelector('.swiper-button-next-ab').addEventListener('click', () => {
//     swiperAbout.slideNext();
// });

document
  .querySelector('.swiper-button-next-ab')
  .addEventListener('click', () => {
    const screenWidth = window.innerWidth;

    if (1399 < screenWidth) {
      const activeSlide = document.querySelector('.swiper-slide-active');
      let nextSlide = activeSlide.nextElementSibling;

      if (!nextSlide) {
        nextSlide = document.querySelector('.swiper-slide:first-child');
      }

      activeSlide.classList.remove('swiper-slide-active');
      nextSlide.classList.add('swiper-slide-active');
    }
  });
