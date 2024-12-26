function navbar() {
  let nav = document.getElementById("nav");
  let navLinks = ` <h2 class="logo">Quiz App</h2>
      <div class="navLinks">
        <a href="./index.html">Home</a>
        <a href="./quiz.html">Quiz</a>
        <a href="./questions.html">Questions</a>
      </div>`;
  nav.innerHTML = navLinks;
}

navbar();
