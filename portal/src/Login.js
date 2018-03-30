import React, { Component, Fragment } from 'react';
import Welcome from "./Welcome";
import Guest from "./Guest";
import Member from "./Member";

const Option = ({ children, onClick = noop => noop }) => (
	<div
		className="flex-1 min-h-full border border-grey rounded shadow p-4 mx-4 group bg-white hover:shadow-lg cursor-pointer text-center"
		onClick={ () => onClick() }
		children={children}
	/>
);

export default class Login extends Component {
	state = {
		'kind': 'member',
	};
	
	render() {
		const { kind } = this.state;
		
		return (
			<Fragment>
				
				{ 'guest' === kind && <Guest /> }
				{ 'member' === kind && <Member /> }
				
				{ null !== kind && (
					<div className="my-8 text-right">
						<div className="text-blue no-underline cursor-pointer hover:underline" onClick={ () => this.setState({ kind: null }) }>
							Go Back
						</div>
					</div>
				) }
				
				{ null === kind && (
					<Fragment>
						<Welcome />
						
						<div className="flex mt-8">
							
							<Option onClick={ () => this.setState({ kind: 'guest' }) }>
								<div className="font-bold group-hover:text-blue group-hover:underline">
									I'm a guest
								</div>
								<div className="mt-2 text-grey-darker">
									I'm visiting a member, here for an event, checking the space out, etc.
								</div>
							</Option>
							
							<Option onClick={ () => this.setState({ kind: 'member' }) }>
								<div className="font-bold group-hover:text-blue group-hover:underline">
									I'm a member
								</div>
								<div className="mt-2 text-grey-darker">
									You only need to register your device once, and then you should never
									see this page again.
								</div>
							</Option>
						
						</div>
					
					</Fragment>
				) }
			</Fragment>
		);
	}
}
