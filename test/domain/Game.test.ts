import Game from '../../src/domain/Game';
import Player from '../../src/domain/Player';

jest.mock('../../src/domain/Player');

describe('GIVEN a new Game', () => {
  let game: Game;
  let player1: Player;
  let player2: Player;

  beforeEach(() => {
    player1 = new Player(1);
    player2 = new Player(2);
    game = new Game(player1, player2);
  });

  describe('WHEN getting the grid', () => {
    test('THEN it should be empty', () => {
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
  });

  describe('WHEN the game begins', () => {
    test('THEN Player 1 should be assigned 1 as their number', () => {
      expect(game.player1).toBe(player1);
    });

    test('THEN Player 2 should be assigned 2 as their number', () => {
      expect(game.player2).toBe(player2);
    });

    test('THEN Player 1 has their turn', () => {
      expect(game.currentPlayer).toBe(player1);
    });
  });
});
