// const targetElement = document.querySelector('.container-covers');

// function handleScroll() {
//   const windowHeight = window.innerHeight;
//   const elementRect = targetElement.getBoundingClientRect();
//   const elementTop = elementRect.top;

//   if (elementTop < windowHeight * 0.5) {
//     // Элемент у середині viewport
//     targetElement.classList.add('covers-project'); // класс з анимацією
//   }
// }
const coversSection = document.querySelector('.section-covers');
window.addEventListener('scroll', handleScroll);

function startAnimation(entries, observer) {
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
