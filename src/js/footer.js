import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
 
import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.footer-form');
const input = document.querySelector('.footer-form-label-input');
const emailInput = document.getElementById('email');
const commentsInput = document.querySelector('.form-comments');
const message = document.getElementById('emailSuccessMessage');
const openModalBtn = document.querySelector('.footer-form-button');
const charCount = document.getElementById('charCount');

const closeModalBtn = document.querySelector('.footer-close-button');
const footerModal = document.querySelector('.footer-backdrop');
const modalContent = document.querySelector('.footer-modal');



const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",

    message: ""
};

populateForm();

// Відстеження подій на формі
form.addEventListener("submit", handleFormSubmit);
form.addEventListener("input", handleFormInput);

// Функція для обробки введення даних у форму
export function handleFormInput(event) {
    const value = event.target.value.trim();
    const key = event.target.name.trim();

    formData[key] = value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
    console.log(key, value);
}

export function populateForm() {
  let savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
  if (!savedFeedbackData) {
    return;
  }

  for (const key in savedFeedbackData) {
      form.elements[key].value = savedFeedbackData[key];
      formData[key] = savedFeedbackData[key];
  }
}

export function handleFormSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
      return;
    }
    localStorage.removeItem(STORAGE_KEY)

    event.currentTarget.reset()
}
/*відкрити модальне вікно*/
openModalBtn.addEventListener("submit", function () {
    footerModal.classList.add("is-open")
})
//закрити модільне вікно
closeModalBtn.addEventListener('click', function () {
    footerModal.classList.remove('is-open')
})
//закрити модальне вікно при натисканні на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
    footerModal.classList.remove('is-open')
    }
})
//закрити модальне вікно при натисканні поза ним
document.querySelector('.footer-backdrop .footer-modal').addEventListener('click', event => {
    event._isClickWithInModal = true;
});

footerModal.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('is-open');
});
  
  


