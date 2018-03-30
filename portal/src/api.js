
export const redirect = () => {
	const opts = {
		headers: {
			'Accept': 'application/json'
		}
	};
	
	return fetch('/redirect', opts).then(res => res.json());
}
