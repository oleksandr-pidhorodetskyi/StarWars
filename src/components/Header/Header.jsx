import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import backArrow from './back-arrow.png';
const Header = () => {
	const navigate = useNavigate();
	let location = useLocation();
	return (
		<header className='flex flex-col justify-center items-center'>
			<div className=' my-5'>
				<img className='h-36' alt='star wars logo' src={logo} />
			</div>

			{location.pathname !== '/' && (
				<div className='w-2/3 mb-2 pl-2 text-white font-bold text-2xl'>
					<button
						className='flex justify-center items-center w-16 h-10 bg-slate-200 rounded-lg hover:scale-105
						active:border-2 border-slate-400 '
						onClick={() => navigate(-1)}
					>
						<img className='h-8' alt='back arrow' src={backArrow} />
					</button>
				</div>
			)}
		</header>
	);
};

export default Header;
