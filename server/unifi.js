const request = require('request');
const env = require('./env');

const api = (path, body = null) => new Promise((resolve, reject) => {
	const opts = {
		method: 'POST',
		uri: `${env.unifi_api_url}${path}`,
		json: true,
		jar: true,
		agentOptions: {
			rejectUnauthorized: false // Allow self-signed cert
		}
	};
	
	if (null !== body) {
		opts.body = body;
	}
	
	console.log(`Calling ${opts.uri}`);
	
	request(opts, (err, response, body) => {
		if (err) {
			return reject(err);
		}
		
		if (!body) {
			return resolve(null);
		}
		
		console.log(body);
		
		if (body.meta && body.meta.rc && 'ok' !== body.meta.rc) {
			return reject(body.data);
		}
		
		return resolve(body.data);
	});
});

const login = () => api('/api/login', {
	username: env.unifi_user,
	password: env.unifi_password
});

const authorize = (mac, minutes = null) => {
	const body = {
		cmd: 'authorize-guest',
		mac
	};
	
	// if (null !== ap) {
	// 	body.ap_mac = ap;
	// }
	
	if (null !== minutes) {
		body.minutes = minutes;
	}
	
	return api(`/api/s/${env.unifi_site}/cmd/stamgr`, body);
};

const clients = () => api(`/api/s/${env.unifi_site}/stat/sta/`);

const logout = () => api('/logout');

// if (!$this->is_loggedin) return false;
// $json     = json_encode(['name' => $name]);
// $response = $this->exec_curl('/api/s/'.$this->site.'/upd/user/'.trim($user_id), 'json='.$json);
// return $this->process_response_boolean($response);

// stat_allusers
// 			$clients = $this->get_clients( $site->name );


// 								self::$unifi_connection->set_sta_name( $client->_id, $macs[ $client->mac ] );

// public function set_sta_name($user_id, $name = null)
// {
// 	if (!$this->is_loggedin) return false;
// 	$json     = json_encode(['name' => $name]);
// 	$response = $this->exec_curl('/api/s/'.$this->site.'/upd/user/'.trim($user_id), 'json='.$json);
// 	return $this->process_response_boolean($response);
// }

module.exports = {
	clients: () => new Promise((resolve, reject) => {
		login()
			.then(clients)
			.then(result => {
				resolve(result.map(client => ({
					[client.mac]: {
						hostname: client.hostname,
						ip: client.ip,
					}
				})));
				logout();
			})
			.catch(reject);
	}),
	authorizeMac: (mac, ap_mac = null, minutes = null) => new Promise((resolve, reject) => {
		console.log({ mac, ap_mac, minutes });
		login()
			.then(() => authorize(mac, minutes))
			.then(result => {
				resolve(result);
				logout();
			})
			.catch(reject);
	})
};
