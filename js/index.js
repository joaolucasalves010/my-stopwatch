const hourElement = document.querySelector("#hourElement span")
const minutesElement = document.querySelector("#minutesElement span")
const secondsElement = document.querySelector("#secondsElement span")
const play = document.querySelector("#play")
const pause = document.querySelector("#pause")
const restart = document.querySelector("#restart")

let intervalId;

let hours = 0
let minutes = 0
let seconds = 0

function playStopwatch() {
  play.style.display = "none"
  pause.style.display = "inline-block"
  
  intervalId = setInterval(() => {
    seconds += 1
    if (seconds == 60) {
      minutes += 1
      seconds = 0 
    } 
    if (minutes == 60) {
      hours += 1
      minutes = 0
    }

    secondsElement.textContent = String(seconds).padStart(2, '0')
    minutesElement.textContent = String(minutes).padStart(2, '0')
    hourElement.textContent = String(hours).padStart(2, '0')
  }, 1000);


}

function pauseStopwatch() {
  clearInterval(intervalId)
  play.style.display = "inline-block"
  pause.style.display = "none"
}

function restartStopwatch() {
  play.style.display = "inline-block"
  pause.style.display = "none"
  clearInterval(intervalId)
  hours = 0
  minutes = 0
  seconds = 0
  secondsElement.textContent = String(seconds).padStart(2, '0')
  minutesElement.textContent = String(minutes).padStart(2, '0')
  hourElement.textContent = String(hours).padStart(2, '0')
}

play.addEventListener("click", playStopwatch)
pause.addEventListener("click", pauseStopwatch)
restart.addEventListener("click", restartStopwatch)