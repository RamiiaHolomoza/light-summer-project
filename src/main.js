import {} from './js/header';

import { createAboutInfoMarkup } from './js/about';

import { createCardMarkup, handleCardClick } from './js/benefits';

import { btnDisable } from './js/projects';

import { questions, ulElement, createFAQMarkup, styleElement } from './js/faq';

import { handleScroll } from './js/cover';
import { fetchReviews, swiper } from './js/reviews';

import {} from './js/footer';

// function loadCSS(href) {
//     const link = document.createElement('link');
//         link.rel = 'stylesheet';
//         link.href = href;
//         document.head.appendChild(link);
//     return link;
// }
// function removeCSS(linkElement) {
//     if (linkElement) {
//         document.head.removeChild(linkElement);
//     }
// }

// const projectsSection = document.querySelector('load[src="partials/projects.html"]'); // Якщо використовуєш кастомний тег <load>, переконайся, що він є у DOM.
// let projectsCSS;

// if (projectsSection) {
//     // Якщо секція "projects" є, підключаємо стилі
//     projectsCSS = loadCSS('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
// } else {
//     // Якщо секції немає, видаляємо стилі
//     removeCSS(projectsCSS);
// }
