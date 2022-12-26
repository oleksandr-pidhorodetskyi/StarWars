import React, { useEffect, useState } from 'react';
import { getPost } from '../../api';
import getId from '../../helpers/getId';
import Loader from '../Loader';
import FilmImg from './components/FilmImg';

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
		<div className=' w-3/4'>
			{data.url ? (
				<div className='flex mb-4 bg-gray-300 p-4 rounded-lg'>
					<div className='mr-10'>
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
