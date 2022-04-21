'use strict';

const emailAlert = document.getElementById('email-alert');
const passwordAlert = document.getElementById('password-alert');
const checkboxAlert = document.getElementById('checkbox-alert');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const checkbox = document.getElementById('checkbox');
const button = document.querySelector('.button');

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
