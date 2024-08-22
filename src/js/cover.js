import img1x1 from '../img/covers/project1.png';
import img1x2 from '../img/covers/project1-retina.png';
import img2x1 from '../img/covers/project2.png';
import img2x2 from '../img/covers/project2-retina.png';
import img3x1 from '../img/covers/project3.png';
import img3x2 from '../img/covers/project3-retina.png';
import img4x1 from '../img/covers/project4.png';
import img4x2 from '../img/covers/project4-retina.png';
import img5x1 from '../img/covers/project5.png';
import img5x2 from '../img/covers/project5-retina.png';
import img6x1 from '../img/covers/project6.png';
import img6x2 from '../img/covers/project6-retina.png';
import img7x1 from '../img/covers/project7.png';
import img7x2 from '../img/covers/project7-retina.png';
import img8x1 from '../img/covers/project8.png';
import img8x2 from '../img/covers/project8-retina.png';
import img9x1 from '../img/covers/project9.png';
import img9x2 from '../img/covers/project9-retina.png';
import img10x1 from '../img/covers/project10.png';
import img10x2 from '../img/covers/project10-retina.png';

const coverCardItems = [
  {
    imagen1x: img1x1,
    imagen2x: img1x2,
  },
  {
    imagen1x: img2x1,
    imagen2x: img2x2,
  },
  {
    imagen1x: img3x1,
    imagen2x: img3x2,
  },
  {
    imagen1x: img4x1,
    imagen2x: img4x2,
  },
  {
    imagen1x: img5x1,
    imagen2x: img5x2,
  },
  {
    imagen1x: img6x1,
    imagen2x: img6x2,
  },
  {
    imagen1x: img7x1,
    imagen2x: img7x2,
  },
  {
    imagen1x: img8x1,
    imagen2x: img8x2,
  },
  {
    imagen1x: img9x1,
    imagen2x: img9x2,
  },
  {
    imagen1x: img10x1,
    imagen2x: img10x2,
  },
];

function repeatArrayToLength(array, length) {
  const repeatedArray = [];
  while (repeatedArray.length < length) {
    repeatedArray.push(...array); // Додаємо всі елементи з масиву до нового масиву
  }
  return repeatedArray.slice(0, length); // Обрізаємо масив до потрібної довжини
}

// Повторюємо масив до 25 елементів
const extendedItems = repeatArrayToLength(coverCardItems, 25);

export function createCoverCardMarkup(cards) {
  return cards
    .map(
      ({ imagen1x, imagen2x }) => `
<li class="covers-project">
  <picture>
    <source
      srcset="${imagen1x} 1x, ${imagen2x} 2x"
      media="(min-width: 320px)"
    />

    <img class="covers-img" src="${imagen1x}" alt="Covers" />
  </picture>
</li>
`
    )
    .join('');
}

const coverUlElements = document.querySelectorAll('.covers-list');

coverUlElements.forEach((ul, index) => {
  const start = index * 3;
  const end = start + 5;
  ul.innerHTML = createCoverCardMarkup(extendedItems.slice(start, end));
});

const targetElement = document.querySelector('.covers-content'); // елемент div
const targetAnimation = document.querySelectorAll('.covers-project'); //масив li
const nextElement = document.querySelector('.container-reviews');

export function handleScroll() {
  for (let i = 0; i < targetAnimation.length; i++) {
    const windowHeight = window.innerHeight;
    const elementRect = targetElement.getBoundingClientRect();
    const elementTop = elementRect.top;
    const nextElementRect = nextElement.getBoundingClientRect();
    const nextElementTop = nextElementRect.top;

    if (elementTop < windowHeight * 0.9) {
      // eлемент знаходиться у середині viewport користувача
      targetAnimation[i].classList.add('covers-animation'); // Додаємо класс с анимацією на li
    } else {
      targetAnimation[i].classList.remove('covers-animation');
    }

    if (nextElementTop < windowHeight * 0.5) {
      targetAnimation[i].classList.remove('covers-animation');
    }
  }
}
window.addEventListener('scroll', handleScroll);
