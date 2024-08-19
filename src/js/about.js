import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import svgroot from '../img/icons.svg' 

new Accordion('.info-content-list', {
    duration: 300,
    showMultiple: true,
}); 
const information = [
    {
        title: "ABOUT ME",
        content: `<p class="first-text">I am Lloyd Jefferson, a talented programmer with extensive expert in software development. I have an understanding of different programming languages ​​and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.</p><p  class="first-text">Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.</p>`
            
    }, 
    {
        title: "ROLE",
        content:`<p>'Frontend development"</p><p>"HeadlessCMS,Wordpress"</p><p>"Blender(enjoy)</p>`
        },
    {
        title: "EDUCATION",
        content: `<p>2018 - 2019 / Frontend Development Diploma, GoIT IT School, New York</p><p>2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York</p><p>2020 - 2022 / Advanced Blender Animation Techniques, Udemy</p>`
    }
];

const infoCardEl = document.querySelector('.info-content-list')

export function createAboutInfoMarkup(information) {
    return information
        .map(
            ({ title, content }) => `
        <li class="info-content-item">
        <h3 class="accordion-header info-title-acc"><p>${title}</p><button type="button" class="acc-btn"><svg class="about-acc-icon" width="18" height="18">
            <use href="${svgroot}#icon-Icon-bottom"></use></button></h3>
        <div class="accordion-content info-text-acc">${content}</div>
        </li>
            `
    ).join('');
}

infoCardEl.insertAdjacentHTML('beforeend', createAboutInfoMarkup(information));
infoCardEl.addEventListener('click', handleAccAboutClick);

export function handleAccAboutClick(event) {
    const button = event.target.closest('.acc-btn');
    if (button) {
        const infoItem = button.closest('.info-content-item');
        const infoText = infoItem.querySelector('.accordion-content');

        infoItem.classList.toggle('active');

        if (infoItem.classList.contains('active')) {
            infoText.style.maxHeight = infoText.scrollHeight + 'px';
        } else {
            infoText.style.maxHeight = 0;
        }
    }
}