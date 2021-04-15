var timerEl = document.querySelector(".timer");
var startBtn = document.getElementById("#startBtn");
var secondsLeft = 60;


// variables to grab DOM elements

var questionNumEl = document.getElementById("questionNumber");
var questionEl = document.getElementById("quizQuestionEl");
var questionElOneEl = document.getElementById("question1");
var questionElTwoEl = document.getElementById("question2");
var questionElThreeEl = document.getElementById("question3");
var questionElFourEl = document.getElementById("question4");
var quizStartEl = document.querySelector(".codeQuizStart");


var questionIndex = 0; 1; 2; 3;

// 1. Create a loop that loops over your array
// 2. Try to console log the items in your array one at a time
// 3. Then try to console log the question
// 4. Then see if you can display that question


// variable of objects and 
var jsQuestions = [
    {
         question: "How do you write an If Statement in JavaScript?",
         optionOne: "if i=5 then",
         optionTwo: "if i = 5",
         optionThree: "if i == 5 then",
         optionFour: "if (i=5) {}",
         answer: "if (i=5) {}"
        },
        {
            question: "How do you create a function in JavaScipt?",
            optionOne: "function myFunction()",
         optionTwo: "function=myFunction()",
         optionThree: "fucntion:myFunction()",
         answer: ["function myFunction() {}"]
        }, 
        {
            question: "Inside which HTML element do we put the JavaScript?",
            optionOne: "js Tag",
         optionTwo: "javaScriptTag",
         optionThree: "<script> Tag",
         optionFour: "scripting tag",
         answer: "<script> Tag"
        },
        
        {
            question: "The external JavaScript file must contain the script tag?",
            optionOne: true,
            optionTwo: false,
            answer: ""
        }
        
    ]

    function showQuestions() {
        var  myQuestionHTML = "";

        for (i = 0; i < jsQuestions.length; i++) {
            myQuestionHTML+='<div class="questionsContainer hidden"><h2 id="quizQuestion'+i+'">Quiz Question #'+(i+1)+'</h2><p>'+jsQuestions[i].question+'</p> <button>'+jsQuestions[i].optionOne+'</button>';

        }
           document.getElementById("allQuestions").innerHTML = myQuestionHTML; 
     }
        showQuestions();

    
    function setTimer(){
 
    timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left!"; 
            if (secondsLeft === 10) {
                alert("hurry up!");
            }

    }, 1000);
}
setTimer();


function startQuiz() {
    startBtn.addEventListener("click", function() {
         clearInterval(timerInterval);
            countDown - 10;
            setTimer();
    
            
            // hide the quizStartElcontainer after the start button is pressed
            quizStartEl.setAttribute("class", "hidden");
    }, 1000);
}
