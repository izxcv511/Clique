function validateEmail(email) {
  return regexEmail.test(String(email).toLowerCase());
}
function validatePassword(password) {
  return regexPassword.test(password);
}
