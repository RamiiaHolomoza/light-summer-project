const targetElement = document.querySelector('.covers-content'); // елемент div
const targetAnimation = document.querySelectorAll('.covers-project'); //масив li

export function handleScroll() {
  for (let i = 0; i < targetAnimation.length; i++) {
    const windowHeight = window.innerHeight;
    const elementRect = targetElement.getBoundingClientRect();
    const elementTop = elementRect.top;


    if (elementTop < windowHeight * 0.9) {
      // eлемент знаходиться у середині viewport користувача
      targetAnimation[i].classList.add('covers-animation'); // Додаємо класс с анимацією на li
    } else {
      targetAnimation[i].classList.remove('covers-animation');
    }

    // if (elementTop < windowHeight * 0.001) {
    //   targetAnimation[i].classList.remove('covers-animation');
    // }
      //Треба якось зміститися ще нижче щоб зупинялась анімація 
  }
}
window.addEventListener('scroll', handleScroll);

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
