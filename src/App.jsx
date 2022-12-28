import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Character from './pages/Character';
import Header from './components/Header/Header';

const App = () => {
	return (
		<div className='flex flex-col min-h-screen bg-zinc-600'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/character/:id' element={<Character />} />
			</Routes>
		</div>
	);
};

export default App;
