const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#password + span.error');
const confirmedPassword = document.getElementById('confirm-password');
const confirmedPasswordError = document.querySelector(
  '#confirm-password + span.error'
);
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  if (
    isEmpty(firstName) ||
    isEmpty(lastName) ||
    isEmpty(email) ||
    isEmpty(phone) ||
    isEmpty(password) ||
    isEmpty(confirmedPassword) ||
    validatePassword() ||
    validateConfirmedPassword()
  ) {
  }

  event.preventDefault();
});

confirmedPassword.addEventListener('input', (e) => {
  isEmpty(e.target);
  validateConfirmedPassword();
});

password.addEventListener('input', (e) => {
  isEmpty(e.target);
  validatePassword();
  validateConfirmedPassword();
});

firstName.addEventListener('input', function (event) {
  isEmpty(event.target);
});

lastName.addEventListener('input', function (event) {
  isEmpty(event.target);
});

email.addEventListener('focusout', (e) => {
  if (!/(.+)@(.+){2,}\.(.+){2,}/.test(email.value)) {
    if (email.value !== '') {
      email.nextElementSibling.textContent =
        'Wrong format of the email. Ex. you@example.com';
    }
  } else {
    email.nextElementSibling.textContent = '';
  }
});

email.addEventListener('input', (e) => {
  isEmpty(e.target);
});

phone.addEventListener('focusout', (e) => {
  if (
    (phone.value.length !== 10 || !phone.value.match(/\d/g))) {
        if (phone.value !== '') {
    phone.nextElementSibling.textContent =
      'Must be 10 characters phone number.';}
  } else {
    phone.nextElementSibling.textContent = '';
  }
});

phone.addEventListener('input', (e) => {
  isEmpty(e.target);
});

function isEmpty(input) {
  let inputError = input.nextElementSibling;

  if (input.value === '') {
    inputError.textContent = 'Please fill out this field.';
    return false;
  }

  if (inputError.textContent == 'Please fill out this field.') {
    inputError.textContent = '';
  }

  return true;
}

function validatePassword() {
  let p = password.value;
  let errors = [];

  if (p.length === 0) {
    return false;
  }

  if (p.length < 8) {
    errors.push('Must be at least 8 characters.');
  }

  if (p.search(/[A-Z]/) < 0) {
    errors.push('Must contain at least one CAPITAL letter.');
  }

  if (p.search(/[0-9]/) < 0) {
    errors.push('Must contain at least one digit.');
  }

  if (errors.length > 0) {
    passwordError.textContent = errors.join('\n');
    return false;
  }

  passwordError.textContent = '';
  return true;
}

function validateConfirmedPassword() {
  if (confirmedPassword.value === '') {
    return false;
  }

  if (confirmedPassword.value !== password.value) {
    confirmedPasswordError.textContent = 'Passwords do not match';
    return false;
  }

  confirmedPasswordError.textContent = '';
  return true;
}
