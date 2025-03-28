/**
 * Represents a square in a grid-based game.
 * 
 * @class
 * @property {SquareColor} color - The color of the square. Defaults to SquareColor.None.
 */
export class Square {
  color: SquareColor = SquareColor.None;
}

/**
 * Represents the possible colors of a square in the game.
 * @enum {number}
 */
export enum SquareColor {
  None = 0,
  Red = 1
}