const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

require('./env');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'portal', 'build')));

app.post('/guest', require('./store-guest'));
app.post('/member', require('./store-member'));

app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '..', 'portal', 'build', 'index.html'));
});

app.listen(process.env.PORT, () => {
	console.log("Server running on port " + process.env.PORT);
});
