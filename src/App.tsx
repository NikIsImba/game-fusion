import { useEffect, useCallback } from 'react';
import { Square } from './components/Square.tsx';
import { GameProvider, useGameContext } from './feature/GameContext.tsx';
import { motion } from 'framer-motion';

function GameGrid() {
	const { board, forceUpdate } = useGameContext();

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowUp':
					board.addRow(); // Mutate the existing board
					break;
				case 'ArrowDown':
					board.removeRow();
					break;
				case 'ArrowLeft':
					board.addCol();
					break;
				case 'ArrowRight':
					board.removeCol();
					break;
				default:
					return;
			}
			forceUpdate(); // Trigger a rerender
		},
		[board, forceUpdate],
	);

	useEffect(() => {
		console.log('useEffect');
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [handleKeyDown]);

	return (
		<motion.div layout>
			<div className="flex min-h-screen flex-col bg-gray-900">
				<div className="flex w-full flex-row items-center justify-center rounded-b-2xl bg-blue-200 p-4">
					<Square />
					<Square />
					<Square />
				</div>
				<div className="flex flex-1 flex-col items-center justify-center bg-gray-900">
					<div className="flex flex-row items-center justify-center rounded-2xl bg-yellow-50 p-4">
						{board.squares.map((row, rowIndex) => (
							<div
								key={`row-${rowIndex}`}
								className="flex flex-col items-center"
							>
								{row.map((square, squareIndex) => (
									<Square key={`square-${rowIndex}-${squareIndex}`} />
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export function App() {
	return (
		<GameProvider>
			<GameGrid />
		</GameProvider>
	);
}
