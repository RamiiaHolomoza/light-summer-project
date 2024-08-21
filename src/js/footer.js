
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.footer-form');
    const modal = document.getElementById('modal');
  const closeModalBtn = document.querySelector('.footer-close-button');
  
  // Відстеження події на відправлення форми
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Перешкоджаємо стандартному відправленню форми
      
       // Перевірка валідності форми
      if (form.checkValidity()) {
        // Якщо форма валідна, відображаємо модальне вікно
        modal.classList.add('is-open');
          
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
      
          form.reset();
        
      }
    });

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
});












