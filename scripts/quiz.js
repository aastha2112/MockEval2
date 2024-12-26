import { baseUrl } from "./baseUrl.js";

let quizForm = document.getElementById("quizForm");

quizForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    let quesObj = {
      question: quizForm.question.value,
      options: {
        a: quizForm.optionA.value,
        b: quizForm.optionB.value,
        c: quizForm.optionC.value,
        d: quizForm.optionD.value,
      },
      correctAnswer: quizForm.correctOption.value,
    };
    // console.log(quizForm.question.value);
    let res = await fetch(`${baseUrl}/questions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(quesObj),
    });
    console.log(quesObj);
    alert("Question Created");
    quizForm.reset();
  } catch (err) {
    alert("Something went wrong in Quiz.");
    console.log(err);
  }
});

let loadBtn = document.getElementById("loadBtn");
let quesCont = document.getElementById("quesCont");

loadBtn.addEventListener("click", async () => {
  try {
    let res = await fetch(`${baseUrl}/questions`);
    let data = await res.json();

    data.map((el) => {
      let card = ` <div class="card">
        <h2>Q: ${el.question}</h2>
        <ul>
        <li>A. ${el.options.a}</li>
        <li>B. ${el.options.b}</li>   
        <li>C. ${el.options.c}</li>
        <li>D. ${el.options.d}</li>
        </ul>
      </div>`;
      quesCont.innerHTML = card;
      let reviewBtn = document.createElement("button");
      let deleteBtn = document.createElement("button");
      reviewBtn.textContent = "Review";
      deleteBtn.textContent = "Delete";
    });
  } catch (err) {
    alert("Unable to load questions.");
    console.log(err);
  }
});
// function displayQues(el) {}
