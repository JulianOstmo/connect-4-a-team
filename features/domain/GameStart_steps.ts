import { Given, When, Then, Fusion } from 'jest-cucumber-fusion';

import Player from '../../src/domain/Player';
import Game from '../../src/domain/Game';

jest.mock('../../src/domain/Player');

let player1: Player;
let player2: Player;
let game: Game;

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

  expect(game.grid()).toEqual(emptyGrid);
});

Fusion('GameStart.feature');
