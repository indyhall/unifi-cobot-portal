import React, { Component } from 'react';
import Login from "./Login";

export default class App extends Component {
	render() {
		return (
			<div className="container mx-auto">
				<div className="py-4 flex justify-between items-center">
					<div className="flex-1" />
					<div className="flex-1 text-center">
						<img src="https://www.indyhall.org/images/indy-hall.png" height={100} alt="Indy Hall logo" />
					</div>
					<div className="flex-1 text-right">
						{/* <strong>Need help?</strong> */}
					</div>
				</div>
				
				<Login />
			</div>
		);
	}
}
