const questions = [
  {
    question: "Which method is used to select an element by ID in JavaScript?",
    options: [
      "getElementByClass()",
      "querySelectorAll()",
      "getElementById()",
      "selectById()",
    ],
    correctAnswer: "getElementById()",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: "<a>",
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["font-color", "text-style", "color", "background-color"],
    correctAnswer: "color",
  },
  {
    question: "How many degrees are there in a full circle?",
    options: ["180", "360", "90", "270"],
    correctAnswer: "360",
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("anw-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIdx = 0;
let score = 0;

function startQuiz() {
  currentQuestionIdx = 0;
  score = 0;
  nextButton.innerHTML = "NEXT";
  showQuestions();
}

function showQuestions() {
  resetState();
  let currentQuestion = questions[currentQuestionIdx];
  let questionNo = currentQuestionIdx + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.options.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer;
    button.classList.add("button");
    answerButton.appendChild(button);

    if (answer == currentQuestion.correctAnswer) {
      button.dataset.correctAnswer = "true";
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";

  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correctAnswer === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correctAnswer === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

startQuiz();
