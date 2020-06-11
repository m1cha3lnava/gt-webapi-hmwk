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
var highScores = {
  firstPlace: "MN",
  secondPlace: "GG",
};

var questionArray = [
  "Commonly used data types DO NOT include:",
  "The condition in an if / else statement is enclosed within ____.",
  "Arrays in JavaScript can be used to store ____.",
  "String values must be enclosed within ____ when being assigned to variables.",
  "A very useful tool used during development and debugging for printing content to the debugger is:",
];

var answerArray = [
  "1. strings",
  "2. booleans",
  "3. alerts",
  "4. numbers",
  "1. quotes",
  "2. curly brackets",
  "3. parentheses",
  "4. square brackets",
  "1. numbers and strings",
  "2. other arrays",
  "3. booleans",
  "4. all of the above",
  "1. commas",
  "2. curly brackets",
  "3. quotes",
  "4. parentheses",
  "1. Javascript",
  "2. terminal / bash",
  "3. for loops",
  "4. console.log",
];
