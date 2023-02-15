import Player from './Player';

export default class Game {
  private readonly _grid: number[][];

  constructor(
    private readonly player1: Player,
    private readonly player2: Player,
  ) {
    this._grid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
  }

  grid(): number[][] {
    return this._grid;
  }
}
