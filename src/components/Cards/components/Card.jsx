import React from 'react';
import CardImg from './CardImg';

const Card = ({ post }) => {
	return (
		<div
			className='flex flex-col items-center justify-center h-60 p-3
            bg-gray-100  '
		>
			<CardImg url={post.url} />
			<h3 className='font-bold'>{post.name}</h3>
		</div>
	);
};

export default Card;
