const path = require('path');
const dotenv = require('dotenv');
const checkenv = require('checkenv');

// Load .env for project
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Check that required env is set
checkenv.check();
