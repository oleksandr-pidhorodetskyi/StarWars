const getId = (url) => {
	const array = url.split('/');
	return array[array.length - 2];
};

export default getId;
