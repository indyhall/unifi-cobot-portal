
const request = require('request');
const qs = require('qs');

module.exports = (req, res) => {
	
	const { email, password } = req.body;
	
	const query = qs.stringify({
		'scope': 'create_password_resets, read_custom_fields, read_memberships, and write_custom_fields',
		'grant_type': 'password',
		'username': email,
		'password': password,
		'client_id': process.env.COBOT_CLIENT_ID,
		'client_secret': process.env.COBOT_CLIENT_SECRET
	});
	
	const url = `https://www.cobot.me/oauth/access_token?${query}`;
	
	const opts = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
		},
	};
	
	fetch(url, opts)
		.then(result => result.json())
		.then(json => {
			res.json({
				req_url: url,
				...json
			});
		});
};
