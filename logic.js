//-- take a random word from an array and use it as the game word
//-- convert the word to an array
//let the player guess through a prompt
//if the guess is empty, let the player try again (do not lose a guess)
//if the guess is 1 character, match against the letters in the array
//check if the array matches the word fully now, if not decrease remainingGuesses by 1
//-- if the guess is more than 1 character, match against the entire word
//-- check if the word is correct, if not decrease remainingGuesses by 1

const wordArray = [
    "string",
    "development",
    "programming",
    "computer",
    "vscode",
    "boolean",
    "object",
    "function",
    "integer",
    "javascript",
];

let remainingGuesses = 5;
let word;
let gameIsWon = false;

const createWord = (array) => {
    return array[Math.floor(Math.random() * array.length)].split("");
};

word = createWord(wordArray);

console.log(word);
console.log(word.toString());

while (remainingGuesses > 0 && !gameIsWon) {
    let userGuess = prompt(
        `Guess a letter or the whole word, you have ${remainingGuesses} guesses left`,
    ).split("");
    console.log(userGuess);

    if (userGuess.length > 1) {
        if (userGuess.toString() === word.toString()) {
            console.log("you win");
            gameIsWon = true;
        } else {
            remainingGuesses--;
            console.log(remainingGuesses);
        }
    }
}
