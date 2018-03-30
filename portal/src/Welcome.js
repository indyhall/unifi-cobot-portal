import React, { Component } from 'react';

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
			</div>
		);
	}
}
