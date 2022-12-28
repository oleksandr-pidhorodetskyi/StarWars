import { Oval } from 'react-loader-spinner';

const Loader = () => {
	return (
		<div className='flex justify-center items-center h-full'>
			<Oval
				height={60}
				width={60}
				color='#fcdf2b'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
				ariaLabel='oval-loading'
				secondaryColor='#fcdf2b'
				strokeWidth={4}
				strokeWidthSecondary={4}
			/>
		</div>
	);
};

export default Loader;
