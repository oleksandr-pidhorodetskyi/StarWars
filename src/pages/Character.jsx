import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../api';
import CharacterImg from '../components/CharacterImg';
import FilmCard from '../components/FilmCard.jsx/FilmCard';
import Loader from '../components/Loader';
import getId from '../helpers/getId';
import { v4 as uuidv4 } from 'uuid';

const Character = () => {
	let { id } = useParams();

	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await getPost('people', id);
				setData(res.data);
				setLoading(false);
			} catch (error) {
				alert(error.message);
				setLoading(false);
			}
		};
		fetchPosts();
	}, [id]);

	return (
		<div className='flex justify-center items-center h-full'>
			{loading ? (
				<Loader />
			) : (
				<div className='w-2/3 bg-gray-100 py-5 px-10 rounded-lg'>
					<div className='flex'>
						<div>
							<CharacterImg url={data.url} />
						</div>
						<aside className='pt-5'>
							<h2 className='text-2xl '>
								<span className='font-bold '>Name:</span> {data.name}
							</h2>
							<h3>
								<span className='font-bold text-lg'>Birth year:</span>{' '}
								{data.birth_year}
							</h3>
							<h3>
								<span className='font-bold text-lg'>Gender:</span> {data.gender}
							</h3>
							<h3>
								<span className='font-bold text-lg'>Height:</span> {data.height}
							</h3>
							<h3>
								<span className='font-bold text-lg'>Mass:</span> {data.mass}
							</h3>
							<h3>
								<span className='font-bold text-lg'>Hair color:</span>{' '}
								{data.hair_color}
							</h3>
							<h3>
								<span className='font-bold text-lg'>Skin color:</span>{' '}
								{data.skin_color}
							</h3>
							<h3>
								<span className='font-bold text-lg'>Eye color:</span>{' '}
								{data.eye_color}
							</h3>
						</aside>
					</div>
					<div className='films flex flex-col items-center justify-center p-4'>
						<h2 className='font-bold text-2xl mb-3'>FILMS</h2>
						{data.films.map((film) => (
							<FilmCard key={uuidv4()} film={film} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Character;
