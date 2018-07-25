import React, { Component } from 'react';
import qs from 'qs';
import bugsnag from 'bugsnag-js';
import createPlugin from 'bugsnag-react';
import logo from "./logo.png";
import Login from "./Login";

const query = qs.parse(window.location.search, { ignoreQueryPrefix: true });

export default class App extends Component {
	render() {
		const {
			id,   // Client MAC Address
			ap,   // MAC Address of Access Point
			t,    // Current Unix Timestamp
			url,  // Attempted URL
			ssid, // SSID of connection
		} = query;
		
		const bugsnagClient = bugsnag('7492120eeac8aa6ad2a56582a54d5889');
		const ErrorBoundary = bugsnagClient.use(createPlugin(React));
		
		return (
			<ErrorBoundary>
				<div className="mx-auto my-8 px-4" style={ { maxWidth: 500 } }>
					<div>
						<img
							src={ logo }
							width={ 150 }
							className="block mx-auto"
						/>
					</div>
					
					<div className="my-4 p-2 bg-white border border-grey rounded shadow">
						
						{ id && <Login mac={ id } url={ url } ap={ ap } t={ t } ssid={ ssid } /> }
						
						{ !id && (
							<p className="text-grey-darker mx-2 my-4 leading-normal">
								<strong>We don't recognize this device </strong> and no address
								information appears to be available. Please make sure you are connected
								to the correct network and try again.
							</p>
						) }
					
					</div>
				</div>
			</ErrorBoundary>
		);
	}
}
