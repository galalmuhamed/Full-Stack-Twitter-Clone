import React from 'react';
import { Title, InputContainer, Btn } from './Styles/Profile.styled';
import { BsPlus, BsCheck } from 'react-icons/bs';

const UpdatedForm = ({ title, onSubmit, value, onChange, originalValue }) => {
	return (
		<form onSubmit={onSubmit}>
			<Title> {title} </Title>
			<InputContainer>
				<input value={value} onChange={onChange} />
				{value !== originalValue ? (
					<Btn type="submit">
						<BsPlus />
					</Btn>
				) : (
					<Btn>
						<BsCheck className="check" />
					</Btn>
				)}
			</InputContainer>
		</form>
	);
};

export default UpdatedForm;
