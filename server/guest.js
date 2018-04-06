const unifi = require('./unifi');

module.exports = (req, res) => {
	unifi.authorizeMac(req.body.mac, req.body.ap, 1) // FIXME: Authorize for just 1 minute
		.then(result => res.json(result))
		.catch(error => res.json({ error }));
};
