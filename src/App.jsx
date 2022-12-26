import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Character from './pages/Character';

const App = () => {
	return (
		<div className='flex flex-col justify-between min-h-screen'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/character/:id' element={<Character />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
