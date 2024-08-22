
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




// const form = document.querySelector('.footer-form');
  //  const modal = document.getElementById('modal');
//const closeModalBtn = document.querySelector('.footer-close-button');
  
//const STORAGE_KEY = "feedback-form-state";
//const API_URL = "https://ramiiaholomoza.github.io/light-summer-project/";

//let formData = {
  //      email: "",
    //    comments: ""
 //   };

    
//populateForm(); 
  
//  form.addEventListener("input", handleFormInput);
  
  // Відстеження події на відправлення форми
//    form.addEventListener('submit', function(event) {
//      event.preventDefault(); // Перешкоджаємо стандартному відправленню форми
      
       // Перевірка валідності форми
//      if (form.checkValidity()) {
        
 //       submitFormData(formData);// Надіслати дані форми на сервер
//        } else {
 //           alert('Fill in all fields');
   //     }
 //   });
        

        // Функція для обробки введення даних у форму
        // function handleFormInput(event) {
          // const value = event.target.value.trim();
          // const key = event.target.name.trim();

          // formData[key] = value;
    
          // localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
          // Перевірка введеної електронної пошти
        // if (key === "email") {
            // validateEmail(event.target);
        // }
          // console.log(key, value);
        // }

  // Підтвердьте електронну адресу та надішліть коментар
    // function validateEmail(inputElement) {
        // const emailMessage = document.getElementById("email-message");
        // const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        // if (emailPattern.test(inputElement.value.trim())) {
            // emailMessage.textContent = "Success!";
            // emailMessage.classList.add("success");
            // emailMessage.classList.remove("error");
        // } else {
            // emailMessage.textContent = "Invalid email, try again";
            // emailMessage.classList.add("error");
            // emailMessage.classList.remove("success");
        // }
  // }
  
  // Надішліть дані форми на сервер
    //function submitFormData(data) {
        // fetch(API_URL, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }
        //     return response.json();
        // })
        // .then(result => {
        //     // Відобразити success
        //     modal.classList.add('is-open');
        //     // Очистити localStorage і скинути форму
        //     localStorage.removeItem(STORAGE_KEY);
        //     form.reset();
        //     formData = {};
        // })
        // .catch(error => {
        //     // Показати користувачеві повідомлення про помилку
        //     alert('There was a problem with your submission. Please try again.');
        // });
   // }

// Заповнити поля форми збереженими даними з localStorage
        // function populateForm() {
          // let savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
          // if (!savedFeedbackData) {
            // return;
          // }

          // for (const key in savedFeedbackData) {
            // if (savedFeedbackData.hasOwnProperty(key)) {
                // form.elements[key].value = savedFeedbackData[key];
                // formData[key] = savedFeedbackData[key];
            // }
        // }
        // }
        
        // populateForm(); // Заповнити поля форми даними з localStorage, якщо доступно

          // formData[key] = value;
    
          // localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
          // console.log(key, value);
          // Перевірка введеної електронної пошти
        // if (key === "email") {
            // validateEmail(event.target);
        // }
        
// Підтвердьте електронну адресу та надішліть коментар
// function validateEmail(inputElement) {
  // const emailMessage = document.getElementById("email-message");
  // const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  // if (emailPattern.test(inputElement.value.trim())) {
    // emailMessage.textContent = "Success!";
    // emailMessage.classList.add("success");
    // emailMessage.classList.remove("error");
  // } else {
    // emailMessage.textContent = "Invalid email, try again";
    // emailMessage.classList.add("error");
    // emailMessage.classList.remove("success");
    // emailMessage.style.color = '#e74a3b';
  // }

// }
  

      // form.addEventListener('submit', function(event) {
      // event.preventDefault(); // Перешкоджаємо стандартному відправленню форми
       // Перевірка валідності форми
        // if (form.checkValidity()) {
        //  modal.classList.add('is-open');
        // } else {
          // hoverOpenBtn.classList.remove('open-btn-hover');
        // }
        //  form.reset();
      // })

// Закриття модального вікна
        // closeModalBtn.addEventListener('click', function() {
        // modal.classList.remove('is-open');
    // });

    // Додатково закриваємо модальне вікно при кліку на фон
    // modal.addEventListener('click', function(event) {
        // if (event.target === modal) {
            // modal.classList.remove('is-open');
        // }
    // });
  
     //закрити модальне вікно при натисканні на Esc
// window.addEventListener('keydown', (e) => {
  // if (e.key === "Escape") {
    // modal.classList.remove('is-open');
  // }
    // })



