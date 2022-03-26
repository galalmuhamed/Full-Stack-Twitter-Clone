import React from 'react';
import { FormGroup, Label } from './Styles/Login.styled';

const FormGroups = ({ labelId, text, className, children }) => {
	return (
		<FormGroup className={className}>
			<Label htmlFor={labelId}>{text}</Label>
			{children}
		</FormGroup>
	);
};

export default FormGroups;
