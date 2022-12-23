import React from 'react';
import getId from '../../../helpers/getId';

const CardImg = ({ url }) => {
	return (
		<img
			className='h-3/4 rounded mb-3'
			alt='Character'
			src={`https://starwars-visualguide.com/assets/img/characters/${getId(
				url
			)}.jpg`}
		/>
	);
};

export default CardImg;
