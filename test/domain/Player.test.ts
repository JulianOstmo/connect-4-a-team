import Player from '../../src/domain/Player';

describe('GIVEN a Player', () => {
  describe('WHEN they are assigned a number', () => {
    test('THEN their number can be retrieved', () => {
      const expectedNumber = 1;
      const player: Player = new Player(expectedNumber);

      expect(player.number).toEqual(expectedNumber);
    });
  });
});
