let nameError = document.getElementById('name-error')
let phoneError = document.getElementById('phone-error')
let emailError = document.getElementById('email-error')
let messageError = document.getElementById('message-error')
let submitError = document.getElementById('submit-error')

function validateName() {
    let name = document.getElementById('contact-name').value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = 'valid';
    return true;
}
function validatePhone() {
    let phone = document.getElementById('contact-phone').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'phone is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'phone no shuld be 10 digit';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'only digits please.';
        return false;
    }
    phoneError.innerHTML = 'valid';
    return true;
}

function validateEmail() {
    let email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = 'valid';
    return true;
}

function validateMessage() {
    let msg = document.getElementById('contact-message').value;
    let required = 30;
    let left = required - msg.length;

    if (left > 0) {
        messageError.innerHTML = left + 'more char required';
        return false;
    }
    messageError.innerHTML = 'done';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error'
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }


}

