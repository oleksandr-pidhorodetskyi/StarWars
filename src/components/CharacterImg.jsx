import React from 'react';
import getId from '../helpers/getId';

const CharacterImg = ({ url }) => {
	console.log(url);
	return (
		<img
			className='h-80 rounded mr-10'
			alt='Character'
			src={`https://starwars-visualguide.com/assets/img/characters/${getId(
				url
			)}.jpg`}
		/>
	);
};

export default CharacterImg;
