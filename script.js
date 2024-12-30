const minuteLabel = document
.getElementById('minutes');
const secondLabel = document.getElementById('seconds');
const millisecondLabel = document.getElementById('milliseconds');

const startButton = document.querySelector('#startBtn');
const stopButton = document.querySelector('#stopBtn');
const pauseButton = document.querySelector('#pauseBtn');
const resetButton = document.querySelector('#resetBtn');

// Stopwatch variables

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let interval;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer(){
    interval = setInterval(updateTimer, 10);
    startButton.disabled = true;
}

function stopTimer(){}

function pauseTimer(){
    clearInterval(interval);
    stopButton.disabled = true;
    startButton.disabled = false;
}

function resetTimer(){

    clearInterval(interval);
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    startButton.disabled = false;

    displayTimer();
}

function updateTimer(){
    miliseconds++;

    if(miliseconds === 100){
        miliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++
        }
    }

    displayTimer()
}

function displayTimer(){
    millisecondLabel.textContent = padTime(miliseconds);
    secondLabel.textContent = padTime(seconds);
    minuteLabel.textContent = padTime(minutes);
}

function padTime(time){
    return time.toString().padStart(2, '0');
}