{
  /* <div class="alert"> 
        <div class="alert__icon"> <i class="fas fa-check-circle"></i></div>
        <div class="alert__content"> <span class="alert__title">Hệ thống</span><span class="alert__desc">Đổ xăng hoàn tất </span></div>
      </div> */
}

function alertSuccess(text = "", time = TIME_ALERT) {
  let divWrapper = document.querySelector(".wrapper");
  let divAlert = document.createElement("div");
  divAlert.classList.add("alert");
  divAlert.classList.add("alert--success");
  divAlert.innerHTML = `<div class="alert__icon"> <i class="fas fa-check-circle"></i></div>
    <div class="alert__content"> <span class="alert__title">Hệ thống</span><span class="alert__desc">${text}</span></div>`;
  divWrapper.appendChild(divAlert);
  setTimeout(() => {
    divWrapper.removeChild(divAlert);
  }, time);
}

function alertWarning(text = "", time = TIME_ALERT) {
  let divWrapper = document.querySelector(".wrapper");
  let divAlert = document.createElement("div");
  divAlert.classList.add("alert");
  divAlert.classList.add("alert--warning");
  divAlert.innerHTML = `<div class="alert__icon"> <i class="fas fa-check-circle"></i></div>
      <div class="alert__content"> <span class="alert__title">Hệ thống</span><span class="alert__desc">${text}</span></div>`;
  divWrapper.appendChild(divAlert);
  setTimeout(() => {
    divWrapper.removeChild(divAlert);
  }, time);
}
