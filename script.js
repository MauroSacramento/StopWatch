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

function startTimer(){}

function stopTimer(){}

function pauseTimer(){}

function resetTimer(){}