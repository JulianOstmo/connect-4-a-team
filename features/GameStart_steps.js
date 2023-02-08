const { Given, When, Then, Fusion } = require('jest-cucumber-fusion');

let player1;
let player2;
let game;

Given('two Players', () => {
  player1 = new Player();
  player2 = new Player();
});

When('they start a new game', () => {
  game = new Game(player1, player2);
});

Then('they should see an empty grid', () => {
  const emptyGrid = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  expect(game.grid).toEqual(emptyGrid);
});

Fusion('GameStart.feature');
