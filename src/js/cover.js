const coverCardItems = [
  {
    imagen1x: './img/covers/project1.png',
    imagen2x: './img/covers/project1-retina.png',
  },
  {
    imagen1x: './img/covers/project2.png',
    imagen2x: './img/covers/project2-retina.png',
  },
  {
    imagen1x: './img/covers/project3.png',
    imagen2x: './img/covers/project3-retina.png',
  },
  {
    imagen1x: './img/covers/project4.png',
    imagen2x: './img/covers/project4-retina.png',
  },
  {
    imagen1x: './img/covers/project5.png',
    imagen2x: './img/covers/project5-retina.png',
  },
  {
    imagen1x: './img/covers/project6.png',
    imagen2x: './img/covers/project6-retina.png',
  },
  {
    imagen1x: './img/covers/project7.png',
    imagen2x: './img/covers/project7-retina.png',
  },
  {
    imagen1x: './img/covers/project8.png',
    imagen2x: './img/covers/project8-retina.png',
  },
  {
    imagen1x: './img/covers/project9.png',
    imagen2x: './img/covers/project9-retina.png',
  },
  {
    imagen1x: './img/covers/project10.png',
    imagen2x: './img/covers/project10-retina.png',
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

    if (nextElementTop < windowHeight * 0.2) {
      targetAnimation[i].classList.remove('covers-animation');
    }
  }
}
window.addEventListener('scroll', handleScroll);
