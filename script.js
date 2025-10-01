const questions = [
  {
     question: "Which language runs in a web browser?", 
     options: ["Java", "C", "Python", "JavaScript"], 
     answer: "JavaScript" 
    },
  {
   question: "What does CSS stand for?", 
   options: ["Central Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style System"], 
   answer: "Cascading Style Sheets" },
  { question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "Hyperloop Machine Language", "None"],
    answer: "HyperText Markup Language" }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
nextBtn.style.display = "none"; // Hide next button initially

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("div");
    btn.classList.add("option");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
    alert("Correct!");
  } else {
    alert(`Wrong! Correct answer: ${correct}`);
  }
  nextBtn.style.display = "block"; // Show next button after answering
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    nextBtn.style.display = "none"; // Hide next button until next question is answered
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.textContent =`Your Score: ${score} / ${questions.length}`;
}

// Initial load
loadQuestion();