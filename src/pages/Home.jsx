import React, { useEffect, useMemo, useState } from 'react';
import Cards from '.././components/Cards/Cards';
import Pagination from '.././components/Pagination';
import Loader from '.././components/Loader';
import { changeSearchedPage, getPosts, searchPosts } from '.././api';
import SearchBar from '../components/SearchBar';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurentPage] = useState(1);
	const [postsPerPage] = useState(10);
	const [totalPosts, setTotalPosts] = useState(0);
	const [MaxPosts, setMaxPosts] = useState(0);

	const [isFiltered, setIsFiltered] = useState(false);
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState('all');
	const [filteredPosts, setFilteredPosts] = useState([]);

	// Changing page
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setLoading(true);
				let res = [];
				if (isFiltered) {
					res = await changeSearchedPage(search, currentPage);
				} else {
					res = await getPosts(currentPage);
				}
				setPosts(res.data.results);
				setTotalPosts(res.data.count);
				setMaxPosts(res.data.count);
				setLoading(false);
			} catch (error) {
				alert(error.message);
				setLoading(false);
			}
		};
		fetchPosts();
	}, [currentPage]);

	// Search
	const handleSearch = async (e) => {
		if (e.key === 'Enter' || e.key === undefined) {
			try {
				setLoading(true);
				const res = await searchPosts(search);
				setPosts(res.data.results);
				setTotalPosts(res.data.count);
				setMaxPosts(res.data.count);
				setLoading(false);
			} catch (error) {
				alert(error.message);
			}
		}
	};

	useEffect(() => {
		setFilteredPosts(posts);
	}, [posts]);

	useEffect(() => {
		if (search !== '' || filter !== 'all') {
			setIsFiltered(true);
		} else setIsFiltered(false);
	}, [search, filter]);

	useEffect(() => {
		const filtered = posts.filter((el) => {
			if (filter === 'all') {
				return el;
			} else if (el.gender === filter) {
				return el;
			}
		});
		setFilteredPosts(filtered);
		if (filter === 'all') {
			setTotalPosts(MaxPosts);
		} else setTotalPosts(filtered.length);
	}, [filter]);

	return (
		<main className='flex justify-center items-center h-full'>
			{loading ? (
				<Loader />
			) : (
				<div className='w-4/5'>
					<SearchBar
						setFilter={setFilter}
						setSearch={setSearch}
						handleSearch={handleSearch}
						search={search}
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
