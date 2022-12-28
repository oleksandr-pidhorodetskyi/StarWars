import React, { useEffect, useState } from 'react';
import { getPost } from '../../../api';
import getId from '../../../helpers/getId';

import Loader from '../../Loader';

import FilmImg from './FilmImg';

const FilmCard = ({ film }) => {
	const [data, setData] = useState({});

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await getPost('films', getId(film));
				setData(res.data);
			} catch (error) {
				alert(error.message);
			}
		};
		fetchPosts();
	}, [film]);
	return (
		<div className=''>
			{data.url ? (
				<div
					className='flex h-full mr-4 bg-gray-300 p-4 rounded-lg 
				cursor-pointer transition-all duration-300 
				grayscale hover:grayscale-0
				shadow-lg shadow-black-500/40'
				>
					<div className='w-72 h-72 mr-5 '>
						<FilmImg url={data.url} />
					</div>
					<aside className='pt-5'>
						<h2 className='text-2xl '>
							<span className='font-bold '>Title:</span> {data.title}
						</h2>
						<h3>
							<span className='font-bold text-lg'>Episode:</span>{' '}
							{data.episode_id}
						</h3>
						<h3>
							<span className='font-bold text-lg'>Release date:</span>{' '}
							{data.release_date}
						</h3>
					</aside>
				</div>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default FilmCard;
