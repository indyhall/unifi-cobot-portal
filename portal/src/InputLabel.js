import React, { Component } from 'react';

export default ({ className = '', ...props }) => {
	return <label
		className={`block my-2 mt-4 font-bold ${className}`}
		{...props}
	/>;
};
