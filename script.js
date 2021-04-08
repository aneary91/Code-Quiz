var timerEl = document.querySelector(".timer");
var startBtn = document.getElementById("#startBtn");
var secondsLeft = 10;


// variables to grab DOM elements

var questionNumEl = document.getElementById("questionNumber")
var questionEl = document.getElementById(quizQuestionEl);
var questionElOneEl = document.getElementById("question1");
var questionElTwoEl = document.getElementById("question2");
var questionElThreeEl = document.getElementById("question3");
var questionElFourEl = document.getElementById("question4");
var quizStartEl = document.querySelector(".codeQuizStart");


var questionIndex = 0; 1; 2; 3;

// variable of objects and 
var jsQuestions = [
    {
        qNum1: 
        quote: "How do you write an If Statement in JavaScript?"
        choices: ["if i=5 then", "if i = 5", "if i == 5 then", "if (i=5)"]
        answer: "if (i-5) {}"

        qNum2:
        quote: "How do you create a function in JavaScipt?"
        choices: ["function myFunction()", "function=myFunction()", "fucntion:myFunction()" ]
        answer: "function myFunction() {}"
    }

]

function setTimer(){


    timerInterval = setInterval(funtion(){
        secondsLeft--;
        timerEl.textContent = countDown + "secondsLeft"
            if (countDown === 0) {
                

            }

    },1000)
}

function startQuiz() {
    startBtn.addEventListener("click", function(event){
         clearInterval(timerInterval);
            countDown - 10;
            setTimer();

            // hide the quizStartElcontainer after the start button is pressed
            quizStartEl.setAttribute("class", "hidden");
}


})