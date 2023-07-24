import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
  submit: document.querySelector('button'),
};

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

checkLS();
const data = {};

refs.form.addEventListener('input', throttle(inputHandler), 500);
refs.form.addEventListener('submit', evt => {
  evt.preventDefault();

  const feedback = {
    email: input.value,
    message: textarea.value,
  };

  console.log(feedback);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
});

function inputHandler(evt) {
  const feedback = {
    email: input.value,
    message: textarea.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
}

function checkLS() {
  const isStorageEmpty = localStorage.getItem('feedback-form-state');

  if (isStorageEmpty) {
    const parsedData = JSON.parse(isStorageEmpty);
    refs.email.value = parsedData.email;
    refs.message.value = parsedData.message;
  }
}
