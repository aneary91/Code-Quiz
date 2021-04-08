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
        
        
   {
        question: "How do you write an If Statement in JavaScript?"
        optionOne: "if i=5 then",
        optionTwo: "if i = 5",
        optionThree: "if i == 5 then",
        optionFour: "if (i=5) {}";
        answer: "if (i=5) {}"
 }
 {
            question: "How do you create a function in JavaScipt?",
            optionOne: "function myFunction()",
            optionTwo: "function=myFunction()",
            optionThree: "fucntion:myFunction()",
            answer: ["function myFunction() {}"]
 }
 {
            question: "Inside which HTML element do we put the JavaScript?",
            optionOne: "js Tag",
            optionTwo: "javaScriptTag",
            optionThree: "scriptTag",
            optionFour: "scripting tag"
         }

        {
            question: "The external JavaScript file must contain the script tag?"
            optionOne: true,
            optionTwo: false,

          }

]

console.log(choices.qNum1);


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