var startBtn = document.querySelector("#start");
var cue = document.querySelector("#cue");
startBtn.addEventListener("click", startQuiz);


var score = 0;
var penalty = 10;

var interval ;
var secondsLeft = 60;
var timerEl = document.querySelector("#timer");

var question = document.querySelector("#questions");
var question1OneEl = document.querySelector("#question1");
var question2TwoEl = document.querySelector("#question2");
var question3ThreeEl = document.querySelector("#question3");
var question4FourEl = document.querySelector("#question4");


var gameScore = document.querySelector("#game-score")
gameSccore.style.display = 'none';

var totalScoreEl = document.querySelector("#total-score");
totalScoreEl.style.display = 'none';
var submitEl = document.querySelector("#submit");

// question1OneEl.style.display = 'none';
// question2TwoEl.style.display = 'none';
// question3ThreeEl.style.display = 'none';
// question4FourEl.style.display = 'none';

// var questionIndex = 0;
// 1;
// 2;
// 3;


// this is the list of questions and answers 
var question1El= {
    question: "How do you write an If Statement in JavaScript?",
    option1El: "if i=5 then",
    option2El: "if i = 5",
    option3El: "if i == 5 then",
    option4El: "if (i=5) {}",
    answer: "if (i=5) {}",
},
var question2El = {
    question: "How do you create a function in JavaScipt?",
    option1El: "function myFunction()",
    option2El: "function=myFunction()",
    option3El: "fucntion:myFunction()",
    answer: "function myFunction() {}",
},
var question3El = {
    question: "Inside which HTML element do we put the JavaScript?",
    option1El: "js Tag",
    option2El: "javaScriptTag",
    option3El: "<script> Tag",
    option4El: "scripting tag",
    answer: "<script> Tag",
},

var question4El = {
    question: "The external JavaScript file must contain the script tag?",
    option1El: 'true',
    option2El: 'false',
    answer: 'false',
};

var questionArray = [question1El, question2El, question3El, question4El];
var myIndex = 0

// a function to start the quiz
function startQuiz() {
    startBtn.style.display = "none";
        prompt.style.display = 'none'
    count();
    showQuestions();
}
// a function to set the timer for the quiz
function setTimer() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft <= 0 ){
        endGame()
    }
}

function showQuestions() {
    question.style.display = 'block';
    questionOneEl.style.display = 'table-row';
    questionTwoEl.style.display = 'table-row';
    questionThreeEl.style.display = 'table-row';
    questionFourEl.style.display = 'table-row';

        if (myIndex < questions.length){
            question.textContent = questionArray[myIndex].question;
            question1El.textContent = questionArray[myIndex].question1;
            question2El.textContent = questionArray[myIndex].question2;
            question3El.textcontent = questionArray[myIndex].question3;
            question4El.textcontent = questionArray[myIndex].question4;
            answer = questions[myIndex].answer;
            
            if (secondsLeft === 0) {
                question1El.onclick = function () {
                    if(questionArray[myIndex].questionOneEl == answer){
                        gameScore++;
                        myIndex++;
                        showQuestions()
                    } else {
                        secondsLeft = secondsLeft - 10
                    }
                }
                question2El.onclick = function () {
                    if(questionArray[myIndex].questionTwoEl == answer){
                        gameScore++;
                        myIndex++;
                        showQuestions()
                    } else {
                        secondsLeft = secondsLeft - 10
                    }
                }
                question3El.onclick = function () {
                    if(questionArray[myIndex].questionThreeEl == answer){
                        gameScore++;
                        myIndex++;
                        showQuestions()
                    } else {
                        secondsLeft = secondsLeft - 10
                    }
                }
                question4El.onclick = function () {
                    if(questionArray[myIndex].questionFourEl == answer){
                        gameScore++;
                        myIndex++;
                        showQuestions()
                    } else {
                        secondsLeft = secondsLeft - 10
                    }
                }
            }
        } else {
            console.log("Congrats on Completing this Quiz!")
            currentTime = 0
            finalScore.append(score)
            endGame()
        }
    }
    function endGame() {
        question.style.display = 'none';
        option1El.style.display = 'none';
        option2El.style.display = 'none';
        option3El.style.display = 'none';
        option4El.style.display = 'none';
    }

    function saveScore() {
        let lastName = document.getElementById('inputLastName').Value;
        console.log(lastName)
        let highScore = JSON.parse(localStorage.getItem('highScores'))

    }







