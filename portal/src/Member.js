import React, { Component } from 'react';
import { Formik } from 'formik';
import Button from './Button';
import Input from './Input';
import InputLabel from './InputLabel';
import { member } from './api';

export default class Member extends Component {
	render() {
		return (
			<Formik
				render={ this.renderForm }
				validate={ this.validate }
				onSubmit={ this.onSubmit }
			/>
		);
	}
	
	renderForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid }) => {
		const validEmail = touched.email && !errors.email;
		const filledPassword = values.password && '' !== values.password;
		
		return (
			<form onSubmit={ handleSubmit }>
				<InputLabel>
					Email:
				</InputLabel>
				
				<Input
					placeholder="eg. you@gmail.com"
					type="email"
					name="email"
					onChange={ handleChange }
					onBlur={ handleBlur }
					value={ values.email }
					touched={ touched.email }
					errors={ errors.email }
				/>
				
				<div className={ validEmail ? 'block' : 'hidden' }>
					
					<InputLabel>
						Password:
					</InputLabel>
					
					<Input
						type="password"
						name="password"
						onChange={ handleChange }
						onBlur={ handleBlur }
						value={ values.password }
						touched={ touched.password }
						errors={ errors.password }
					/>
				
				</div>
				
				<Button type="submit" disabled={ isSubmitting || !isValid }>
					Continue
				</Button>
				
				{ validEmail && (
					<button className="rounded px-4 py-3 my-2 text-blue hover:underline cursor-pointer">
						I forgot my password
					</button>
				) }
			
			</form>
		);
	};
	
	validate = values => {
		const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
		let errors = {};
		
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
	
	onSubmit = (values, { setSubmitting, setErrors }) => {
		member(values.email, values.password)
			.then(result => {
				if (result.url) {
					window.location.href = result.url;
					return;
				}
				
				throw 'An unknown error occurred.';
			})
			.catch(err => {
				setSubmitting(false);
				setErrors({
					email: err
				});
			});
	};
}
