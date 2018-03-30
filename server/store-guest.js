module.exports = (req, res) => {
	return res.json({
		url: process.env.REDIRECT_TO,
	});
};
