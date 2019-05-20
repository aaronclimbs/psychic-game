// declare variables and set initial counts
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessesUsed = 0;
let highScore = 0;
let guess;

// grab IDs
let winText = document.querySelector("#wins");
let lossText = document.querySelector("#losses");
let guessLeftText = document.querySelector("#guessesLeft");
let guessUsedText = document.querySelector("#guessesUsed");
let jumboText = document.querySelector("#jumboText");
let newGameDiv = document.querySelector("#newGameDiv");
let highScoreText = document.querySelector("#highScore");

// set event listeners
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
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

function gameInstruct() {
  if (guessesLeft > 1) {
    // display instructions
    jumboText.textContent = "Please enter a letter below!";
  } else {
    // additional text when game over and box is clicked
    jumboText.textContent = "GAME OVER!";
  }
}

function gameReset() {
  wins = 0;
  losses = 0;
  guessesLeft = 10;
  guessesUsed = 0;
  winText.textContent = wins;
  lossText.textContent = losses;
  guessUsedText.textContent = guessesUsed;
  guessLeftText.textContent = guessesLeft;
  document.querySelector("#stats").style.display = "block";
  document.querySelector("#inputLetter").removeAttribute("disabled");
  jumboText.textContent = "Please enter a letter below!";
}

function createButton() {
  // create new game button
  const newButton = document.createElement("button");
  newButton.classList = "btn btn-block btn-primary mt-3";
  newButton.id = "newGame";
  newButton.appendChild(document.createTextNode("New Game"));
  newGameDiv.append(newButton);
  document.querySelector("#newGame").addEventListener("click", newGame);
}

function newGame(e) {
  newGameDiv.removeChild(e.target);
  gameReset();
}

function instructAway() {
  // no real function - just looks nice
  if (guessesLeft > 1) {
    jumboText.textContent = "";
  } else {
    jumboText.textContent = "GAME OVER!";
  }
}

function getKey(e) {
  guess = e.key;
  e.target.value = "";
  // validate input as lowercase letter
  if (guess.charCodeAt() > 96 && guess.charCodeAt() < 123) {
    game();
  } else {
    // message to user
    jumboText.textContent = "Please enter a lowercase letter to continue.";
  }
}

// Game code
function game() {
  // Check if have guesses left
  if (guessesLeft > 0) {
    // Assign random letter
    targetLetter = letters[Math.floor(Math.random() * 26)];
    // check if win
    if (guess.toLowerCase() === targetLetter) {
      // update counts and jumbotron text
      wins++;
      if (highScore < wins) {
        highScore = wins;
      }
      winText.textContent = wins;
      highScoreText.textContent = highScore;
      jumboText.textContent = "You won!";
    } else {
      // if loss, update counts and jumbotron text
      losses++;
      guessesUsed++;
      guessesLeft--;
      jumboText.textContent = `OOPS! The correct guess would have been "${targetLetter.toLowerCase()}"`;
      lossText.textContent = losses;
      guessUsedText.textContent = guessesUsed;
      guessLeftText.textContent = guessesLeft;
    }
    // end game
  } else {
    jumboText.textContent = "GAME OVER!";
    document.querySelector("#stats").style.display = "none";
    createButton();
    document.querySelector("#inputLetter").setAttribute("disabled", "");
  }
}
