const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const buttonUser = document.querySelector('#button-user');

function validateUser() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonUser.addEventListener('click', validateUser);

/* window.onload = function load() {
  //
}; */
