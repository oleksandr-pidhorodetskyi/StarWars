import React from 'react';

const SearchBar = ({ setSearch, setFilter, handleSearch, search }) => {
	const handleInput = (e) => {
		setSearch(e.target.value);
	};
	const handleFilters = (e) => {
		setFilter(e.target.value);
	};

	return (
		<div className='flex items-center justify-between h-10 mb-4'>
			<div className='flex w-72 items-center justify-between'>
				<label htmlFor='search'>Search</label>
				<input
					className='block px-2 py-1'
					placeholder='Input ...'
					type='text'
					id='input'
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
