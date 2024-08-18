import Swiper from 'swiper/bundle';
import axios from 'axios';

let startIndex = 0;
let endIndex = 4;
let totalReviews = 0;

export async function fetchReviews(start = 0, end = 4) {
  try {
    const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
    const reviews = response.data;
    totalReviews = reviews.length;

    if (totalReviews === 0) {
      renderPlaceholder('Not found');
    } else {
      const limitedReviews = reviews.slice(start, end);
      renderReviews(limitedReviews);
      updateNavigationState();
    }
  } catch (error) {
    showErrorPopup('Failed to load reviews. Please try again.');
  }
}

function renderReviews(reviews) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.innerHTML = '';
  reviews.forEach(review => {
    const slide = document.createElement('li');
    slide.classList.add('swiper-slide', 'review-item');
    slide.innerHTML = `
      <div class="review-item-content">
        <img class="image-reviews" src="${review.avatar_url}" alt="${review.author}">
        <b class="name-reviews">${review.author}</b>
        <p class="text-reviews">${review.review}</p>
      </div>`;
    swiperWrapper.appendChild(slide);
  });

  swiper.update();
}

function renderPlaceholder(message) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const placeholder = document.createElement('li');
  placeholder.classList.add('swiper-slide', 'review-item');
  placeholder.textContent = message;
  swiperWrapper.appendChild(placeholder);
}

function showErrorPopup(message) {
  const popup = document.querySelector('.error-popup');
  popup.textContent = message;
  popup.classList.add('active');
  setTimeout(() => {
    popup.classList.remove('active');
  }, 3000);
}

function updateNavigationState() {
  const prevButton = document.querySelector('.swiper-button-prev');
  const nextButton = document.querySelector('.swiper-button-next');

  if (startIndex === 0) {
    prevButton.classList.add('swiper-button-disabled');
  } else {
    prevButton.classList.remove('swiper-button-disabled');
  }

  if (endIndex >= totalReviews) {
    nextButton.classList.add('swiper-button-disabled');
  } else {
    nextButton.classList.remove('swiper-button-disabled');
  }
}

export const swiper = new Swiper('.reviews-slider', {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  on: {
    slideChange: updateNavigationState,
  },
});

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  if (endIndex < totalReviews) {
    startIndex += 1;
    endIndex += 1;
    fetchReviews(startIndex, endIndex);
  }
});

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
  if (startIndex > 0) {
    startIndex -= 1;
    endIndex -= 1;
    fetchReviews(startIndex, endIndex);
  }
});

fetchReviews(startIndex, endIndex);