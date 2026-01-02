const timeEl = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;
let running = false;

function updateTime(){
  seconds++;
  if(seconds === 60){
    seconds = 0;
    minutes++;
  }
  if(minutes === 60){
    minutes = 0;
    hours++;
  }

  const displayHours = hours < 10 ? `0${hours}` : hours;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  timeEl.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

startBtn.addEventListener('click', ()=>{
  if(!running){
    interval = setInterval(updateTime,1000);
    running = true;
  }
});

stopBtn.addEventListener('click', ()=>{
  clearInterval(interval);
  running = false;
});

resetBtn.addEventListener('click', ()=>{
  clearInterval(interval);
  running = false;
  seconds=0; minutes=0; hours=0;
  timeEl.textContent = '00:00:00';
});

