

const form  = document.getElementsByTagName('form')[0];

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

password.addEventListener("input", function (event) {
    console.log('FART');
    confirmPassword.pattern = this.value;
});

confirmPassword.addEventListener("input", function (event) {
    if (confirmPassword.validity.patternMismatch) {
        confirmPassword.setCustomValidity("Please type the same password for both fields");
        confirmPassword.reportValidity();
    } else {
        confirmPassword.setCustomValidity("");
    }
});