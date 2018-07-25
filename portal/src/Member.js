import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
import InputLabel from './InputLabel';
import { member } from './api';

export default class Member extends Component {
	state = {
		submitting: false,
		values: {
			email: '',
			password: '',
		},
		errors: {
			email: null,
			password: null,
		},
		touched: {
			email: false,
			password: false,
		},
	};
	
	render() {
		
		const { values, errors, touched, submitting } = this.state;
		
		return (
			<div>
				<InputLabel>
					Email:
				</InputLabel>
				
				<Input
					placeholder="eg. you@gmail.com"
					type="email"
					name="email"
					onChange={ this.onChange('email') }
					onKeyPress={ this.onKeyPress }
					value={ values.email }
					touched={ touched.email }
					errors={ errors.email }
				/>
				
				<InputLabel>
					Password:
				</InputLabel>
				
				<Input
					type="password"
					name="password"
					onChange={ this.onChange('password') }
					onKeyPress={ this.onKeyPress }
					value={ values.password }
					touched={ touched.password }
					errors={ errors.password }
				/>
				
				<Button onClick={ this.onSubmit } disabled={ errors.email || errors.password || submitting }>
					Continue
				</Button>
			
			</div>
		);
	}
	
	onChange = key => event => {
		const { touched, values } = this.state;
		const nextValues = {
			...values,
			[key]: event.target.value
		};
		
		this.setState({
			values: nextValues,
			touched: {
				...touched,
				[key]: true,
			},
			errors: this.validate(nextValues),
		});
	};
	
	onKeyPress = event => {
		if ('Enter' === event.key) {
			this.onSubmit();
		}
	};
	
	validate = values => {
		const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
		let errors = {
			email: null,
			password: null,
		};
		
		if (!values.email) {
			errors.email = 'You must enter your email address.';
		} else if (!isEmail.test(values.email)) {
			errors.email = 'Please enter a valid email address.';
		}
		
		if (!values.password) {
			errors.password = 'You must enter your password.';
		}
		
		return errors;
	};
	
	onSubmit = () => {
		const { mac, ap, url } = this.props;
		const { errors, values } = this.state;
		const { email, password } = values;
		
		if (errors.email || errors.password) {
			return;
		}
		
		member(mac, ap, email, password)
			.then(result => {
				if (url) {
					window.location.href = url;
					return;
				}
				
				window.location.href = 'https://hello.indyhall.org';
			})
			.catch(err => {
				this.setState({
					submitting: false,
					errors: {
						email: err,
						password: null,
					},
				});
			});
	};
}
