import React, { Component } from 'react';
import { Formik } from 'formik';
import Button from './Button';
import Input from './Input';
import InputLabel from './InputLabel';
import { member } from './api';

const Form = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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
		/>
		
		<InputLabel>
			Password:
		</InputLabel>
		
		<Input
			type="password"
			name="password"
			onChange={ handleChange }
			onBlur={ handleBlur }
			value={ values.password }
		/>
		
		{ touched.password && errors.password && (
			<div className="text-red mb-2">
				{ errors.password }
			</div>
		)}
		
		<Button type="submit" disabled={ isSubmitting }>
			Add this device to my account
		</Button>
	</form>
);

const validate = values => {
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

const initialValues = {
	email: '',
	password: '',
};

export default class MemberForm extends Component {
	render() {
		return (
			<Formik
				initialValues={ initialValues }
				validate={ validate }
				onSubmit={ this.onSubmit.bind(this) }
				render={ Form }
			/>
		);
	}
	
	onSubmit(values, { setSubmitting, setErrors }) {
		member(values.email, values.password)
			.then(result => {
				console.log(result);
				setSubmitting(false);
			});
	}
}
