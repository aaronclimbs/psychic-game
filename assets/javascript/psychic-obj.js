let ltrInput = document
  .querySelector("#inputLetter")
  .addEventListener("keyup", getKey);
let ltrFocus = document
  .querySelector("#inputLetter")
  .addEventListener("focus", gameInstruct);
let ltrBlur = document
  .querySelector("#inputLetter")
  .addEventListener("blur", instructAway);

const gameObj = {
  // set variables and initial counts
  wins: 0,
  losses: 0,
  guessesLeft: 10,
  guessesUsed: 0,
  highScore: 0,
  guess: [],
  // grab document selectors
  winText: document.querySelector("#wins"),
  lossText: document.querySelector("#losses"),
  guessLeftText: document.querySelector("#guessesLeft"),
  guessUsedText: document.querySelector("#guessesUsed"),
  jumboText: document.querySelector("#jumboText"),
  newGameDiv: document.querySelector("#newGameDiv"),
  highScoreText: document.querySelector("#highScore")
};
