const questions = [
  {
    question: "Какой язык работает в браузере?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 4,
  },
  {
    question: "Что означает CSS?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: 2,
  },
  {
    question: "Что означает HTML?",
    answers: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: 1,
  },
  {
    question: "В каком году был создан JavaScript?",
    answers: ["1996", "1995", "1994", "все ответы неверные"],
    correct: 2,
  },
];

// Search elements
const headerContainer = document.querySelector("#header");
const listContainer = document.querySelector("#list");
const submitBtn = document.querySelector("#submit");

// game variables
let score = 0; // right aswers quantity
let questionIndex = 0; // current question

clearPage();
showQuestion();

submitBtn.onclick = checkAnswer;

// clear html
function clearPage() {
  headerContainer.innerHTML = "";
  listContainer.innerHTML = "";
}

function showQuestion() {
  if (!questions[questionIndex]) return;
  const { question, answers } = questions[questionIndex];
  const titleMarkup = `<h2 class="title">${question}</h2>`;

  headerContainer.innerHTML = titleMarkup;

  const answersMarkup = answers.reduce((elementMarkup, answer, index) => {
    elementMarkup += `<li>
						<label>
							<input type="radio" class="answer" name="answer" value="${index + 1}"/>
							<span>${answer}</span>
							</label>
						</li>`;
    return elementMarkup;
  }, "");

  listContainer.innerHTML = answersMarkup;
}

function checkAnswer() {
  const checkedRadio = listContainer.querySelector(
    'input[type="radio"]:checked'
  );
  if (!checkedRadio) {
    submitBtn.blur();
    console.log("Choose your answer!");
    return;
  }

  const userAnswer = parseInt(checkedRadio.value);
  const { correct: correctAnswer } = questions[questionIndex];
  if (userAnswer === correctAnswer) {
    score += 1;
  }

  questionIndex += 1;
  clearPage();
  showQuestion();

  if (questionIndex === questions.length) {
    showResults();
    questionIndex = 0;
  }
}

function showResults() {
  let title, message;

  const qNum = questions.length;

  if (score === qNum) {
    title = "Congrats!";
    message = "You have 100% right answers! ";
  } else if ((score * 100) / qNum >= 50) {
    title = "Good job!";
    message = "You have more than a half right questions.";
  } else {
    title = "Go HOme and Learn!";
    message = "You have got too low result";
  }

  let result = `${score} of ${qNum}`;

  const finalMessage = ` <h2 class="title">${title}</h2>
        <h3 class="summary">${message}</h3>
        <p class="result">${result}</p>`;

  headerContainer.innerHTML = finalMessage;

  submitBtn.blur();
  submitBtn.innerText = "Start again";
  submitBtn.onclick = () => history.go();
}
