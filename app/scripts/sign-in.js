var buttonSignIn,
  itemSignInEmail,
  itemSignInPassword,
  inputEmail,
  inputPassword;
document.addEventListener("DOMContentLoaded", function (event) {
  buttonSignIn = document.querySelector(".sign-in-form__button");
  itemSignInEmail = document.querySelector(".sign-in__email");
  itemSignInPassword = document.querySelector(".sign-in__password");
  inputEmail = document.querySelector("#email");
  inputPassword = document.querySelector("#password");
  clickButtonSignIn();
});
function clickButtonSignIn() {
  buttonSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    let emailVal = inputEmail.value;
    let passwordVal = inputPassword.value;
    let isValidateEmail = validateEmail(emailVal);
    let isValidatePassword = validatePassword(passwordVal);
    if (!isValidateEmail) {
      itemSignInEmail.classList.add("invalid");
    } else {
      itemSignInEmail.classList.remove("invalid");
    }
    if (!isValidatePassword) {
      itemSignInPassword.classList.add("invalid");
    } else {
      itemSignInPassword.classList.remove("invalid");
    }
    if (isValidateEmail && isValidatePassword) {
      window.open("../home-page.html");
    }
  });
}
