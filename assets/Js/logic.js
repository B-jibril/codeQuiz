// variable to keep track of quiz state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;

//HTML elements;
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choiceElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedBackElement = document.getElementById("feedback");

// the audio sound for  correct and incorrect
let sfxRight = new Audio("assets/sfx/correct.wav");
let sfxWrong = new Audio("assets/sfx/incorrect.wav");


// add the functions 

function getQuestion() {

}

function questionClick() {

}

function startQuiz() {
    alert("hi")
}

function quizEnd() {

}

function clockTick() {

}

function saveHighScore() {

}

function checkForEnter(Event) {

}

startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", saveHighScore);
initialElement.addEventListener("keyup", checkForEnter);