import React from 'react';

export default ({ className = '', ...props}) => {
	const baseClasses = 'rounded px-6 py-3 my-2 text-white text-xl';
	const colorClasses = 'disabled' in props && props.disabled
		? 'bg-grey-dark cursor-not-allowed'
		: 'bg-yellow-dark hover:bg-black hover:shadow-md cursor-pointer';
	
	return 'href' in props
		? <a className={`${baseClasses} ${colorClasses} ${className}`} {...props} />
		: <button className={`${baseClasses} ${colorClasses} ${className}`} {...props} />
};
