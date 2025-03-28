import { describe, it, expect } from 'vitest';
import { GameBoard } from './Board.ts';

describe('GameBoard', () => {
  it('should create board with correct dimensions', () => {
    const board = new GameBoard(3, 4);
    expect(board.squares.length).toBe(3);
    expect(board.squares[0].length).toBe(4);
    expect(board.squares.every(row => row.length === 4)).toBe(true);
  });

  it('should add row correctly', () => {
    const board = new GameBoard(2, 2);
    const initialRows = board.squares.length;
    board.addRow();
    expect(board.squares.length).toBe(initialRows + 1);
    expect(board.squares[0].length).toBe(2);
  });

  it('should add column correctly', () => {
    const board = new GameBoard(2, 2);
    const initialCols = board.squares[0].length;
    board.addCol();
    expect(board.squares[0].length).toBe(initialCols + 1);
    expect(board.squares.length).toBe(2);
  });

  it('should remove row correctly', () => {
    const board = new GameBoard(3, 2);
    const initialRows = board.squares.length;
    board.removeRow();
    expect(board.squares.length).toBe(initialRows - 1);
    expect(board.squares[0].length).toBe(2);
  });

  it('should remove column correctly', () => {
    const board = new GameBoard(2, 3);
    const initialCols = board.squares[0].length;
    board.removeCol();
    expect(board.squares[0].length).toBe(initialCols - 1);
    expect(board.squares.length).toBe(2);
  });
});