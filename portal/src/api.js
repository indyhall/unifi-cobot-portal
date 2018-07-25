
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
	
	alert(`Calling ${url}`);
	console.log(url, body);
	
	return fetch(url, opts)
		.then(res => res.json())
		.then(data => {
			if (data.error) {
				throw data.error;
			}
			
			return data;
		});
};

export const guest = (mac, ap, email) => api('/guest', { mac, ap, email });

export const member = (mac, ap, email, password) => api('/member', { mac, ap, email, password });
