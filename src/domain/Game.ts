import Player from './Player';

export default class Game {
  private readonly _grid: number[][];
  private readonly _player1: Player;
  private readonly _player2: Player;

  constructor(player1: Player, player2: Player) {
    this._grid = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this._player1 = player1;
    this._player2 = player2;
  }

  grid(): number[][] {
    return this._grid;
  }

  get player1(): Player {
    return this._player1;
  }

  get player2(): Player {
    return this._player2;
  }
}
