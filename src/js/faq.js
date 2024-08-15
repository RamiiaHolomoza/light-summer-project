import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import axios from 'axios';

const buttons = document.querySelectorAll(".faq-toggle");
buttons.forEach((button) => {
  button.addEventListener("click", () =>
    button.parentElement.classList.toggle("open")
  );
});


