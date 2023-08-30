let homeScore = document.querySelector(".home-score");
let guestScore = document.querySelector(".guest-score");
let previousScore = document.querySelector(".previous-score");

let homeScoreInitial = 0;
let guestScoreInitial = 0;

function homeIncrement(num) {
  return (homeScoreInitial += num);
}

function guestIncrement(num) {
  return (guestScoreInitial += num);
}

function homeScoreIncrement(num) {
  homeScore.textContent = homeIncrement(num);
}

function guestScoreIncrement(num) {
  guestScore.textContent = guestIncrement(num);
}

function resetScore() {
  previousScore.textContent = `Previous Score - Home: ${homeScore.textContent} Guest: ${guestScore.textContent}`;
  homeScoreInitial = 0;
  guestScoreInitial = 0;
  homeScore.textContent = homeScoreInitial;
  guestScore.textContent = guestScoreInitial;
}
