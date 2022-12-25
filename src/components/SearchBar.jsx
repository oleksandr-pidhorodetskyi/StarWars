import React, { useEffect, useState } from 'react';
import { searchPosts } from '../api';

const SearchBar = ({ setLoading, setPosts, setTotalPosts, setFilter }) => {
	const [search, setSearch] = useState('');

	const handleInput = (e) => {
		setSearch(e.target.value);
	};
	const handleFilters = (e) => {
		setFilter(e.target.value);
	};

	const handleSearch = async (e) => {
		if (e.key === 'Enter' || e.key === undefined) {
			try {
				setLoading(true);
				const res = await searchPosts(search);
				console.log(res);
				setPosts(res.data.results);
				setTotalPosts(res.data.count);
				setLoading(false);
			} catch (error) {
				alert(error.message);
			}
		}
	};
	return (
		<div className='flex items-center justify-between h-10 mb-4'>
			<div className='flex w-72 items-center justify-between'>
				<label htmlFor='search'>Search</label>
				<input
					className='block px-2 py-1'
					placeholder='Input ...'
					type='text'
					id='search'
					value={search}
					onChange={handleInput}
					onKeyDown={handleSearch}
				/>
				<button onClick={handleSearch}>&#128269;</button>
			</div>
			<select onChange={handleFilters}>
				<option value='all'>All</option>
				<option value='male'>Male</option>
				<option value='female'>Female</option>
				<option value='n/a'>Robots</option>
			</select>
		</div>
	);
};

export default SearchBar;
