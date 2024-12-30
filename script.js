const minuteLabel = document
.getElementById('minutes');
const secondLabel = document.getElementById('seconds');
const millisecondLabel = document.getElementById('milliseconds');

const startButton = document.querySelector('#startBtn');
const lapButton = document.querySelector('#lapBtn');
const pauseButton = document.querySelector('#pauseBtn');
const resetButton = document.querySelector('#resetBtn');

const lapList = document.querySelector('#laplist');

// Stopwatch variables

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let interval;
let nbrLaps = 0;

startButton.addEventListener('click', startTimer);
lapButton.addEventListener('click', lapTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer(){
    interval = setInterval(updateTimer, 10);
    startButton.disabled = true;
}

function lapTimer(){
    //displayTimer();
    addToList()
    startButton.disabled = true;

    
}

function pauseTimer(){
    clearInterval(interval);
    lapButton.disabled = true;
    startButton.disabled = false;
}

function resetTimer(){

    clearInterval(interval);
    resetData();
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

function resetData(){
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
}

function addToList(){
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(miliseconds)}`
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}`

    lapList.appendChild(listItem);
}