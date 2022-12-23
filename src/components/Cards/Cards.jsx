import React from 'react';
import Card from './components/Card';
import { v4 as uuidv4 } from 'uuid';

const Cards = ({ posts }) => {
	return (
		<div className='grid grid-rows-2 grid-cols-5 gap-x-3 gap-y-2 mb-3'>
			{posts.map((post) => (
				<Card key={uuidv4()} post={post} />
			))}
		</div>
	);
};

export default Cards;
