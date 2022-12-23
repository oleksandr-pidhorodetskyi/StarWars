import React, { useEffect, useState } from 'react';

const SearchBar = () => {
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState('person');

	const handleInput = (e) => {
		setSearch(e.target.value);
	};
	const handleFilters = (e) => {
		setFilter(e.target.value);
	};

	const handleSearch = () => {
		console.log(search);
	};

	useEffect(() => {
		console.log(filter);
	}, [filter]);

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
				<option value='person'>Person</option>
				<option value='robot'>Robot</option>
			</select>
		</div>
	);
};

export default SearchBar;
