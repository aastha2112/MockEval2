import { baseUrl } from "./baseUrl.js";

let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    let res = await fetch(`${baseUrl}/users`);
    let data = await res.json();
    // console.log(data);

    let userPresent = data.filter((el) => loginForm.email.value == el.email);
    // console.log(loginForm.email.value);
    console.log(userPresent);
    if (userPresent.length > 0) {
      let checkPassword = userPresent[0].password == loginForm.password.value;
      if (checkPassword) {
        alert("Login Success, you are redirecting to quiz page");
        window.location.href = "quiz.html";
      } else {
        alert("Incorrect Password.");
      }
    } else {
      alert("Invalid Credentials!");
    }
  } catch (err) {
    alert("Something went wrong in login page");
    console.log(err);
  }
});
