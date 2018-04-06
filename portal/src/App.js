import React, { Component } from 'react';
import qs from 'qs';
import logo from "./logo.png";
import Member from "./Member";
import Guest from './Guest';

const clientData = qs.parse(window.location.search, { ignoreQueryPrefix: true });

const Tab = ({ selected, ...props }) => {
	const base = 'flex-1 px-4 py-2 text-center border-b-4';
	const classes = selected
		? 'border-yellow font-bold cursor-default'
		: 'border-grey-lighter text-grey-darker cursor-pointer hover:text-blue hover:underline';
	
	return <div className={`${base} ${classes}`} {...props} />;
}

export default class App extends Component {
	state = {
		'view': 'member',
	};
	
	// ?id=40:98:ad:35:84:aa&ap=44:d9:e7:f9:10:a5&t=1522438663&url=http://neverssl.com%2f&ssid=Testing+Captive
	
	render() {
		const { view } = this.state;
		
		return (
			<div className="mx-auto my-8 px-4" style={{ maxWidth: 500 }}>
				<div>
					<img
						src={ logo }
						width={150}
						className="block mx-auto"
					/>
				</div>
				
				<div className="my-4 p-2 bg-white border border-grey rounded shadow">
					
					<div className="flex mb-4">
						<Tab selected={'member' === view} onClick={() => this.setState({ view: 'member' })}>
							I'm a member
						</Tab>
						<Tab selected={'guest' === view} onClick={() => this.setState({ view: 'guest' })}>
							I'm a guest
						</Tab>
					</div>
					
					<div className="text-grey-darker mx-2 my-4 leading-normal">
						<strong>We don't recognize this device. </strong>
						Please log in (members only log in once per device; guest
						log in each visit).
					</div>
					
					<div className="mx-2 my-4">
						{ 'guest' === view ? <Guest clientData={clientData} /> : <Member clientData={clientData} />  }
					</div>
					
				</div>
				
				<pre>{ JSON.stringify(clientData, null, 2) }</pre>
				
				{/*
				<div className="my-4 p-4 text-grey-darker text-sm">
					Need help?
				</div>
				*/}
			</div>
		);
	}
}
