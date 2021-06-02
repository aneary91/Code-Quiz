var startBtn = document.querySelector("#start");
var cue = document.querySelector("#cue");
startBtn.addEventListener("click", startQuiz);


var score = 0;
var penalty = 10;

var interval = 0;
var secondsLeft = 60;
var timerEl = document.querySelector("#timer");

var question = document.querySelector("#questions");
var questionOne = document.querySelector("#question1");
var questionTwo = document.querySelector("#question2");
var questionThree = document.querySelector("#question3");
var questionFour = document.querySelector("#question4");


var gameScore = document.querySelector("#game-score")
gameSccore.style.display = 'none';

var totalScoreEl = document.querySelector("#total-score");
totalScoreEl.style.display = 'none';
// var submitEl = document.querySelector("#submit");

questionOne.style.display = 'none';
questionTwo.style.display = 'none';
questionThree.style.display = 'none';
questionFour.style.display = 'none';

// var questionIndex = 0;
// 1;
// 2;
// 3;


// variable of objects and
var question1= {
    question: "How do you write an If Statement in JavaScript?",
    optionOne: "if i=5 then",
    optionTwo: "if i = 5",
    optionThree: "if i == 5 then",
    optionFour: "if (i=5) {}",
    answer: "if (i=5) {}",
},
var question2 = {
    question: "How do you create a function in JavaScipt?",
    optionOne: "function myFunction()",
    optionTwo: "function=myFunction()",
    optionThree: "fucntion:myFunction()",
    answer: "function myFunction() {}",
},
var question3 = {
    question: "Inside which HTML element do we put the JavaScript?",
    optionOne: "js Tag",
    optionTwo: "javaScriptTag",
    optionThree: "<script> Tag",
    optionFour: "scripting tag",
    answer: "<script> Tag",
},

var queston4 = {
    question: "The external JavaScript file must contain the script tag?",
    optionOne: true,
    optionTwo: false,
    answer: true,
};

var questionArray = [question1, question2, question3, question4];
index = 0

// a function to start the quiz
function startQuiz() {
  startBtn.style.display = 'none'
  prompt.style.display = 'none'
  count();
  render();
}


// 1. Create a loop that loops over your array
// 2. Try to console log the items in your array one at a time
// 3. Then try to console log the question
// 4. Then see if you can display that question

function showQuestions() {
    var myQuestionHTML = "";
    
    for (i = 0; i < jsQuestions.length; i++) {
        myQuestionHTML +=
        '<div class="questionsContainer hidden"><h2 id="quizQuestion' +
        i +
        '">Quiz Question #' +
        (i + 1) +
        "</h2><p>" +
        jsQuestions[i].question +
        "</p> <button>" +
        jsQuestions[i].optionOne +
        "</button>";
    }
    document.querySelector("allQuestions").innerHTML = myQuestionHTML;
}
showQuestions();

function setTimer() {
    if (interval ===0){
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft + "seconds left!";
        if (secondsLeft === 10) {
            alert("hurry up!");  
        }
        if (secondsLeft === 0) {
            clearInterval(timer);
            gameScore.append(gameScore)
            finish();
            timerEl.textContent = "Game Over!!"
        }
    }, 1000);
}
}

setTimer();

// startQuiz();


