let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessesUsed = 0;
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

const randomLetter = () => Math.floor(Math.random() * 26);

let targetLetter = letters[randomLetter()];

function game() {
  for (let i = 0; i < guessesLeft; i++) {
    let guess = prompt("What letter?");
    console.log(guessesUsed);
    if (String.toString(guess) === targetLetter) {
      wins++;
      alert("You won!");
      break;
    } else {
      guessesUsed++;
      alert("Try again!");
    }
  }
}

alert("guesses used up!");
