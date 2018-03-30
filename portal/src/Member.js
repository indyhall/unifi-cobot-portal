import React, { Component } from 'react';
import MemberForm from "./MemberForm";

export default class Member extends Component {
	render() {
		return (
			<div className="pt-4 flex">
				
				<div className="flex-1" />
				
				<div className="flex-1">
					<MemberForm />
				</div>
				
				<div className="flex-1" />
			
			</div>
		);
	}
}
