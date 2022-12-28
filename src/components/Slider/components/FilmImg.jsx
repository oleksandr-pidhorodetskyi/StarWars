import React from 'react';
import getId from '../../../helpers/getId';

const FilmImg = ({ url }) => {
	return (
		<img
			className='w-72 h-72 object-cover hover:scale-105 ease-in-out transition-all duration-300 rounded'
			alt='Film'
			src={`https://starwars-visualguide.com/assets/img/films/${getId(
				url
			)}.jpg`}
		/>
	);
};

export default FilmImg;
