// variable to keep track of quiz state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;

//HTML elements;
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choiceElement = document.getElementById("choices");