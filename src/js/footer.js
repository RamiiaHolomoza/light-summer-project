const form = document.querySelector('.footer-form');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.footer-close-button');
const STORAGE_KEY = "feedback-form-state";
const API_URL = "https://ramiiaholomoza.github.io/light-summer-project/";

let formData = { email: "", comments: "" };

populateForm(); // Заповнення форми з localStorage

form.addEventListener("input", handleFormInput);
form.addEventListener('submit', handleFormSubmit);

// Обробка введення даних у форму
function handleFormInput(event) {
    const value = event.target.value.trim();
    const key = event.target.name.trim();
    formData[key] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    if (key === "email") {
        validateEmail(event.target);
    }
}

// Перевірка валідності email
function validateEmail(inputElement) {
    const emailMessage = document.getElementById("email-message");
    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if (emailPattern.test(inputElement.value.trim())) {
        emailMessage.textContent = "Success!";
        emailMessage.classList.add("success");
        emailMessage.classList.remove("error");
    } else {
        emailMessage.textContent = "Invalid email, try again";
        emailMessage.classList.add("error");
        emailMessage.classList.remove("success");
    }
}

// Обробка відправлення форми
function handleFormSubmit(event) {
    event.preventDefault();

    if (form.checkValidity()) {
        modal.classList.add('is-open');
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
        formData = { email: "", comments: "" };
    } else {
        alert('Fill in all fields');
    }
}

// Заповнення полів форми з localStorage
function populateForm() {
    const savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!savedFeedbackData) return;

    for (const key in savedFeedbackData) {
        if (savedFeedbackData.hasOwnProperty(key)) {
            form.elements[key].value = savedFeedbackData[key];
            formData[key] = savedFeedbackData[key];
        }
    }
}

// Закриття модального вікна
closeModalBtn.addEventListener('click', () => modal.classList.remove('is-open'));
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('is-open');
    }
});
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        modal.classList.remove('is-open');
    }
});
