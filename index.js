const Game = require('./game')

let myGame = new Game();

console.log(myGame.generateRandNo());
console.log(myGame.userMove());
myGame.checkScore();


