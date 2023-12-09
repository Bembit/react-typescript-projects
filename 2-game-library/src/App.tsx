import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Data from './data.js';
import './App.css';
import Library from './components/Library';
import Shop from './components/Shop';
import Nav from './components/Nav';
import GameDetails from './components/GameDetails';
import NotFound from './components/NotFound';

export interface GameItem {
	id: number;
	title: string;
	genre: string;
	image: string;
	price: number;
	description: string;
};

function App() {

	const games: GameItem[] = Data.games;

	const [claimed, setClaimed] = useState<GameItem[]>([]);

	// Function to check if a game is claimed
	const isGameClaimed = (gameId: number) => claimed.some((claimedGame) => claimedGame.id === gameId);

	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				{/* Main route as the shop */}
				<Route path="/" element={<Shop games={games} claimed={claimed} setClaimed={setClaimed} isGameClaimed={isGameClaimed} />} />
				<Route path="/library" element={<Library games={games} claimed={claimed} setClaimed={setClaimed} isGameClaimed={isGameClaimed} />} />
				{/* Add a route for dynamic route game.id details */}
				<Route path="/:id" element={<GameDetails games={games} claimed={claimed} setClaimed={setClaimed} isGameClaimed={isGameClaimed} />} />
				{/* Add a catch-all route for 404 */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);

}

export default App;