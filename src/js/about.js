import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

import svgroot from '../img/icons.svg' 

new Accordion('.info-content-list', {
    duration: 300,
    showMultiple: true,
    openOnInit: [0]
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
            ({ title, content }, index ) => `
        <li class="info-content-item ${index === 0 ? 'is-active' : ''}">
        <h3 class="accordion-header info-title-acc"><p>${title}</p><button type="button" class="acc-btn"><svg class="about-acc-icon" width="18" height="18">
            <use href="${svgroot}#icon-Icon-bottom"></use></button></h3>
        <div class="accordion-content info-text-acc">${content}</div>
        </li>
            `
    ).join('');
}

infoCardEl.insertAdjacentHTML('beforeend', createAboutInfoMarkup(information));
infoCardEl.addEventListener('click', handleAccAboutClick);


const active = document.querySelector('.info-content-item.is-active .accordion-content')
active.style.maxHeight = active.scrollHeight + 'px';


export function handleAccAboutClick(event) {
    const button = event.target.closest('.acc-btn');
    if (button) {
        const infoItem = button.closest('.info-content-item');
        const infoText = infoItem.querySelector('.accordion-content');

        infoItem.classList.toggle('is-active');

        if (infoItem.classList.contains('is-active')) {
            infoText.style.maxHeight = infoText.scrollHeight + 'px';
        } else {
            infoText.style.maxHeight = 0;
        }
    }
}

// -------------------------------------------------------------------

// const skills = ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'React Native', ' Soft skills', 'HTML/CSS', 'JavaScript', 'React', 'Node.js', 'React Native', ' Soft skills'];
const skills = ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'React Native', ' Soft skills'];

const skillsContentList = document.querySelector('.skills-content-list');

skills.forEach(skill => {
    const listItem = document.createElement('li');
    listItem.classList.add('swiper-slide', 'slide-item-ab');
    listItem.innerHTML = `<p class="swiper-ab-text">${skill}</p>`;
    skillsContentList.appendChild(listItem);
});

// const swiperContainerAb = document.getElementsByClassName('skills-content-list');

const swiperAbout = new Swiper('.skilla-about-swiper', {
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 0,
    modules: [Navigation],
    loop: true, // нескінченний цикл

        navigation: {
    nextEl: '.swiper-button-next-ab',
    },
    

    breakpoints: {
    320: {
        slidesPerView: 'auto',
    },
    768: {
        slidesPerView: 'auto',
    },
    1440: {
        slidesPerView: 'auto',
    },
    },
});

swiperAbout.update(); 

document.querySelector('.swiper-button-next-ab').addEventListener('click', () => {
    swiperAbout.slideNext();
});

function updateNavigationState() {
    const nextButton = document.querySelector('.swiper-button-next-ab');

    if (currentSlideIndex ) {
    nextButton.classList.remove('swiper-button-lock');
    }
}

// спроба перебити / прибрати специфічність класу від element.style

// const slideItems = document.getElementsByClassName('swiper-slide slide-item-ab');
const slideItems = document.getElementsByClassName('.skills-content-list.swiper-wrapper .swiper-slide.slide-item-ab');


Array.from(slideItems).forEach(slideItem => {
    // slideItem.style.removeProperty('width');
    slideItem.removeAttribute('style');
    slideItem.classList.add('new-width-class-item-ab');
});

