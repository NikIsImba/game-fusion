/**
 * Represents a square in a grid-based game.
 * 
 * @class
 * @property {SquareColor} color - The color of the square. Defaults to SquareColor.None.
 */
export class Square {
  color: SquareColor = SquareColor.None;

  /**
   * Creates and returns a new Square instance with the same color as the current Square.
   * @returns {Square} A new Square instance with copied properties
   */
  clone(): Square {
    const newSquare = new Square();
    newSquare.color = this.color;
    return newSquare;
  }
}

/**
 * Represents the possible colors of a square in the game.
 * @enum {number}
 */
export enum SquareColor {
  None = 0,
  Red = 1
}