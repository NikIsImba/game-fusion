import { Square } from './Square.ts';

/**
 * Represents a game board with a 2D grid of squares.
 * The board can be dynamically resized by adding or removing rows and columns.
 * 
 * @remarks
 * The board is implemented as a 2D array of Square objects, where each Square
 * represents a cell in the game grid. The board dimensions can be modified
 * through methods that add or remove rows and columns.
 * 
 * @example
 * ```typescript
 * const board = new GameBoard(3, 3); // Creates a 3x3 board
 * board.addRow(); // Adds a row at the top
 * board.addCol(); // Adds a column at the right
 * ```
 */
export class GameBoard {
  squares: Square[][]

  /**
   * Creates a new board with the specified dimensions.
   * @param rows The number of rows in the board
   * @param cols The number of columns in the board
   * @constructor Initializes a 2D array of Square objects with the given dimensions
   */
  constructor(rows :number, cols :number) {
    this.squares = Array.from({ length: rows }, () => Array.from({ length: cols }, () => new Square()));
  }

  /**
   * Adds a new row at the top of the board.
   * Creates a new array of Square objects with the same length as existing rows
   * and adds it to the beginning of the squares array.
   * 
   * @returns void
   */
  addRow(): void{
    this.squares.unshift(Array.from({ length: this.squares[0].length }, () => new Square()));
  }

  /**
   * Adds a new column to the game board by appending a new Square instance
   * to each existing row in the squares array.
   * 
   * @remarks
   * This method modifies the board state by extending each row with a new square.
   * 
   * @returns void
   */
  addCol(): void{
    for (const row of this.squares) {
      row.push(new Square());
    }
  }

  /**
   * Removes the first row from the board by shifting the squares array.
   * This operation modifies the board state by removing the topmost row.
   * 
   * @returns void
   */
  removeRow(): void{
    this.squares.shift();
  }

  /**
   * Removes the last column from the board by removing the last element from each row.
   * This method modifies the board state directly.
   * 
   * @returns void
   */
  removeCol(): void{
    for (const row of this.squares) {
      row.pop();
    }
  }
}