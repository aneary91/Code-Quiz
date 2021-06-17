var startBtn = document.getElementById("startBtn");
var cue = document.querySelector("#cue");
startBtn.addEventListener("click", startQuiz);

var score = 0;
var penalty = 10;

var interval;
var secondsLeft = 60;
var timerEl = document.getElementById("countdown");

var qCont = document.getElementById("questionsContainer");

var gameScore = document.querySelector("#game-score");

var optionsEl = document.getElementById("options");

var totalScoreEl = document.querySelector("#total-score");

var submitEl = document.querySelector("#submit");

// this is the list of questions and answers
var questionArray = [
  {
    question: "How do you write an If Statement in JavaScript?",
    choices: ["if i=5 then", "if i = 5", "if i == 5 then", "if (i=5) {}"],
    answer: "if (i=5) {}",
  },
  {
    question: "How do you create a function in JavaScipt?",
    choices: [
      "function myFunction()",
      "function=myFunction()",
      "function myFunction() {}",
      "function:myFunction()",
    ],
    answer: "function myFunction() {}",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["js Tag", "javaScriptTag", "<script> Tag", "scripting tag"],
    answer: "<script> Tag",
  },
  {
    question: "The external JavaScript file must contain the script tag?",
    choices: ["true", "false"],
    answer: "false",
  },
];
var myIndex = 0;

// a function to start the quiz
function startQuiz() {
    interval = setInterval(setTimer, 1000);
    var startCont = document.getElementById("startContainer");
    startCont.setAttribute("class", "hide");

    qCont.removeAttribute("class");

    showQuestions()
}
// a function to set the timer for the quiz
function setTimer() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft <= 0) {
    endGame();
    }
}

//a function to show questions and options.. the questionArray displays the first question because my index is equal to zero
function showQuestions() {
    qCont.removeAttribute('class');

  //dom element to display the question
    var showQ = document.getElementById("allQuestions");
    var presentQ = questionArray[myIndex];
  //append the question to the DOM .. its going to show the text content from the value fro mteh question key
    showQ.textContent = presentQ.question;
  //this clears the old choices theat might be displaying on the page ..
  optionsEl.innerHTML = "";

  presentQ.choices.forEach(function (index, choice) {
    //create a button for each choice in the choices array
    var optionBtn = document.createElement("button");
    optionBtn.setAttribute("class", "choiceBtn");
    optionBtn.setAttribute("value", choice);

    optionBtn.textContent = index + 1 + ". " + choice;
    optionBtn.onClick = checkAnswer();
    //append the buttons to the HTML element
    optionsEl.appendChild(optionBtn);
    });
}

function checkAnswer() {
    if (this.value !== questionsArray[myIndex].answer){
        secondsLeft -=5
    }
    //stops the timer from showing negative intergers
    if (secondsLeft <0 ){
        secondsLeft = 0;
    }
    myIndex ++
}

function endGame() {

}


function saveScore() {
    let lastName = document.getElementById("inputLastName").Value;
    console.log(lastName);
    let highScore = JSON.parse(localStorage.getItem("highScores"));
}
