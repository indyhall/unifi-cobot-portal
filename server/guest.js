const unifi = require('./unifi');

module.exports = (req, res) => {
	unifi.authorizeMac(req.body.mac, 1)
		.then(result => res.json(result))
		.catch(error => res.json({ error }));
};
