import { Square } from './Square.ts';

/**
 * Represents a game board consisting of a 2D array of Square objects.
 * The board can be dynamically resized within specified maximum dimensions.
 * 
 * @remarks
 * The board is implemented as a rectangular grid where each cell is a Square object.
 * The dimensions of the board can be modified through methods to add or remove rows and columns.
 * The board maintains maximum dimensions of 10x10 squares.
 * 
 * @example
 * ```typescript
 * const board = new GameBoard(5, 5);
 * board.addRow(); // Adds a row at the top
 * board.addCol(); // Adds a column at the right
 * ```
 * 
 * @property squares - 2D array containing Square objects that make up the game board
 * @property maxRows - Maximum number of rows allowed on the board (10)
 * @property maxCols - Maximum number of columns allowed on the board (10)
 */
export class GameBoard {
  squares: Square[][]
  private maxRows = 10;
  private maxCols = 10;

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
   * Creates and returns a deep copy of the current GameBoard instance.
   * Each square in the board is copied to a new GameBoard object.
   * 
   * @returns {GameBoard} A new GameBoard instance with the same dimensions and square values
   */
  copy(): GameBoard {
    const newBoard = new GameBoard(this.squares.length, this.squares[0].length);
    for (let i = 0; i < this.squares.length; i++) {
      for (let j = 0; j < this.squares[i].length; j++) {
        newBoard.squares[i][j] = this.squares[i][j];
      }
    }
    return newBoard;
  }

  /**
   * Adds a new row at the top of the board.
   * Creates a new array of Square objects with the same length as existing rows
   * and adds it to the beginning of the squares array.
   * 
   * @returns void
   */
  addRow(): void{
    if (this.squares.length >= this.maxRows) {
      return
    }

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
    if (this.squares[0].length >= this.maxCols) {
      return;
    }

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