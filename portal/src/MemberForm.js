import React, { Component } from 'react';
import { Formik } from 'formik';
import { member } from './api';

const Form = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
	<form onSubmit={ handleSubmit }>
		<label className="block mb-2 font-bold">
			Email:
		</label>
		
		<input
			className="appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-2"
			placeholder="eg. you@gmail.com"
			type="email"
			name="email"
			onChange={ handleChange }
			onBlur={ handleBlur }
			value={ values.email }
		/>
		
		<label className="block my-2 font-bold">
			Password:
		</label>
		
		<input
			className="appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-2"
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
		
		<button className="bg-blue rounded px-4 py-2 text-white hover:bg-blue-dark hover:shadow" type="submit" disabled={ isSubmitting }>
			Log In
		</button>
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
			<div className="flex-1 ml-4 p-4 border border-grey rounded bg-white shadow">
				<Formik
					initialValues={ initialValues }
					validate={ validate }
					onSubmit={ this.onSubmit.bind(this) }
					render={ Form }
				/>
			</div>
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
