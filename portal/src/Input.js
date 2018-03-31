import React, { Component } from 'react';

export default ({ className = '', ...props }) => {
	const baseClasses = 'shadow appearance-none border border-grey-dark rounded w-full p-3 text-grey-darker mb-2';
	const colorClasses = 'disabled' in props && props.disabled
		? 'bg-grey-lightest cursor-not-allowed'
		: 'bg-white';
	
	return (
		<input className={`${baseClasses} ${colorClasses} ${className}`} {...props} />
	);
};
