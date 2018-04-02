import React from 'react';

export default ({ className = '', touched = false, errors = null, ...props }) => {
	const baseClasses = 'shadow appearance-none border rounded w-full p-3 text-grey-darker mb-2';
	const colorClasses = 'disabled' in props && props.disabled
		? 'bg-grey-lightest cursor-not-allowed'
		: 'bg-white';
	const errorClasses = touched && errors
		? 'border-red'
		: 'border-grey-dark';
	
	return (
		<React.Fragment>
			<input className={`${baseClasses} ${colorClasses} ${errorClasses} ${className}`} {...props} />
			
			{ touched && errors && (
				<div className="text-red mb-2">
					{ errors }
				</div>
			)}
		</React.Fragment>
	);
};
