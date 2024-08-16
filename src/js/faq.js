import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
export {questions, ulElement, createFAQMarkup, styleElement};

new Accordion('.faq-container');
const questions = [
    {
  svgroot:
   './img/icons.svg#icon-arrow-down' ,
  topic:
  'What programming languages ​​are most often used in your project?',
  text:
  'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
    {
  svgroot:
   './img/icons.svg#icon-arrow-down' ,
  topic:
  'What are the deadlines for the project?',
  text:
  'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },

  {
    svgroot:
     './img/icons.svg#icon-arrow-down' ,
    topic:
    'What payment methods do you accept?',
    text:
    'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
    },

    {svgroot:
     './img/icons.svg#icon-arrow-down' ,
    topic:
    'How can I contact you?',
    text:
    'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
    },

    {svgroot:
        './img/icons.svg#icon-arrow-down' ,
       topic:
       'Do you provide advice or support?',
       text:
       'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
       },
       {svgroot:
        './img/icons.svg#icon-arrow-down' ,
       topic:
       'What does the process of developing a software product look like from idea to implementation?',
       text:
       'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
       },
   

  ];
  const ulElement = document.querySelector('.faq-container');

  function createFAQMarkup(questions) {
    return questions
      .map(
        ({ svgroot, topic, text }, index) => `
          <li class="faq" style="position: relative; padding-right: 50px; ${index !== questions.length - 1 ? 'border-bottom: 1px solid #FAFAFA;' : ''}">
             <svg class="faq-icon" style="position: absolute; top: 10px; right: 10px; width: 40px; height: 40px; border: 1px solid; border-radius: 100px; color: #FAFAFA;">
            <use href="${svgroot}"></use>
          </svg>
            <h3 style="font-size: 16px; font-weight: 600; line-height: 1.5; letter-spacing: -0.02em; padding-bottom: 32px;">${topic}</h3>
            <p class="faq-text" style="padding-bottom: 24px; font-size: 16px; font-weight: 500; line-height: 1.5; letter-spacing: -0.02em;">${text}</p>
          </li>`
      )
      .join('');
  }
  ulElement.insertAdjacentHTML('beforeend', createFAQMarkup(questions));

function handleCardClick(event) {
  if (event.target.closest('svg')) {
    const faqItem = event.target.closest('.faq');
    const faqText = faqItem.querySelector('.faq-text');
    faqText.style.display = faqText.style.display === 'none' ? 'block' : 'none';
    const accordion = new Accordion(faqItem);
    accordion.toggle();
  }
}

ulElement.addEventListener('click', handleCardClick);

const styleElement = document.createElement('style');
styleElement.textContent = `
  .faq-icon {
    width: 5px;
    height: 10px;
    top: 12.5px;
    left: 15px;
    border: 2px solid;
    border-radius: 100px;
    fill: #FAFAFA; 
    transform: rotate(90deg); 
  }
  .faq-text {
    display: none;
}`;
styleElement.textContent = `
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    .faq-container {
      padding-bottom: 96px;
    }
    .faq {
      padding: 32px 0 26px;
    }
  }
  @media screen and (min-width: 1280px) {
    .faq-container {
      padding-bottom: 164px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      position: relative;
    }
    .faq-container::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 1px;
      background-color: #FAFAFA;
    }
    .faq {
      padding: 0 32px;
      border-bottom: 1px solid #FAFAFA;
    }
    .faq:nth-child(odd) {
      padding-left: 0;
    }
    .faq h3 {
      padding-top: 32px;
      padding-bottom: 26px;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: -0.02em;
    }
    .faq p {
      padding-bottom: 26px;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      letter-spacing: -0.02em;
    }
  }
`;
document.head.appendChild(styleElement);