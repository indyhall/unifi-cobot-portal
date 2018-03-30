const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Load and check environment

require('./env');

// App

// https://www.cobot.me/oauth/authorize?response_type=code&client_id=<your app's client id>&redirect_uri=https://your-app.com/auth/callback&state=<optional parameter that gets passed back to you>&scope=<space separated scopes>

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'portal', 'build')));

app.get('/redirect', require('./redirect-to-cobot'));
app.post('/guest', require('./store-guest'));
app.post('/member', require('./store-member'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '..', 'portal', 'build', 'index.html'));
});

app.listen(process.env.PORT, () => {
	console.log("Server running on port " + process.env.PORT);
});
