import { Given, When, Then, And, Fusion, Before } from 'jest-cucumber-fusion';

import Game from '../../src/domain/Game';
import Player from '../../src/domain/Player';

let game: Game;
let player1: Player;
let player2: Player;
let chosenColumn: number;

Before(() => {
  player1 = new Player(1);
  player2 = new Player(2);
});

Given('an empty grid', () => {
  game = new Game(player1, player2);
});

And('Player 1 has their turn', () => {
  expect(game.currentPlayer).toBe(player1);
});

When('they choose a column', () => {
  chosenColumn = 0;
});

And('they take their turn', () => {
  game.takeTurn(chosenColumn);
});

Then('they place their disc on the grid', () => {
  // TODO:
  expect(false).toBe(true);
});

And('then the turn alternates to Player 2', () => {
  // TODO:
  expect(false).toBe(true);
});

Fusion('./playerMoves.feature');
