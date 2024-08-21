const coverCardItems = [
  {
    imagen1x: '../img/covers/project1.png',
    imagen2x: '../img/covers/project1-retina.png',
  },
  {
    imagen1x: '../img/covers/project2.png',
    imagen2x: '../img/covers/project2-retina.png',
  },
  {
    imagen1x: '../img/covers/project3.png',
    imagen2x: '../img/covers/project3-retina.png',
  },
  {
    imagen1x: '../img/covers/project4.png',
    imagen2x: '../img/covers/project4-retina.png',
  },
  {
    imagen1x: '../img/covers/project5.png',
    imagen2x: '../img/covers/project5-retina.png',
  },
  {
    imagen1x: '../img/covers/project6.png',
    imagen2x: '../img/covers/project6-retina.png',
  },
  {
    imagen1x: '../img/covers/project7.png',
    imagen2x: '../img/covers/project7-retina.png',
  },
  {
    imagen1x: '../img/covers/project8.png',
    imagen2x: '../img/covers/project8-retina.png',
  },
  {
    imagen1x: '../img/covers/project9.png',
    imagen2x: '../img/covers/project9-retina.png',
  },
  {
    imagen1x: '../img/covers/project10.png',
    imagen2x: '../img/covers/project10-retina.png',
  },
];

function shuffleArray(coverCardItems) {
  return coverCardItems.sort(() => Math.random() - 0.5);
}

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

const shuffledItems = shuffleArray(coverCardItems);
const coverUlElements = document.querySelectorAll('.covers-list');

coverUlElements.forEach((ul, index) => {
  const start = index * 5;
  const end = start + 5;
  ul.innerHTML = createCoverCardMarkup(shuffledItems.slice(start, end));

  /*  ul.insertAdjacentHTML(
    'beforeend',
    createCoverCardMarkup(shuffledItems.slice(start, end))
  );
  */
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

/*
coverUlElements.insertAdjacentHTML(
  'beforeend',
  createCoverCardMarkup(coverCardItems)
);

coverUlElements.insertAdjacentHTML(
  'beforeend',
  createCoverCardMarkup(shuffledItems.slice(start, end))
);
*/
/*
const coversSection = document.querySelector('.section-covers');
window.addEventListener('scroll', handleScroll);

export function startAnimation(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.covers-project').forEach(item => {
        item.style.animationPlayState = 'running';
      });
    } else {
      document.querySelectorAll('.covers-project').forEach(item => {
        item.style.animationPlayState = 'paused';
      });
    }
  });
}

const observerOptions = {
  root: null, // Використовуємо вікно браузера як viewport
  threshold: 0.1, // Анімація запускається, коли 10% секції видимі
};

const observer = new IntersectionObserver(startAnimation, observerOptions);

observer.observe(coversSection); // Відстежуємо секцію covers

document.querySelectorAll('.covers-project').forEach(item => {
  item.style.animationPlayState = 'paused';
});


*/
