import React from 'react';

const Pagination = ({ postPerPage, totalPosts, setCurentPage }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<ul className='flex justify-center mb-2'>
			{pageNumbers.map((number) => (
				<li
					key={number}
					className='border-solid border-2 border-sky-500 rounded-lg mr-3 w-7 text-center cursor-pointer'
					onClick={() => setCurentPage(number)}
				>
					{number}
				</li>
			))}
		</ul>
	);
};

export default Pagination;
