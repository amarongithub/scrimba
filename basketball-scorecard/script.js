let homeScore = document.querySelector(".home-score");
let guestScore = document.querySelector(".guest-score");
let previousScore = document.querySelector(".previous-score");

let score = 0;

function scoreIncrement(num) {
  return (score += num);
}

function homeScoreIncrement(num) {
  homeScore.textContent = scoreIncrement(num);
}

function guestScoreIncrement(num) {
  guestScore.textContent = scoreIncrement(num);
}

function resetScore() {
  previousScore.textContent = `Previous Score - Home: ${homeScore.textContent} Guest: ${guestScore.textContent}`;
  score = 0;
  homeScore.textContent = score;
  guestScore.textContent = score;
}
