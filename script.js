const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const buttonUser = document.querySelector('#button-user');
const imageConsent = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');

function validateUser() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonUser.addEventListener('click', validateUser);

function conditionSubmit() {
  if (imageConsent.checked) {
    submit.disabled = false;
  }
}

window.onload = function load() {
  imageConsent.addEventListener('click', conditionSubmit);
};
