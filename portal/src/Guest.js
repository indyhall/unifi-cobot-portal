import React, { Component } from 'react';
import { Formik } from 'formik';
import Button from './Button';
import Input from './Input';
import InputLabel from './InputLabel';
import { guest } from './api';

export default class Guest extends Component {
	render() {
		return (
			<Formik
				render={ this.renderForm }
				validate={ this.validate }
				onSubmit={ this.onSubmit }
			/>
		);
	}
	
	renderForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
		<form onSubmit={ handleSubmit }>
			<InputLabel>
				What's your email address?
			</InputLabel>
			
			<Input
				placeholder="eg. you@gmail.com"
				type="email"
				name="email"
				onChange={ handleChange }
				onBlur={ handleBlur }
				value={ values.email }
			/>
			
			{ touched.email && errors.email && (
				<div className="text-red mb-2">
					{ errors.email }
				</div>
			) }
			
			<Button type="submit" disabled={ isSubmitting }>
				Connect for 24 hours
			</Button>
		</form>
	);
	
	validate = values => {
		const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
		let errors = {};
		
		if (!values.email) {
			errors.email = 'You must enter an email address.';
		} else if (!isEmail.test(values.email)) {
			errors.email = 'Please enter a valid email address.';
		}
		
		return errors;
	};
	
	onSubmit = (values, { setSubmitting, setErrors }) => {
		guest(values.email)
			.then(result => {
				if (result.url) {
					window.location.href = result.url;
					return;
				}
				
				setSubmitting(false);
				setErrors(result.errors || {
					email: 'An unknown error occurred.'
				});
			})
			.catch(err => {
				console.error(err);
				setSubmitting(false);
				
				setErrors({
					email: 'An unknown error occurred.'
				});
			});
	};
}
