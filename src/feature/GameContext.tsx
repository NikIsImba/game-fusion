import { createContext, useContext, useState } from 'react';
import { GameBoard } from './classes/Board.ts';

interface GameContextType {
	board: GameBoard;
	forceUpdate: () => void; // Function to trigger a rerender
}

const initialBoard = new GameBoard(3, 3);

export const GameContext = createContext<GameContextType>({
	board: initialBoard,
	forceUpdate: () => {},
});

export function GameProvider({ children }: { children: React.ReactNode }) {
	const [tick, setTick] = useState(0); // State to trigger rerenders
	const board = initialBoard;

	// Function to force a rerender
	const forceUpdate = () => setTick((tick) => tick + 1);

	return (
		<GameContext.Provider value={{ board, forceUpdate }}>
			{children}
		</GameContext.Provider>
	);
}

export const useGameContext = () => useContext(GameContext);
