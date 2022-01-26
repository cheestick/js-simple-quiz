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

// clear html
function clearPage() {
  headerContainer.innerHTML = "";
  listContainer.innerHTML = "";
}

function showQuestion() {
  const { question, answers } = questions[questionIndex];
  const titleMarkup = `<h2 class="title">${question}</h2>`;

  headerContainer.innerHTML = titleMarkup;

  // answers
  const answersMarkup = answers.reduce((elementMarkup, answer) => {
    elementMarkup += `<li>
						<label>
							<input type="radio" class="answer" name="answer" />
							<span>${answer}</span>
							</label>
						</li>`;
    return elementMarkup;
  }, "");

  listContainer.innerHTML = answersMarkup;
}
