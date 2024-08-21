
 const form = document.querySelector('.footer-form');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.querySelector('.footer-close-button');
    const openModalBtn = document.querySelector('.footer-form-button');
    const hoverOpenBtn = document.querySelector('.open-btn-hover');


const STORAGE_KEY = "feedback-form-state";

        let formData = {
          email: "",
          comments: ""
        };
        // Відстеження подій на формі
        form.addEventListener("submit", handleFormSubmit);
        form.addEventListener("input", handleFormInput);

        // Функція для обробки введення даних у форму
        function handleFormInput(event) {
          const value = event.target.value.trim();
          const key = event.target.name.trim();

          formData[key] = value;
    
          localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
          console.log(key, value);
        }

        function populateForm() {
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

        function handleFormSubmit(event) {
          event.preventDefault();

          if (!formData.email || !formData.comments) {
      
            alert('Fill please all fields');
            return;
          }
          localStorage.removeItem(STORAGE_KEY)
}
// Функція для обробки введення даних у форму
        function handleInput(event) {
          const value = event.target.value.trim();
          const key = event.target.name.trim();

          formData[key] = value;
    
          localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
          console.log(key, value);
          // Перевірка введеної електронної пошти
        if (key === "email") {
            validateEmail(event.target);
        }
        }
// Підтвердьте електронну адресу та надішліть коментар
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
    emailMessage.style.color = '#e74a3b';
  }

}
  

      form.addEventListener('submit', function(event) {
      event.preventDefault(); // Перешкоджаємо стандартному відправленню форми
       // Перевірка валідності форми
        if (form.checkValidity()) {
         modal.classList.add('is-open');
        } else {
          hoverOpenBtn.classList.remove('open-btn-hover');
        }
         form.reset();
      })

// Закриття модального вікна
        closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('is-open');
    });

    // Додатково закриваємо модальне вікно при кліку на фон
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('is-open');
        }
    });
  
     //закрити модальне вікно при натисканні на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    modal.classList.remove('is-open');
  }
    })



