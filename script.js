var timerEl = document.querySelector(".timer");
var startBtn = document.getElementById("#startBtn");
var secondsLeft = 10;

function setTimer(){


    timerInterval = setInterval(funtion(){
        secondsLeft--;
        timerEl.textContent = countDown + "secondsLeft"
            if (countDown === 0) {
                

            }

    },1000)
}

    startBtn.addEventListener("click", function(event){
        clearInterval(timerInterval);
        countDown - 10;
        setTimer();


})