import axios from 'axios';

const getPosts = async (currentPage) => {
	const res = await axios.get(
		`https://swapi.dev/api/people?page=${currentPage}`
	);
	return res;
};
export { getPosts };
