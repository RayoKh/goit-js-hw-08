import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
  submit: document.querySelector('button'),
};

const data = {};

refs.form.addEventListener('input', throttle(inputHandler), 500);
refs.form.addEventListener('submit', evt => {
  evt.preventDefault();

  console.log(data);
  evt.currentTarget.reset();
});

function inputHandler(evt) {
  data[evt.target.name] = evt.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// function onFormSubmit(evt) {
//   evt.preventDefault();

//   const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
//   console.log(parsedData);
//   console.log('parsedData');

//   evt.currentTarget.reset();
// }

function checkLS() {
  const isStorageEmpty = localStorage.getItem('feedback-form-state');

  if (isStorageEmpty) {
    const parsedData = JSON.parse(isStorageEmpty);
    refs.email.value = parsedData.email;
    refs.message.value = parsedData.message;
  }
}

checkLS();
