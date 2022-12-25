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
	const [filter, setFilter] = useState('all');
	const [filteredPosts, setFilteredPosts] = useState([]);

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
	useEffect(() => {
		setFilteredPosts(posts);
	}, [posts]);

	useEffect(() => {
		console.log(filter);
		const filtered = posts.filter((el) => {
			if (filter === 'all') {
				return el;
			} else if (el.gender === filter) {
				return el;
			}
		});
		setFilteredPosts(filtered);
	}, [filter]);

	return (
		<main className='flex justify-center items-center h-full'>
			{loading ? (
				<Loader />
			) : (
				<div className='w-4/5'>
					<SearchBar
						setLoading={setLoading}
						setPosts={setPosts}
						setTotalPosts={setTotalPosts}
						setFilter={setFilter}
					/>
					<Cards posts={filteredPosts} />
					<Pagination
						postPerPage={postsPerPage}
						totalPosts={totalPosts}
						setCurentPage={setCurentPage}
					/>
				</div>
			)}
		</main>
	);
};

export default Home;
