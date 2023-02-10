const Game = require('./game')

let game;

beforeEach(() => {
    game = new Game();
});

test('Generates random number between 0 and 2', () => {
    expect(game.generateRandNo()).not.toBe(3);
}) 