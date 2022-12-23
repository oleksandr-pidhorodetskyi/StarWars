import React, { useEffect, useState } from 'react';
import Cards from '.././components/Cards/Cards';
import Pagination from '.././components/Pagination';
import Loader from '.././components/Loader';
import { getPosts } from '.././api';
import SearchBar from '../components/SearchBar';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurentPage] = useState(1);
	const [postsPerPage] = useState(10);
	const [totalPosts, setTotalPosts] = useState(10);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setLoading(true);
				const res = await getPosts(currentPage);
				setPosts(res.data.results);
				setTotalPosts(res.data.count);
				setLoading(false);
			} catch (error) {
				alert(error.message);
				setLoading(false);
			}
		};
		fetchPosts();
	}, [currentPage]);

	return (
		<div className='flex justify-center items-center h-full'>
			{loading ? (
				<Loader />
			) : (
				<div className='w-4/5'>
					<SearchBar />
					<Cards posts={posts} />
					<Pagination
						postPerPage={postsPerPage}
						totalPosts={totalPosts}
						setCurentPage={setCurentPage}
					/>
				</div>
			)}
		</div>
	);
};

export default Home;
