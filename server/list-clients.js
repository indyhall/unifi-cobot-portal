const unifi = require('./unifi');

unifi.clients()
	.then(clients => {
		return clients.map(client => ({
			[client.mac]: {
				hostname: client.hostname,
				ip: client.ip,
			}
		}));
	})
	.then(clients => console.log(clients))
	.catch(err => console.error(err));
