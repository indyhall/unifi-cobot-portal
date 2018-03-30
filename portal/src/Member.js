import React, { Component } from 'react';
import { redirect } from './api';

export default class Member extends Component {
	state = {
		redirecting: false,
	};
	
	render() {
		const { redirecting } = this.state;
		
		const buttonClass = redirecting
			? 'bg-grey text-lg no-underline rounded px-8 py-4 text-white cursor-wait'
			: 'bg-blue text-lg no-underline rounded px-8 py-4 text-white hover:bg-blue-dark hover:shadow cursor-pointer';
		
		const buttonMessage = redirecting
			? 'Redirecting you to login…'
			: 'Connect as a member';
		
		return (
			<div className="pt-4">
				
				<h2 className="my-4">
					Add this device to your account
				</h2>
				
				<div className="text-grey-darker my-4">
					It looks like this is the first time you're logging into
					our network with this device. You should only have to log in once
					per device, and it will be permanently added to your account.
				</div>
				
				<div className="text-grey-darker my-4">
					To log in, you will be redirected to our membership &amp; billing
					system. Once you authorize this device, you will immediately get
					connected to the network.
				</div>
				
				<div className="mt-8 pt-4 text-center">
					<button onClick={ () => this.redirect() } disabled={ redirecting } className={buttonClass}>
						{ buttonMessage }
					</button>
				</div>
			
			</div>
		);
	}
	
	redirect() {
		this.setState({ redirecting: true });
		
		redirect().then(result => {
			if (result.url) {
				window.location.href = result.url;
				return;
			}
			
			this.setState({ redirecting: false });
			// TODO: Handle error state
		});
	}
}
