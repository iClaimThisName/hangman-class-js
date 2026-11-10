//-- take a random word from an array and use it as the game word
//-- convert the word to an array
//-- let the player guess through a prompt
//-- if the guess is empty, let the player try again (do not lose a guess)
//-- if the guess is 1 character, match against the letters in the array
//-- check if the array matches the word fully now, if not decrease remainingGuesses by 1
//-- after each guess, show the status
//-- if the guess is more than 1 character, match against the entire word
//-- check if the word is correct, if not decrease remainingGuesses by 1
//-- if they've guessed the word, show win message
//-- if no guesses remain, do loss message
//allow players to try again if they lose (with a new word)
//if a 1 character guess is not a letter, let the player try again without losing a guess
//previousGuesses array, if the player guessed something they already guessed before,
//they get a little message and don't lose a guess

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
let userArray = [];
let gameIsWon = false;

const createWord = (array) => {
    return array[Math.floor(Math.random() * array.length)].split("");
};

const createUserArray = (wordLength, array) => {
    for (let i = 0; i < wordLength; i++) {
        array.push("_");
    }
};

word = createWord(wordArray);
createUserArray(word.length, userArray);

/* console.log(word);
console.log(word.toString());
console.log(userArray);
console.log(userArray.toString()); */

while (remainingGuesses > 0 && !gameIsWon) {
    let userGuess = prompt(
        `Guess a letter or the whole word, you have ${remainingGuesses} guesses left`,
    ).split("");
    console.log("You guessed: " + userGuess);

    if (!userGuess.length) {
        continue;
    }

    if (userGuess.length > 1) {
        if (userGuess.toString() === word.toString()) {
            gameIsWon = true;
            continue;
        } else {
            console.log("Ai, that wasn't quite right");
        }
    }

    if (userGuess.length === 1) {
        for (let i = 0; i < word.length; i++) {
            if (userGuess == word[i].toString()) {
                userArray[i] = userGuess;
            }
        }
    } else {
        console.log("That letter is not in the word");
    }

    if (userArray.toString() === word.toString()) {
        gameIsWon = true;
        continue;
    } else {
        console.log(userArray.toString());
        remainingGuesses--;
        console.log("You have this many guesses left: " + remainingGuesses);
    }
}

if (remainingGuesses === 0) {
    console.log("You lost... have you tried getting good?");
}

if (gameIsWon) {
    console.log(
        `You did it! The word was indeed ${word.toString()} And you had ${remainingGuesses} guesses left!`,
    );
}
