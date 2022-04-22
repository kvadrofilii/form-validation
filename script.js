'use strict';

const emailAlert = document.querySelector('#email-alert'),
  passwordAlert = document.querySelector('#password-alert'),
  checkboxAlert = document.querySelector('#checkbox-alert'),
  emailInput = document.querySelector('#email-input'),
  passwordInput = document.querySelector('#password-input'),
  checkbox = document.querySelector('#checkbox'),
  button = document.querySelector('.button'),
  inputs = document.querySelectorAll('.form__input');

let email,
  password;

button.addEventListener('click', (event) => {
  event.preventDefault();

  if (!email) {
    emailAlert.classList.add('not-email');
    emailAlert.classList.remove('invalid-email');
  } else if (!validateEmail(email)) {
    emailAlert.classList.add('invalid-email');
    emailAlert.classList.remove('not-email');
  }

  if (!password) {
    passwordAlert.classList.add('not-password');
    passwordAlert.classList.remove('invalid-password');
  } else if (password.length < 8) {
    passwordAlert.classList.add('invalid-password');
    passwordAlert.classList.remove('not-password');
  }

  if (!checkbox.checked) {
    checkboxAlert.classList.add('not-checkbox');
  } else {
    checkboxAlert.classList.remove('not-checkbox');
  }

  if (email && validateEmail(email) && password && (password.length > 7) && checkbox.checked) {
    openModal();
    inputs.forEach(item => item.value = '');
    checkbox.checked = false;
    console.log({ email, password });
  }
});

emailInput.addEventListener('input', (event) => {
  event.target.value = event.target.value.replaceAll(' ', '');
  email = event.target.value;

  if (!email) {
    emailAlert.classList.add('not-email');
    emailAlert.classList.remove('invalid-email');
  } if (!validateEmail(email)) {
    emailAlert.classList.add('invalid-email');
    emailAlert.classList.remove('not-email');
  } else {
    emailAlert.classList.remove('not-email');
  }

  if (validateEmail(email)) {
    emailAlert.classList.remove('invalid-email');
  }
});

passwordInput.addEventListener('input', (event) => {
  event.target.value = event.target.value.replaceAll(' ', '');
  password = event.target.value;

  if (!password) {
    passwordAlert.classList.add('not-password');
    passwordAlert.classList.remove('invalid-password');
  } else if (password.length < 8) {
    passwordAlert.classList.add('invalid-password');
    passwordAlert.classList.remove('not-password');
  } else {
    passwordAlert.classList.remove('invalid-password');
  }

});

checkbox.addEventListener('input', () => {
  if (!checkbox.checked) {
    checkboxAlert.classList.add('not-checkbox');
  } else {
    checkboxAlert.classList.remove('not-checkbox');
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// ---- Modal ----

const overflow = document.querySelector('.overflow'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = modal.querySelector('.modal__button');

document.addEventListener('keydown', e =>
  (e.code === 'Escape') && modal.classList.contains('.show') && closeModal()
);

modalCloseBtn.addEventListener('click', closeModal);

overflow.addEventListener('click', (e) =>
  e.target === overflow && closeModal()
);


function closeModal() {
  toggle();
  document.body.style.overflow = '';
}

function openModal() {
  toggle();
  document.body.style.overflow = 'hidden';
}

function toggle() {
  overflow.classList.toggle('show');
  modal.classList.toggle('show');
}
