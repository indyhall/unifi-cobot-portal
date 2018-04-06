const request = require('request');
const env = require('./env');

const api = (path, body = null) => new Promise((resolve, reject) => {
	const opts = {
		method: 'POST',
		uri: `${env.unifi_api_url}${path}`,
		json: true,
		jar: true,
		agentOptions: {
			rejectUnauthorized: false // Allow self-signed cert
		}
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
		
		if (body.meta && body.meta.rc && 'ok' !== body.meta.rc) {
			return reject(body.data);
		}
		
		return resolve(body.data);
	});
});

const login = () => api('/api/login', {
	username: env.unifi_user,
	password: env.unifi_password
});

const authorize = (mac) => api(`/api/s/${env.unifi_site}/cmd/stamgr`, {
	cmd: 'authorize-guest',
	mac
});

const clients = () => api(`/api/s/${env.unifi_site}/stat/sta/`);

const logout = () => api('/logout');

module.exports = {
	clients: () => new Promise((resolve, reject) => {
		login()
			.then(clients)
			.then(result => {
				resolve(result.map(client => ({
					[client.mac]: {
						hostname: client.hostname,
						ip: client.ip,
					}
				})));
				logout();
			})
			.catch(reject);
	}),
	authorizeMac: (mac) => new Promise((resolve, reject) => {
		login()
			.then(() => authorize(mac))
			.then(result => {
				resolve(true);
				console.log(result);
				logout();
			})
			.catch(reject);
	})
};
