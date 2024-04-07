let timerInterval;
let totalSeconds = 0;
let isPaused = false;

const vaqt = document.querySelector("#timer");
const startButton = document.querySelector("#start-btn");
const pauseButton = document.querySelector("#pause-btn");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function updateTimer() {
  vaqt.textContent = formatTime(totalSeconds);
}

function startTimer() {
  if (!isPaused) {
    totalSeconds--;
    updateTimer();
  }
}

function startButtonClick() {
  if (!timerInterval) {
    timerInterval = setInterval(startTimer, 100);
  }
}

function pauseButtonClick() {
  isPaused = !isPaused;
}

function checkTimer() {
  if (totalSeconds === 0) {
    alert("Taymer 0 ga teng bo'ldi!");
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

const promptMinutes = parseInt(
  prompt("Iltimos, taymer uchun minutni kiriting:")
);
totalSeconds = promptMinutes * 60;
updateTimer();

startButton.addEventListener("click", startButtonClick);
pauseButton.addEventListener("click", pauseButtonClick);
setInterval(checkTimer, 100);
