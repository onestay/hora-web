import Axios from 'axios';

const axios = Axios.create({
	baseURL: 'http://localhost:8080/',
});

let auth = localStorage.getItem('auth');
if (auth) {
	auth = JSON.parse(auth);
	axios.defaults.headers.common.Authorization = `Bearer ${auth.token}`;
}

axios.interceptors.response.use(null, err => new Promise((resolve, reject) => {
	if (err.response && err.response.status === 401 && err.response.data.message.includes('jwt expired')) {
		const { refreshToken } = JSON.parse(localStorage.getItem('auth'));
		axios.post('/auth/refresh', { refreshToken })
			.then((res) => {
				axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
				err.config.headers.Authorization = `Bearer ${res.data.token}`;
				localStorage.setItem('auth', JSON.stringify({
					refreshToken,
					token: res.data.token,
				}));

				resolve(axios(err.config));
			})
			.catch((e) => {
				console.error(`Error refreshing token: ${e}`);
			});
	} else {
		reject(err);
	}
}));
export default axios;
