// A classic game of rock, paper, scissors
var prompt = require('prompt-sync')()

let choice = '';
let roll = '';
let userInput = '';

class Game {

    constructor() {
        this.computerInput = 0;
        this.userInput = 0;
        // Key: 0 - Rock, 1 - Paper, 2 - Scissors
    }


    generateRandNo() {
        let randNo = Math.floor(Math.random() * 3);
        this.computerInput = randNo;
        return randNo;
    }

// Generate a random integer between 0 and 2.  
// Each number represents either rock, paper or scissors - check against key.
// Return the randomly generated integer, store this as computerInput



userMove() {
    let input = prompt('Rock, paper, scissors?');

    if (input == 'ROCK') {
        this.userInput = 0
        return this.userInput
    }
    else if (input == 'PAPER') {
        this.userInput = 1
        return this.userInput
    } else if (input == 'SCISSORS')
    {
        this.userInput = 2
        return this.userInput
    }
}
// Give the user a prompt, ask for their move - rock, paper or scissors. 
// Convert the user input to an integer - e.g. if user input = rock, then convert to 0.
// Return the integer after converting, store this as userInput



checkScore(){

    if (this.userInput == this.computerInput){
        console.log('DRAW!!!')
    }
    else if (this.userInput == 0 && this.computerInput == 2) {
        console.log('You win!')
    }
    else if (this.userInput == 0 && this.computerInput == 1) {
        console.log('You lose!')
}
}
}
// Step 1 - Check the user’s move compared with the computer’s generated move and provide a winner - output the winner - e.g. Winner is Computer, or Winner is User.

// Step 2 - Include a counter for the games played - output how many games each player (Computer and User) has won after each game - e.g. Computer has won 5, User has won 3, out of 8 games.

// Inputs: computerInput = the computer's move, userInput = the user's move


module.exports = Game;