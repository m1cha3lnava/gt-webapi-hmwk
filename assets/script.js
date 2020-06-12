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
var instructionHeading = document.querySelector("#instructionHeading");
var questionHeading = document.querySelector("#questionHeading");
var questionPar = document.querySelector("#questionPar");
var score = 0;
var currentQuestion = 0;
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
    correctAnswer: 0,
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
    correctAnswer: 0,
  },
];

currentQuestion++;

/* questionArray[currentQuestion].questionText; */

/* Logic for questions */
for (var i = 0; i < questionArray.length; i++) {
  if (questionArray[i].answersArray[2] === questionArray[i].correctAnswer) {
    console.log("that answer is correct");
  } else {
    console.log("that answer is incorrect " + i);
  }
}

/* create space for question and answers */
/* document.querySelector("#questionPar").innerHTML =
  "<div>some other other thing</div>"; */
/* Event listeners */
