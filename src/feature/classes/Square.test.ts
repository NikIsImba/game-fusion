import { beforeEach, describe, expect, test } from 'vitest';
import { Square, SquareColor } from './Square.ts';

describe('Square', () => {
  let square: Square;

  beforeEach(() => {
    square = new Square();
  });

  test('should be initialized with SquareColor.None', () => {
    expect(square.color).toBe(SquareColor.None);
  });

  test('should allow changing color to Red', () => {
    square.color = SquareColor.Red;
    expect(square.color).toBe(SquareColor.Red);
  });

  test('should allow changing color back to None', () => {
    square.color = SquareColor.Red;
    square.color = SquareColor.None;
    expect(square.color).toBe(SquareColor.None);
  });

  test('clone should create a new Square with the same color', () => {
    square.color = SquareColor.Red;
    const clonedSquare = square.clone();
    expect(clonedSquare).toBeInstanceOf(Square);
    expect(clonedSquare.color).toBe(SquareColor.Red);
    expect(clonedSquare).not.toBe(square);
  });
});