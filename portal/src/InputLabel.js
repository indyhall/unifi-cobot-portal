import React from 'react';

export default ({ className = '', children, ...props }) => {
	return <label className={`block my-2 mt-4 font-bold ${className}`} {...props}>{children}</label>;
};
