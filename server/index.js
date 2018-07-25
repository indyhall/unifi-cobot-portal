const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const bugsnag = require('bugsnag');

const env = require('./env');

bugsnag.register('f2bba740a2b92df2bd6905e341792921');

const app = express();

app.use(bugsnag.requestHandler);
app.use(bugsnag.errorHandler);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'portal', 'build')));

app.post('/guest', require('./guest'));
app.post('/member', require('./member'));

const index = path.join(__dirname, '..', 'portal', 'build', 'index.html');
app.get(/.*/, (req, res) => res.sendFile(index));

app.listen(env.port, () => {
	console.log(`Server running on port "${env.port}"`);
});
