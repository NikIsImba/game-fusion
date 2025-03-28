import type React from 'react';
import { createContext, useContext, useState } from 'react';
import { GameBoard } from './classes/Board.ts';

/**
 * Represents the type structure for the Game Context.
 * @interface GameContextType
 * @property {GameBoard} board - The current state of the game board
 * @property {React.Dispatch<React.SetStateAction<GameBoard>>} setBoard - State setter function to update the game board
 */
interface GameContextType {
	board: GameBoard;
	setBoard: React.Dispatch<React.SetStateAction<GameBoard>>;
}

/**
 * Creates a context for the game board state.
 * @constant {React.Context<GameContextType>} GameContext
 * @default {GameBoard} - A new instance of GameBoard with 3 rows and 3 columns
 */
export const GameContext = createContext<GameContextType | undefined>(
	undefined,
);

/**
 * A provider component for the Game context.
 *
 * This component manages the game board state and provides it to its children
 * through React's Context API.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - Child components that will have access to the game context
 * @returns {JSX.Element} A context provider wrapping the children with game state
 */
export function GameProvider({ children }: { children: React.ReactNode }) {
	const [board, setBoard] = useState<GameBoard>(new GameBoard(3, 3));

	return (
		<GameContext.Provider value={{ board, setBoard }}>
			{children}
		</GameContext.Provider>
	);
}

/**
 * Custom hook to access the game context.
 * @returns The current game context value from the GameContext provider
 * @throws {Error} When used outside of a GameContext provider
 */
export const useGameContext = () => {
	const context = useContext(GameContext);
	if (!context) {
		throw new Error('useGameContext must be used within a GameProvider');
	}
	return context;
};
