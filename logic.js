//Hangman is agame where a user ned to guess a word, before guessing a word he/she canbguees letters. 
// the users has 5 attenots. if the user gueses right and within the attenpts wins, otherwsue looses.




//1. making the logic where from array we extract a random word
const possibleWords= ["Camel","Candy", "Colombia", "Andalusia", "Naruto"];
// lengt is 5 and indexes0.     1.         2           3.          4

let machinedChoosenIndex= Math.floor(Math.random() * possibleWords.length)
console.log(`Random word index is ${machinedChoosenIndex}`)

let machinedChoosenWord= possibleWords[machinedChoosenIndex]

console.log(`Random  WORD is ${machinedChoosenWord}`)

let choosenWordArray = machinedChoosenWord.split("")

console.log(choosenWordArray)


/*i guesse O in colobia

loop trhough machined word 
1st is this letter presen, hor mnay timens and where

O matches the word at index 1 and 4


_O_O___*/





//step 2 user can eityher guess a letter or direclty word
//for simplicit attenpt-1 either if there is not letter or if the word guessed is worng

//step 3 gameply logic where for each iteration we check if the condition for winnin or loosing are valid

/////////Complexitiy in game= string array manipoulation, 3.1 machine word, must be put as an array where eache letter is 
// from Camel as a string to [C,A,M,E,L]











/*check only string way to do hangman
for (let letters of machinedChoosenWord) {
    console.log(letters)
    console.log(typeof(letters))
}*/









/*SCOPE

let scope= "Yo, I am global"

function scopeFunction () {
     scope= "Nope, I am in local SCOPE"
    
     if (false) {
        
        let scope= "Nope, I am in BLOCK SCOPE"
        
     }

}
console.log(scope)
scopeFunction()
console.log(scope)



*/
/*function sumNmbers (num1,num2) {
 num1+num2  
}

const checkVictory= (guesseNumber) => {
    if (guesseNumber===4) {
        return true
    }
}
 if (checkVictory(4)) {
    alert("congratulation you won the game")
 }


function sumNmbers (num1,num2) {
return num1+num2 //on return key word  more later
 
}
console.log(sumNmbers(5,7))

const arrowSumNumbers = (num1, num2) => {
    console.log(num1+num2)
    return num1+num2
}

arrowSumNumbers(3,2)

const myFavouriteNarutCh = character1 => {
    console.log(`I like ${character1}`)
}
myFavouriteNarutCh("Sasuke")

for (i=0; i<=10; i++ ) {
    myFavouriteNarutCh("Sasuke")
}*/



