var buttonSignIn,
  itemSignInEmail,
  itemSignInPassword,
  inputEmail,
  inputPassword;
start();
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
      let data = {
        username: emailVal,
        password: passwordVal,
      };
      login(data, (result) => {
        if (result.responseData) {
          localStorage.setItem(CONFIG_USERNAME, emailVal);
          localStorage.setItem(CONFIG_PASSWORD, passwordVal);
          window.location.href = "home-page.html";
        } else {
          alert(result.error.message);
        }
      });
    }
  });
}
function start() {
  let data = {
    username: localStorage.getItem(CONFIG_USERNAME),
    password: localStorage.getItem(CONFIG_PASSWORD),
  };
  if (data && data.username && data.password) {
    login(data, (result) => {
      if (result.responseData) {
        window.location.href = "home-page.html";
      }
    });
  }
}
