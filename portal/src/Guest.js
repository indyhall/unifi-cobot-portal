import React, { Component } from 'react';
import GuestForm from "./GuestForm";

export default class Guest extends Component {
	render() {
		return (
			<div className="pt-4 flex">
				
				<div className="flex-1 mr-4">
					<h2 className="my-4">
						You are our guest
					</h2>
					
					<div className="text-grey-darker my-4">
						Be kind to each other, and to yourself. Create opportunities
						to collaborate with one another, and invite others to do so. Take
						care of our clubhouse as if it’s your home (or better). Leave spaces
						better than you found them. Encourage others in their endeavors, and
						respect each other’s privacy. Treat others with the professionalism,
						warmth, and respect with which you would like to be treated.
					</div>
					
				</div>
				
				<GuestForm />
				
			</div>
		);
	}
}
