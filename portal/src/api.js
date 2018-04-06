
import 'whatwg-fetch';

const api = (url, body) => {
	const opts = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify(body)
	};
	
	return fetch(url, opts)
		.then(res => res.json())
		.then(data => {
			if (data.error) {
				throw data.error;
			}
			
			return data;
		});
};

export const guest = (email) => {
	return api('/guest', { email });
};

export const member = (email, password) => {
	return api('/guest', { email, password });
};
