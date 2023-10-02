import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const localStorageKey = "feedback-form-state";
console.log(localStorageKey);

function saveFormValue() {
    const formValue = {
        email: emailInput.value,
        message: messageInput.value,
    }
    localStorage.setItem(localStorageKey, JSON.stringify(formValue));
};
emailInput.addEventListener('input', throttle(saveFormValue, 500));
messageInput.addEventListener('input', throttle(saveFormValue, 500));

window.addEventListener('load', () => {
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) {
        const formData = JSON.parse(storedData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
      };
      console.log('Form data:', formData);
  localStorage.removeItem(localStorageKey);

  emailInput.value = '';
  messageInput.value = '';
}

)