import "./style.css";

// Select the first input element
const h2Tags = document.querySelectorAll("h2");

// Used to check for NodeList [console.log(h2Tags);]
// ? is used to check for non-null objects
const firstInput = document.querySelector("#firstInput");
const secondInput = document.querySelector("#secondInput");

function changeText(event: Event, header: HTMLElement) {
  const inputElement = event.target;

  if (inputElement instanceof HTMLInputElement) {
    header.innerText = inputElement.value;
  }
}

firstInput?.addEventListener("input", (event) => changeText(event, h2Tags[0]));
secondInput?.addEventListener("input", (event) => changeText(event, h2Tags[1]));

// Select scorecards
const scorecards = document.querySelectorAll("h3");

// Select buttons
const plus1 = document.querySelector("#add1");
const plus2 = document.querySelector("#add2");
const minus1 = document.querySelector("#subtract1");
const minus2 = document.querySelector("#subtract2");

// Initialize score variables - indicate type number
var score1: number = 0;
var score2: number = 0;

// Add event listeners to buttons
plus1?.addEventListener("click", (event) => {
  if (score1 < 21) score1++;
  scorecards[0].innerText = score1.toString();
  if (score1 == 21) window.alert(`Team ${h2Tags[0].innerText} won!`);
});

plus2?.addEventListener("click", (event) => {
  if (score2 < 21) score2++;
  scorecards[1].innerText = score2.toString();
  if (score2 == 21) window.alert(`Team ${h2Tags[1].innerText} won!`);
});

minus1?.addEventListener("click", (event) => {
  if (score1 > 0) score1--;
  scorecards[0].innerText = score1.toString();
});

minus2?.addEventListener("click", (event) => {
  if (score2 > 0) score2--;
  scorecards[1].innerText = score2.toString();
});

// Select the button
const btn = document.querySelector("#resetBtn");

function resetScores(event: Event) {
  score1 = 0;
  score2 = 0;
  scorecards[0].innerText = score1.toString();
  scorecards[1].innerText = score2.toString();
}

btn?.addEventListener("click", resetScores);
