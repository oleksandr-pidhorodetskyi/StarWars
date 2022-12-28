import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FilmCard from './components/FilmCard';

const Slider = ({ data }) => {
	const ref = useRef(null);
	const scroll = (scrollOffset) => {
		ref.current.scrollLeft += scrollOffset;
	};
	return (
		<div className='flex items-center justify-between rounded overflow-x-auto w-11/12'>
			<button
				className='flex justify-center 
                leading-none w-7 h-7 font-bold text-2xl
                rounded-full bg-slate-200 hover:bg-slate-300 active:border-2 border-slate-400'
				onClick={() => scroll(-430)}
			>
				&#8249;
			</button>
			<div
				className='flex scroll-smooth rounded p-4 overflow-x-auto scrollbar-hide w-10/12'
				ref={ref}
			>
				{data.map((film) => (
					<FilmCard key={uuidv4()} film={film} />
				))}
			</div>
			<button
				className='flex justify-center 
                leading-none w-7 h-7 font-bold text-2xl
                rounded-full bg-slate-200 hover:bg-slate-300 active:border-2 border-slate-400'
				onClick={() => scroll(430)}
			>
				&#8250;
			</button>
		</div>
	);
};

export default Slider;
