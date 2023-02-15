import Game from '../../src/domain/Game';
import Player from '../../src/domain/Player';

jest.mock('../../src/domain/Player');

describe('GIVEN a new Game', () => {
  let game: Game;

  beforeEach(() => {
    const player1: Player = new Player();
    const player2: Player = new Player();
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
});
