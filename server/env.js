const path = require('path');
const dotenv = require('dotenv');
const checkenv = require('checkenv');

// Load .env for project
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Check that required env is set
checkenv.check();

module.exports = {
	port: process.env.PORT,
	db_path: process.env.DB_PATH || path.resolve(__dirname, '..', 'db.sqlite3'),
	cobot_api_url: process.env.COBOT_API_URL,
	cobot_client_id: process.env.COBOT_CLIENT_ID,
	cobot_client_secret: process.env.COBOT_CLIENT_SECRET,
	unifi_api_url: process.env.UNIFI_API_URL,
	unifi_user: process.env.UNIFI_USER,
	unifi_password: process.env.UNIFI_PASSWORD,
	unifi_site: process.env.UNIFI_SITE,
	host: process.env.HOST,
};
