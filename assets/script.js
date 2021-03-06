/* WHEN I click the start button
THEN a timer starts and I am presented with a question

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and score */

//Declare variables
var questionsBody = document.querySelector("#questionsBody");
var playerInputScreen = document.querySelector("#playerInputScreen");
var welcomeScreen = document.querySelector("welcomeScreen");
var playerInputScreen = document.querySelector("playerInputScreen");
var highScoreScreen = document.querySelector("highScoreScreen");
var answerChoices = document.querySelector("answerChoices");
var resultP = document.querySelector("resultP");
var score = 0;
var currentQuestion = 0;
var buttonClicked = "";

var highScores = {
  firstPlace: "MN",
  secondPlace: "GG",
};

var questionArray = [
  {
    questionText: "Commonly used data types DO NOT include:",
    answersArray: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: 2,
  },
  {
    questionText:
      "The condition in an if / else statement is enclosed within ____.",
    answersArray: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    correctAnswer: 2,
  },
  {
    questionText: "Arrays in JavaScript can be used to store ____.",
    answersArray: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    correctAnswer: 3,
  },
  {
    questionText:
      "String values must be enclosed within ____ when being assigned to variables.",
    answersArray: [
      "1. commas",
      "2. curly brackets",
      "3. quotes",
      "4. parentheses",
    ],
    correctAnswer: 2,
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answersArray: [
      "1. Javascript",
      "2. terminal / bash",
      "3. for loops",
      "4. console.log",
    ],
    correctAnswer: 3,
  },
];

/* Page intialization */

function initializePage() {
  document.querySelector("#questionsBody").classList.add("none");
  document.querySelector("#playerInputScreen").classList.add("none");
  /* document.querySelector("#welcomeScreen").classList.add("none"); */
  document.querySelector("#playerInputScreen").classList.add("none");
  document.querySelector("#highScoreScreen").classList.add("none");
}
initializePage();

function firstDisappear() {
  document.querySelector("#welcomeScreen").classList.add("none");
  document.querySelector("#questionsBody").classList.remove("none");
  document.querySelector("#playerInputScreen").classList.add("none");
  document.querySelector("#highScoreScreen").classList.add("none");
}
function secondDisappear() {
  document.querySelector("#welcomeScreen").classList.add("none");
  document.querySelector("#questionsBody").classList.add("none");
  document.querySelector("#playerInputScreen").classList.remove("none");
  document.querySelector("#highScoreScreen").classList.add("none");
}
function thirdDisappear() {
  document.querySelector("#welcomeScreen").classList.add("none");
  document.querySelector("#questionsBody").classList.add("none");
  document.querySelector("#playerInputScreen").classList.add("none");
  document.querySelector("#highScoreScreen").classList.remove("none");
}

/* Click start button */

startButton.addEventListener("click", function () {
  firstDisappear();
  questionCheck();
});

function questionCheck() {

/*   console.log("question index " + questionArray[currentQuestion].questionText);*/
  /* console.log("currentQuestion" + currentQuestion); */
  console.log("buttonclicked value: " + buttonClicked);
  console.log("answer index " + questionArray[currentQuestion].correctAnswer);
  console.log("correctanswer" + questionArray[currentQuestion].correctAnswer); 
  
  if (currentQuestion > questionArray.length-1) {    
    resultP = score;
    secondDisappear();
    return;
  }

  document.querySelector("#questionHead").innerHTML =
    "<h2>" + questionArray[currentQuestion].questionText + "</h2>";
  document.querySelector("#answerOption1").innerHTML =
    questionArray[currentQuestion].answersArray[0];
  document.querySelector("#answerOption2").innerHTML =
    questionArray[currentQuestion].answersArray[1];
  document.querySelector("#answerOption3").innerHTML =
    questionArray[currentQuestion].answersArray[2];
  document.querySelector("#answerOption4").innerHTML =
    questionArray[currentQuestion].answersArray[3];
  document.querySelector("#resultP").innerHTML = "";
  
  
  if (questionArray[currentQuestion].correctAnswer === buttonClicked){
    console.log("correct");
    score++;
    console.log("score= " + score)
    buttonClicked = "";
    currentQuestion++;

  }
  else {
    console.log("wrong " + " buttonClickedvalue " + buttonClicked + " correctAnswer " + questionArray[currentQuestion].correctAnswer);
    currentQuestion++;
  }


  /*   if (
    questionArray.questionText[currentQuestion].correctAnswer === buttonClicked
  ) {
    console.log("correct");
    currentQuestion++;
    console.log(questionArray.questionText[currentQuestion]);
  } else if (
    questionArray.questionText[currentQuestion].correctAnswer != buttonClicked
  ) {
    console.log("incorrect");
    currentQuestion++;
  } else {
    console.log("error");
  } */
}


/* Logic for questions */
/* question 1 */

answerOption1.addEventListener("click", function () {
  buttonClicked = 0;
  console.log("button1");
  questionCheck();
  /* console.log(currentQuestion); */
});
answerOption2.addEventListener("click", function () {
  buttonClicked = 1;
  console.log("button2");
  questionCheck();
  /* console.log(currentQuestion); */
});
answerOption3.addEventListener("click", function () {
  buttonClicked = 2;
  console.log("button3");
  questionCheck();
  /* console.log(currentQuestion); */
});
answerOption4.addEventListener("click", function () {
  buttonClicked = 3;
  console.log("button4");
  questionCheck();
  /* console.log(currentQuestion); */
});

/* console.log(questionArray[currentQuestion].answersArray[1])
console.log(questionArray[currentQuestion].correctAnswer) */

