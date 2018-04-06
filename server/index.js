const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const env = require('./env');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'portal', 'build')));

app.post('/guest', require('./guest'));
app.post('/member', require('./member'));

const index = path.join(__dirname, '..', 'portal', 'build', 'index.html');
app.get(/.*/, (req, res) => res.sendFile(index));

app.listen(env.port, () => {
	console.log(`Server running on port ${env.port}`);
});
