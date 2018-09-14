import Axios from 'axios';

const axios = Axios.create({
	baseURL: 'http://localhost:8080/',
});

let auth = localStorage.getItem('auth');
if (auth) {
	auth = JSON.parse(auth);
	axios.defaults.headers.common.Authorization = `Bearer ${auth.token}`;
}

axios.interceptors.response.use(null, (err) => {
	console.log('interceptor called');
	console.log(err.response);
	if (err.response && err.response.status === 401 && err.response.data.message.includes('jwt expired')) {
		axios.post('/auth/refresh', { refreshToken: JSON.parse(localStorage.getItem('auth')).refreshToken })
			.then((res) => {
				axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
				err.config.headers.Authorization = `Bearer ${res.data.token}`;
				return axios.request(err.config);
			})
			.catch((e) => {
				console.error(`Error refreshing token: ${e}`);
			});
	}

	return Promise.reject(err);
});
export default axios;
