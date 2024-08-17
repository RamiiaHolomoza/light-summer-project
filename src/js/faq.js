import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
export {questions, ulElement, createFAQMarkup, styleElement};

new Accordion('.faq-container');
const questions = [
    {
  svgroot:
   './img/icons.svg#icon-Icon-bottom' ,
  topic:
  'What programming languages ​​are most often used in your project?',
  text:
  'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
  },
    {
  svgroot:
   './img/icons.svg#icon-Icon-bottom' ,
  topic:
  'What are the deadlines for the project?',
  text:
  'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
  },

  {
    svgroot:
     './img/icons.svg#icon-Icon-bottom' ,
    topic:
    'What payment methods do you accept?',
    text:
    'Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others.',
    },

    {svgroot:
     './img/icons.svg#icon-Icon-bottom' ,
    topic:
    'How can I contact you?',
    text:
    'In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages.',
    },

    {svgroot:
        './img/icons.svg#icon-Icon-bottom' ,
       topic:
       'Do you provide advice or support?',
       text:
       'The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project.',
       },

       {svgroot:
        './img/icons.svg#icon-Icon-bottom' ,
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
          <li class="faq" style="position: relative; padding-right: 50px; ${index !== questions.length - 1 ? 'border-bottom: 1px solid rgba(250, 250, 250, 0.2);' : ''}">
             <svg class="faq-icon" style="position: absolute; top: 32px; right: 20px; width: 40px; height: 40px; border: 1px solid; border-radius: 100px;">
            <use href="${svgroot}"></use>
          </svg>
            <h3 class="question" style="font-size: 20px; font-weight: 600; line-height: 1.5; letter-spacing: -0.02em;">${topic}</h3>
            <p class="faq-text" style="padding-bottom: 24px; font-size: 16px; font-weight: 500; line-height: 1.5; letter-spacing: -0.02em;">${text}</p>
          </li>`
      )
      .join('');
  }
  ulElement.insertAdjacentHTML('beforeend', createFAQMarkup(questions));

  function handleCardClick(event) {
    if (event.target.closest('.faq-icon')) { 
      const faqItem = event.target.closest('.faq');
      const faqText = faqItem.querySelector('.faq-text');
  
      faqItem.classList.toggle('active');
  
      if (faqItem.classList.contains('active')) {
        faqText.style.maxHeight = faqText.scrollHeight + 'px'; 
      } else {
        faqText.style.maxHeight = 0; 
      }
    }
  }
  
  ulElement.addEventListener('click', handleCardClick);

const styleElement = document.createElement('style');

styleElement.textContent = `
  @media screen and (min-width: 1280px) {
    .faq-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, auto);
      position: relative;
    }
    .faq-container::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 1px;
      background-color: rgba(250, 250, 250, 0.2); ;
    }
    .faq {
      padding: 0 32px;
      border-bottom: 1px solid rgba(250, 250, 250, 0.2);
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
import 'accordion-js/dist/accordion.min.css';
