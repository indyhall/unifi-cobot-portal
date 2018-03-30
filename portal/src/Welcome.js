import React, { Component } from 'react';

// ?id=40:98:ad:35:84:aa&ap=44:d9:e7:f9:10:a5&t=1522438663&url=http://neverssl.com%2f&ssid=Testing+Captive

export default class Welcome extends Component {
	render() {
		return (
			<div className="text-center">
				<h1 className="py-2">
					Welcome to Indy Hall!
				</h1>
				<p>
					Either you're a guest, or we don't recognize this device. Please
					log in below (members only have to log in once per device; guest
					have to log in each time they visit).
				</p>
				
				<pre>
					{ window.location.search }
				</pre>
			</div>
		);
	}
}
