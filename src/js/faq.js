import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener("DOMContentLoaded", function() {
    new Accordion('.faq', {
        duration: 600,
        ariaEnabled: true,
        collapse: true,
        showMultiple: false,
        onlyChildNodes: true,
        elementClass: 'sub-faq',
        triggerClass: 'accord-btn',
        panelClass: 'par-faq',
        activeClass: 'is-active'
    });
});