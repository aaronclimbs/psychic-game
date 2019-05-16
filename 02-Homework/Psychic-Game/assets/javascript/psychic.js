let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessesUsed = 0;
let guess;
let winText = document.querySelector("#wins");
let lossText = document.querySelector("#losses");
let guessLeftText = document.querySelector("#guessesLeft");
let guessUsedText = document.querySelector("#guessesUsed");
let jumboText = document.querySelector("#jumboText");
let ltrInput = document
  .querySelector("#inputLetter")
  .addEventListener("keyup", getKey);
let ltrFocus = document
  .querySelector("#inputLetter")
  .addEventListener("focus", gameInstruct);
let ltrBlur = document
  .querySelector("#inputLetter")
  .addEventListener("blur", instructAway);
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

function gameInstruct() {
  if (guessesLeft > 1) {
    jumboText.textContent = "Please enter a letter below!";
  } else {
    jumboText.textContent = "GAME OVER!";
  }
}

function instructAway() {
  jumboText.textContent = "";
}

function getKey(e) {
  guess = e.key;
  e.target.value = "";
  game();
}
function game() {
  if (guessesLeft > 1) {
    let targetLetter = letters[Math.floor(Math.random() * 26)];
    if (guess.toUpperCase() === targetLetter) {
      wins++;
      winText.textContent = wins;
      jumboText.textContent = "You won!";
    } else {
      losses++;
      guessesUsed++;
      guessesLeft--;
      jumboText.textContent = `OOPS! The correct guess would have been ${targetLetter}`;
      lossText.textContent = losses;
      guessUsedText.textContent = guessesUsed;
      guessLeftText.textContent = guessesLeft;
    }
  } else {
    jumboText.textContent = "GAME OVER!";
    document.querySelector("#stats").style.display = "none";
    // document.querySelector("#inputLetter").setAttribute("disabled", "");
  }
}
