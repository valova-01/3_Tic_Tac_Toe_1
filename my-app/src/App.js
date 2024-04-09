import React from 'react';
import Game from './components/Game/game';
import styles from './app.module.css';

const App = () => {
	const currentPlayer = 'X';
	const isGameEnded = false;
	const isDraw = false;

	return (
		<div className={styles.App}>
			<Game currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
		</div>
	);
};

export default App;
