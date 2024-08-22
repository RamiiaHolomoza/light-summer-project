
 const form = document.querySelector('.footer-form');
 const modal = document.getElementById('modal');
 const closeModalBtn = document.querySelector('.footer-close-button');
 const emailMessage = document.getElementById("email-message");

const API_URL = "https://ramiiaholomoza.github.io/light-summer-project/";

 const STORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    comments: ''
};

populateForm();

form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleFormSubmit);

function handleFormInput(event) {
    const { value, name } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    if (name === 'email') {
        validateEmail(event.target);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    if (form.checkValidity()) {
        openModal();
    } else {
        alert('Fill in all fields');
    }
}

function validateEmail(inputElement) {
    
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


function openModal() {
  form.reset();
  emailMessage.textContent = ' ';
    modal.classList.add('is-open');
}

closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('is-open');
});
    
 modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('is-open');
        }
    });

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    modal.classList.remove('is-open');
  }
    })

function populateForm() {
    const savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedFeedbackData) {
        for (const key in savedFeedbackData) {
            if (savedFeedbackData.hasOwnProperty(key)) {
                form.elements[key].value = savedFeedbackData[key];
                formData[key] = savedFeedbackData[key];
            }
        }
    }
}




