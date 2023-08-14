import { cloneDeep, shuffle } from 'lodash';
import { countInversions } from '../utils/count-inverstion.util';

export class GameController {
  map: number[][] = [];
  level = 0;

  constructor(level: number) {
    const arr = shuffle([...Array(level * level - 1)].map((_, i) => i + 1));
    if (countInversions(arr) % 2 !== 0) {
      [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    arr.push(0);
    for (let i = 0; i < level; i++) {
      this.map.push(arr.slice(level * i, level * i + level));
    }
    this.level = level;
  }

  getMap() {
    return cloneDeep(this.map);
  }

  findEmptyCell(r: number, c: number) {
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[r][i] === 0) {
        return [r, i];
      } else if (this.map[i][c] === 0) {
        return [i, c];
      }
    }
    return [-1, -1];
  }

  click(r: number, c: number) {
    let [_r, _c] = this.findEmptyCell(r, c);
    if (_r !== -1) {
      const [dr, dc] = [r !== _r ? (r - _r) / Math.abs(r - _r) : 0, c !== _c ? (c - _c) / Math.abs(c - _c) : 0];
      while (_r !== r || _c !== c) {
        this.map[_r][_c] = this.map[_r + dr][_c + dc];
        _r += dr;
        _c += dc;
      }
      this.map[r][c] = 0;
    }
    return this.map;
  }

  checkWinning() {
    const arr = this.map.flat();
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] !== i) return false;
    }
    return true;
  }
}
