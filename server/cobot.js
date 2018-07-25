const request = require('request');
const env = require('./env');

const api = (uri, body = null, method = 'POST', custom_opts = {}) => new Promise((resolve, reject) => {
	const opts = {
		method,
		uri,
		json: true,
		jar: true,
		...custom_opts,
	};
	
	if (null !== body) {
		opts.body = body;
	}
	
	console.log(`Calling ${opts.uri}`);
	
	request(opts, (err, response, body) => {
		if (err) {
			return reject(err);
		}
		
		if (!body) {
			return resolve(null);
		}
		
		console.log(body);
		
		if (body.error) {
			return reject(body);
		}
		
		return resolve(body);
	});
});

const spaceApi = (path, body = null, method = 'POST', opts = {}) => api(`${env.cobot_api_url}${path}`, body, method, opts);

const login = (username, password) => {
	return api(`https://www.cobot.me/oauth/access_token?`, {
		scope: 'create_password_resets read_custom_fields read_memberships write_custom_fields',
		grant_type: 'password',
		client_id: env.cobot_client_id,
		client_secret: env.cobot_client_secret,
		username,
		password,
	});
};

module.exports = {
	membership: (username, password) => login(username, password)
		.then(({ access_token }) => {
			return spaceApi('/membership', null, 'GET', {
				headers: {
					'Authorization': `Bearer ${access_token}`,
				},
			});
		})
};
