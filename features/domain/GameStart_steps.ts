import { Given, When, Then, And, Fusion } from 'jest-cucumber-fusion';

import Player from '../../src/domain/Player';
import Game from '../../src/domain/Game';

jest.mock('../../src/domain/Player');

let player1: Player;
let player2: Player;
let game: Game;

Given('two Players', () => {
  player1 = new Player(1);
  player2 = new Player(2);
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

  expect(game.grid()).toEqual(emptyGrid);
});

Then('one player is marked as Player 1', () => {
  expect(game.player1).toBe(player1);
});

And('the other is marked as Player 2', () => {
  // TODO:
  expect(false).toBe(true);
});

And('the game displays that "Player 1 has a turn"', () => {
  // TODO:
  expect(false).toBe(true);
});

Fusion('GameStart.feature');
