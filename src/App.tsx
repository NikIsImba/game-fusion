import { useEffect, useCallback, useState } from 'react';
import { Square } from './components/Square.tsx';

export function App() {
	//coordinate system of sqaures
	// 0,0 0,1 0,2
	// 1,0 1,1 1,2
	// 2,0 2,1 2,2

	const [Squares, setSquares] = useState([
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	]);

	// if button up or down is pressed add a row to the Squares at the top or bottom
	// if button left or right is pressed add a column to the Squares at the left or right

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			console.log(e.key);
			switch (e.key) {
				case 'ArrowUp':
					setSquares((prev) => [[0, 0, 0], ...prev]);
					break;
				case 'ArrowDown':
					setSquares((prev) => [...prev, [0, 0, 0]]);
					break;
				case 'ArrowLeft':
					setSquares((prev) => prev.map((row) => [0, ...row]));
					break;
				case 'ArrowRight':
					setSquares((prev) => prev.map((row) => [...row, 0]));
					break;
				default:
					break;
			}
		},
		[Squares],
	);

	useEffect(() => {
		console.log('useEffect');
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [handleKeyDown]);

	return (
		<div className="flex min-h-screen flex-col bg-gray-900">
			<div className="flex w-full flex-row items-center justify-center rounded-b-2xl bg-blue-200 p-4">
				<Square />
				<Square />
				<Square />
			</div>
			<div className="flex flex-1 flex-col items-center justify-center bg-gray-900">
				<div className="flex flex-row items-center justify-center rounded-2xl bg-yellow-50 p-4">
					{Squares.map((row, rowIndex) => (
						<div
							key={`row-${row.join('-')}-${rowIndex}`}
							className="flex flex-col items-center"
						>
							{row.map((square, squareIndex) => (
								<Square key={`square-${square}-${rowIndex}-${squareIndex}`} />
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
