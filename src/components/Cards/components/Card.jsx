import React from 'react';
import { Link } from 'react-router-dom';
import getId from '../../../helpers/getId';
import CardImg from './CardImg';

const Card = ({ post }) => {
	return (
		<Link to={`/character/${getId(post.url)}`}>
			<div
				className='flex flex-col 
				items-center justify-center
				h-60 p-3 rounded-lg
            	bg-gray-300 shadow-lg shadow-gray-400/30
				hover:scale-105 ease-in-out transition-all duration-300 hover:shadow-lg shadow-gray-400/40
				cursor-pointer'
			>
				<CardImg url={post.url} />
				<h3 className='font-bold'>{post.name}</h3>
			</div>
		</Link>
	);
};

export default Card;
