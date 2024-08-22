import axios from 'axios';

 const form = document.querySelector('.footer-form');
 const modal = document.getElementById('modal');
 const closeModalBtn = document.querySelector('.footer-close-button');
  const emailMessage = document.getElementById("email-message");
  const submitButton = form.querySelector('button[type="submit"]');

const API_URL = "https://portfolio-js.b.goit.study/api/";
const STORAGE_KEY = 'feedback-form-state';
 
let isEmailValid = false;
let formData = {
    email: '',
    comment: ''
};

populateForm();

form.addEventListener('input', handleFormInput);
form.addEventListener('submit', handleFormSubmit);


function validateEmail(inputElement) {
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const isValid = emailPattern.test(inputElement.value.trim());
  

  if (isValid) {
    emailMessage.textContent = "Success!";
    emailMessage.classList.add("success");
    emailMessage.classList.remove("error");
  }  else {
        emailMessage.textContent = "Invalid email, try again";
        emailMessage.classList.add("error");
        emailMessage.classList.remove("success");
  }
    isEmailValid = isValid
    return isEmailValid;
}
function validateInputLength() {
    const commentsInput = document.querySelector('.form-comments');
    const maxLength = commentsInput.getAttribute('maxlength');

    commentsInput.addEventListener('input', function() {
        const currentLength = commentsInput.value.length;

        if (currentLength >= maxLength) {
            commentsInput.value = commentsInput.value.substring(0, maxLength) + '...';
        }

        updateTextOverflow(commentsInput);
    });
     updateTextOverflow(commentsInput);
}

function handleFormInput(event) {
    const { value, name } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    if (name === 'email') {
        validateEmail(event.target);
  }
  checkFormValidity();
}

function updateTextOverflow(inputElement) {
    inputElement.classList.toggle('impute-ellips', inputElement.value.length >= inputElement.getAttribute('maxlength'));
}

validateInputLength();

function handleFormSubmit(event) {
    event.preventDefault();
    
    if (form.checkValidity()) {
        submitFormData(formData);
    } else {
        alert('Fill in all fields');
    }
}

  
//   Надішліть дані форми на сервер
function submitFormData(data) {
  console.log('Sending data:', data);
  axios
      .post(`${API_URL}requests`, data)
        .then(response => {
            if (response.status === 200 || response.status === 201) {  // Перевірка на успішний статус відповіді
                openModal();  // Відкриваємо модальне вікно

                // Очистити форму і localStorage тільки після успішного відправлення даних на сервер
                localStorage.removeItem(STORAGE_KEY);  // Очищуємо localStorage
                form.reset();  // Скидаємо форму
                formData = {};  // Очищуємо formData
            } else {
                throw new Error('Unexpected response status');
            }
        })
        .catch(error => {
            alert('There was a problem with your submission. Please try again.');
            console.error(error);  // Логування помилки для діагностики
        });
}



function checkFormValidity() {
    const isFormValid = isEmailValid && formData.email !== '' && formData.comment !== '';
    submitButton.disabled = !isFormValid;
}

function openModal() {
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

// -----------------------
// const inputs = document.querySelectorAll('.footer-form-label-input'); // Вибираємо всі інпути

// inputs.forEach(input => {
//     input.addEventListener('input', () => {
//         const mirror = document.querySelector(`.input-text-mirror[data-mirror-for="${input.id}"]`); // Знаходимо відповідне дзеркало
        
//         if (mirror) {
//             mirror.textContent = input.value; // Копіюємо введений текст у блок-зеркало

//             if (mirror.scrollWidth > mirror.clientWidth) {
//                 mirror.textContent = input.value.substring(0, input.value.length - 1) + '...'; // Додаємо три крапки
//             }
//         }
//     });
// });