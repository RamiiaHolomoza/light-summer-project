import sprite from '../img/icons.svg';
const benefitsCards = [
  {
svgroot:
  `${sprite}#icon-user-01`,
topic:
'Expertise',
text:
'As a highly experienced developer, I have deep knowledge of programming and website development.',
},
  {
svgroot:
  `${sprite}#icon-message-chat-circle`,
topic:
'Communication',
text:
'Understanding your needs and wants is my priority and I am always open to discussions and corrections.',
    },
  {
svgroot:
  `${sprite}#icon-brush-01`,
topic:
'Art',
text:
'Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life. ',
    },
  {
    svgroot:
      `${sprite}#icon-hourglass-02`,
topic:
'Urgent execution',
text:
'I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work.',
},
]; 


const benefitsCardEl = document.querySelector('.benefits-list'); 

//створення картки

export function createCardMarkup(cards) {
    return cards.map(
        ({ svgroot, topic, text }) => `<li class="benefits-list-item">
          <svg class="benefits-icon" width="24" height="24">
            <use href="${svgroot}"></use>
          </svg>
          
            <h3 class="benefits-topic">${topic}</h3>
            <p class="benefits-text">${text}</p>
          
        </li>`
    )
    .join("");
}

benefitsCardEl.insertAdjacentHTML("beforeend", createCardMarkup(benefitsCards)); 

export function handleCardClick(event) {
    const card = event.target.closest('.benefits-list-item');
    if (card) {
        const topic = card.querySelector('.benefits-topic').textContent;
        alert(`You clicked on: ${topic}`);
    }
}

benefitsCardEl.addEventListener("click", handleCardClick);

export const customScrollToElement = (elementId, duration = 1000) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const start = window.scrollY;
  const target = element.getBoundingClientRect().top + start;
  const startTime = performance.now();

  const animateScroll = currentTime => {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + (target - start) * easeInOutQuad(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  const easeInOutQuad = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  requestAnimationFrame(animateScroll);
};
