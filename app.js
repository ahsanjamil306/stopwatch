

var min = 0;
var sec = 0;
var mil = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var milHeading = document.getElementById("mil-s");

var interval;
// mian timer function
function timer () {
    mil++
    milHeading.innerHTML = mil++
    if (mil >= 100){
        sec++
        secHeading.innerHTML = sec
        mil = 0;
    }
    else if (sec >= 60){
        min++
        sec = 0;
        minHeading.innerHTML = min;
    }
}

// function for start button

function start(){

    interval = setInterval(timer, 10  );
    document.getElementById("btn").disabled = true; //when start once clicked its disabled
}

// function for stop button
function stop(){

    clearInterval(interval)
    document.getElementById("btn").disabled = false; //when stop clicked start button releases
}

//function for reset button

function reset(){

   
var min = 0;
var sec = 0;
var mil = 0;
minHeading.innerHTML = min
secHeading.innerHTML = sec
milHeading.innerHTML = mil
stop();
}