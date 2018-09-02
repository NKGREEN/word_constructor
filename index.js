//Contains logic of the game, depends on Word.js

const Word = require("./word.js");

//Introduces and explains game to user
function init() {
  pickedWords = [];
  console.log("Nothing Compares 2 Prince: Song Title Guessing Game");
  console.log("___________________________________________________");
  console.log("Guess the song title from a)song's first line and b)guessing letters");
  console.log("You have eight chances to guess the correct letters.");
  console.log("Let's play!");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  playGame();
}
//Randomly selects a word and uses the Word constructor to store it

//Prompts the user for guesses and keeps track of user's remaining guesses
