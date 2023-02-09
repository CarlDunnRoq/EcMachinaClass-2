// A classic game of rock, paper, scissors

class Game {

    constructor() {
        // Key: 0 - Rock, 1 - Paper, 2 - Scissors
    }

    generateRandNo() {
        // Generate a random integer between 0 and 2.  
        // Each number represents either rock, paper or scissors - check against key.
        // Return the randomly generated integer, store this as computerInput

        throw new Error('generateRandNo functionality not yet supported!');
    }

    userMove() {
        // Give the user a prompt, ask for their move - rock, paper or scissors. 
        // Convert the user input to an integer - e.g. if user input = rock, then convert to 0.
        // Return the integer after converting, store this as userInput

        throw new Error('userMove functionality not yet supported!'); 
    }

    checkScore(computerInput, userInput) {
        // Step 1 - Check the user’s move compared with the computer’s generated move and provide a winner - output the winner - e.g. Winner is Computer, or Winner is User.

        // Step 2 - Include a counter for the games played - output how many games each player (Computer and User) has won after each game - e.g. Computer has won 5, User has won 3, out of 8 games.
    
        // Inputs: computerInput = the computer's move, userInput = the user's move

        throw new Error('checkScore functionality not yet supported!');
    }
    
    //p.s if this is too easy - expand the game and add lizard, spock to the mix.
}

module.exports = Game;