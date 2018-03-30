
export const redirect = () => {
	const opts = {
		headers: {
			'Accept': 'application/json'
		}
	};
	
	return fetch('/redirect', opts).then(res => res.json());
};

export const guest = (email) => {
	const opts = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify({
			email
		})
	};
	
	return fetch('/guest', opts).then(res => res.json());
};
