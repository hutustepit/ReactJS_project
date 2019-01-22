console.log("linked created");

var timeValue = 0;
var id = 0;
var timeStarted = false;

var startButton = document.getElementById("startButton");
var resetButton = document.getElementById("resetButton");
//var stopButton = document.getElementById("stopButton");
var timer = document.getElementById("timer");

console.log(startButton);

startButton.addEventListener("click",(event) => {

    console.log("clicked");
    if(timeStarted === false){          

        event.target.innerHTML = "stop";
        ID = setInterval(() => startTimer(event.target),1000);
        console.dir(event.target);
        timeStarted = true;
    }
    else{

        stopTimer(event.target);
    }
})

resetButton.addEventListener("click", resetCronometer = () =>{

    clearInterval(ID);
    timer.innerHTML = 0;
})

function startTimer(element){

    console.log("timer started");
    timeValue +=1;
    timer.innerHTML = timeValue;

    timeStarted = true;
}

function stoptimer(element){

    
}