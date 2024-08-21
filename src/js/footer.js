
const form = document.querySelector('.footer-form');
const openModalBtn = document.querySelector('.footer-form-button');
const closeModalBtn = document.querySelector('.footer-close-button');
const footerModal = document.querySelector('.footer-backdrop');
const modalContent = document.querySelector('.footer-modal');


const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    comments: ""
};



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
populateForm();

export function handleFormSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.comments) {
      
        alert('Fill please all fields');
      return;
    }
    localStorage.removeItem(STORAGE_KEY)

  form.reset();
}
/*відкрити модальне вікно*/
openModalBtn.addEventListener("click", function () {
  footerModal.classList.add("is-open");
  modalContent.classList.add("is-open");
})
//закрити модільне вікно
closeModalBtn.addEventListener('click', function () {
  footerModal.classList.remove('is-open');
  modalContent.classList.remove("is-open");
})
//закрити модальне вікно при натисканні на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      footerModal.classList.remove('is-open');
      modalContent.classList.remove("is-open");
    }
})
//закрити модальне вікно при натисканні поза ним
document.querySelector('.footer-backdrop .footer-modal').addEventListener('click', event => {
    event._isClickWithInModal = true;
});













