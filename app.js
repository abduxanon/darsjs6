let oralig;
let jamisecund = 0;
let tugtatish = false;

let vaqt = document.querySelector("#timer");
let startButton = document.querySelector("#start-btn");
let pauseButton = document.querySelector("#pause-btn");

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function updateTimer() {
  vaqt.textContent = formatTime(jamisecund);
}

function startTimer() {
  if (!tugtatish) {
    jamisecund--;
    updateTimer();
  }
}

function startButtonClick() {
  if (!oralig) {
    oralig = setInterval(startTimer, 100);
  }
}

function pauseButtonClick() {
  tugtatish = !tugtatish;
}

function checkTimer() {
  if (jamisecund === 0) {
    alert("Taymer 0 ga teng bo'ldi!");
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

const promptMinutes = parseInt(
  prompt("Iltimos, taymer uchun minutni kiriting:")
);
jamisecund= promptMinutes * 60;
updateTimer();

startButton.addEventListener("click", startButtonClick);
pauseButton.addEventListener("click", pauseButtonClick);
setInterval(checkTimer, 100);
