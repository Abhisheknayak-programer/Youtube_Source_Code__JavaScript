const form = document.querySelector(".form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const getDataBtn = document.querySelector(".outputBtn__1");
const clearBtn = document.querySelector(".outputBtn__2");
const box = document.querySelector(".box");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("name", name.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("message", message.value);

  name.value = "";
  email.value = "";
  message.value = "";
});

clearBtn.addEventListener("click", () => {
  localStorage.clear();
});

getDataBtn.addEventListener("click", () => {
  let name = localStorage.getItem("name");
  let email = localStorage.getItem("email");
  let message = localStorage.getItem("message");

  let html = `<p>My Name is ${name}, Email Id is ${email} and message is ${message} </p>`;
  box.insertAdjacentHTML("afterbegin", html);
});
