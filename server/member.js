
const unifi = require('./unifi');
const cobot = require('./cobot');

module.exports = (req, res) => {
	
	const { mac, ap, email, password } = req.body;
	
	cobot.membership(email, password)
		.then(membership => {
			console.log(membership.name);
			
			return unifi.authorizeMac(mac);
		})
		.then(authorization => {
			console.log(authorization);
			
			return res.json({
				url: 'https://hello.indyhall.org/'
			});
		})
		.catch(error => {
			res.json({
				error: `Unable to log in with "${email}" and the provided password.`,
			});
		});
};
