import axios from 'axios';

const getPosts = async (currentPage) => {
	const res = await axios.get(
		`https://swapi.dev/api/people?page=${currentPage}`
	);
	return res;
};
const getPost = async (type, id) => {
	const res = await axios.get(`https://swapi.dev/api/${type}/${id}`);
	return res;
};
const searchPosts = async (name) => {
	const res = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
	return res;
};
const changeSearchedPage = async (name, currentPage) => {
	const res = await axios.get(
		`https://swapi.dev/api/people/?search=${name}&page=${currentPage}`
	);
	return res;
};

export { getPosts, searchPosts, changeSearchedPage, getPost };
