import { describe, it, expect } from 'vitest';
import { render, renderHook } from '@testing-library/react';
import { GameContext, GameProvider, useGameContext } from './GameContext.tsx';
import { GameBoard } from './classes/Board.ts';

describe('GameContext', () => {
	it('should create context with default values', () => {
		expect(GameContext).toBeDefined();
		const { result } = renderHook(() => useGameContext(), {
			wrapper: ({ children }) => <GameProvider>{children}</GameProvider>,
		});
		expect(() => result.current.board).not.toThrow();
		expect(() => result.current.setBoard(new GameBoard(3, 3))).not.toThrow();
		expect(result.current.board).toBeInstanceOf(GameBoard);
		expect(result.current.board.squares.length).toBe(3);
		expect(result.current.board.squares[0].length).toBe(3);
	});
});

describe('GameProvider', () => {
	it('should render children and provide game context', async () => {
		const TestChild = () => {
			const { board } = useGameContext();
			return <div data-testid="test-child">{board.squares.length}</div>;
		};

		const { getByTestId } = render(
			<GameProvider>
				<TestChild />
			</GameProvider>,
		);

		await expect.element(getByTestId('test-child')).toHaveTextContent('3');
	});
});

describe('useGameContext', () => {
	it('should return game context when used within provider', () => {
		const { result } = renderHook(() => useGameContext(), {
			wrapper: GameProvider,
		});

		expect(result.current.board).toBeInstanceOf(GameBoard);
		expect(typeof result.current.setBoard).toBe('function');
	});

	it('should throw error when used outside provider', () => {
		expect(() => {
			const { result } = renderHook(() => useGameContext());
			result.current;
		}).toThrow();
	});
});
