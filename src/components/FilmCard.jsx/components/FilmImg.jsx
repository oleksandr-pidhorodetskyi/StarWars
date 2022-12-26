import React from 'react';
import getId from '../../../helpers/getId';

const FilmImg = ({ url }) => {
	console.log(url);
	return (
		<img
			className='h-80 rounded'
			alt='Film'
			src={`https://starwars-visualguide.com/assets/img/films/${getId(
				url
			)}.jpg`}
		/>
	);
};

export default FilmImg;
