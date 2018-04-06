import React, { Component } from 'react';
import Member from "./Member";
import Guest from './Guest';

const Tab = ({ selected, ...props }) => {
	const base = 'flex-1 px-4 py-2 text-center border-b-4';
	const classes = selected
		? 'border-yellow font-bold cursor-default'
		: 'border-grey-lighter text-grey-darker cursor-pointer hover:text-blue hover:underline';
	
	return <div className={ `${base} ${classes}` } { ...props } />;
};

export default class Login extends Component {
	state = {
		'view': 'member',
	};
	
	render() {
		const { view } = this.state;
		const { clientData } = this.props;
		
		return (
			<React.Fragment>
				
				<div className="flex mb-4">
					<Tab selected={ 'member' === view } onClick={ () => this.setState({ view: 'member' }) }>
						I'm a member
					</Tab>
					<Tab selected={ 'guest' === view } onClick={ () => this.setState({ view: 'guest' }) }>
						I'm a guest
					</Tab>
				</div>
				
				<div className="text-grey-darker mx-2 my-4 leading-normal">
					<strong>We don't recognize this device. </strong>
					Please log in (members only log in once per device; guest
					log in each visit).
				</div>
				
				<div className="mx-2 my-4">
					{ 'guest' === view ? <Guest clientData={ clientData } /> : <Member clientData={ clientData } /> }
				</div>
				
				<div className="text-grey-light text-sm font-mono pt-4 px-2 my-4 border-t">
					<strong>Device ID:</strong> { clientData.mac }
				</div>
			
			</React.Fragment>
		);
	}
}
