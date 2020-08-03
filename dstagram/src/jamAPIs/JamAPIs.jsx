import axios from 'axios';

const Api = axios.create({
	baseURL: '',
});

Api.interceptors.request.use(
	(config) => {
		if (config.url.match('posts')) {
			config.headers['Authorization'] =
				'Bearer ' + window.localStorage.getItem('accessToken');
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default Api;
