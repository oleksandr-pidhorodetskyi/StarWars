import React, { useMemo } from 'react';
import Card from './components/Card';
import { v4 as uuidv4 } from 'uuid';

const Cards = ({ posts }) => {
	return (
		<div className='grid grid-rows-2 grid-cols-5 gap-x-3 gap-y-6 mb-10'>
			{useMemo(
				() => posts.map((post) => <Card key={uuidv4()} post={post} />),
				[posts]
			)}
		</div>
	);
};

export default Cards;
