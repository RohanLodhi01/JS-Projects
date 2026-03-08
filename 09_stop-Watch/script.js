const startButton = document.getElementById("str");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const displayTime = document.querySelector(".time-display");

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliSeconds = 0;
let isRunning = false;

let timeInterval;

function format(num) {
  return num.toString().padStart(2, "0");
}

function updateDisplay() {
  miliSeconds++;
  if (miliSeconds >= 100) {
    miliSeconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  displayTime.textContent = `${format(hours)} : ${format(minutes)} : ${format(seconds)} : ${format(miliSeconds)}`;
}
startButton.addEventListener("click", () => {
  if (!isRunning) {
    timeInterval = setInterval(updateDisplay, 10);
    isRunning = true;
  }
});

pauseButton.addEventListener("click", () => {
  clearInterval(timeInterval);
  isRunning = false;
});

resetButton.addEventListener("click", () => {
  clearInterval(timeInterval);

  minutes = 0;
  seconds = 0;
  miliSeconds = 0;
  hours = 0;

  isRunning = false;
  displayTime.textContent = `00 : 00 : 00 : 00`;
});
