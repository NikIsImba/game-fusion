import { describe, it, expect } from 'vitest';
import { GameBoard } from './Board.ts';
import { Square } from './Square.ts';

describe('GameBoard', () => {
  it('should create board with correct dimensions', () => {
    const board = new GameBoard(3, 4);
    expect(board.squares.length).toBe(3);
    expect(board.squares[0].length).toBe(4);
    expect(board.squares.every(row => row.length === 4)).toBe(true);
  });

  it('should create deep copy of board', () => {
    const board = new GameBoard(2, 2);
    const copy = board.copy();
    expect(copy).toBeInstanceOf(GameBoard);
    expect(copy.squares.length).toBe(board.squares.length);
    expect(copy.squares[0].length).toBe(board.squares[0].length);
    expect(copy.squares[0][0]).toBe(board.squares[0][0]); // Tests reference copy
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

  it('should not add row when maximum rows reached', () => {
    const board = new GameBoard(10, 2);
    const initialRows = board.squares.length;
    board.addRow();
    expect(board.squares.length).toBe(initialRows);
  });

  it('should not add column when maximum columns reached', () => {
    const board = new GameBoard(2, 10);
    const initialCols = board.squares[0].length;
    board.addCol(); 
    expect(board.squares[0].length).toBe(initialCols);
  });

  it('should ensure all squares are initialized properly', () => {
    const board = new GameBoard(2, 2);
    for(const row of board.squares) {
      for(const square of row) {
        expect(square).toBeInstanceOf(Square);
      }
    }
  });

  it('should maintain consistent column lengths after modifications', () => {
    const board = new GameBoard(3, 3);
    board.addRow();
    board.addCol();
    board.removeRow();
    const columnLengths = board.squares.map(row => row.length);
    expect(new Set(columnLengths).size).toBe(1);
  });


});