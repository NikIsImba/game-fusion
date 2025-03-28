import { motion } from 'motion/react';

export function Square() {
	return (
		<motion.div
			className="m-2 flex min-h-20 min-w-20 items-center justify-center rounded-2xl border-2 border-gray-600 bg-gray-300"
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
		>
			<p className="cursor-pointer text-2xl">Square</p>
		</motion.div>
	);
}
