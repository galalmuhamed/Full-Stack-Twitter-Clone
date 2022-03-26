import React, { useState } from 'react';
import {
	UpdateBoxContainer,
	Close,
	BtnContainer,
	Btn,
} from './Styles/Profile.styled';
import { MdClose } from 'react-icons/md';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import UpdatedForm from './UpdatedForm';
import { handleFirstName, handleLastName } from '../Redux/Actions/Users';
import { useDispatch } from 'react-redux';
const UpdateBox = ({ user, setIsOpen }) => {
	const [count, setCount] = useState(0);
	const [firstName, setFirstName] = useState(user.first_name);
	const [lastName, setLastName] = useState(user.last_name);
	const [error, setError] = useState('');
	const title = ['First Name', 'Last Name'];
	const dispatch = useDispatch();

	const handleUpdateFirstName = e => {
		e.preventDefault();
		if (firstName === '') {
			setError('Cannot First Name Be Empty');
		} else {
			dispatch(handleFirstName(user.user_name, firstName));
			setError('');
		}
	};
	const handleUpdateLastName = e => {
		e.preventDefault();
		if (lastName === '') {
			setError('Cannot Last Name Be Empty');
		} else {
			dispatch(handleLastName(user.user_name, lastName));
		}
	};

	return (
		<UpdateBoxContainer>
			<Close>
				<MdClose onClick={() => setIsOpen(false)} />
			</Close>
			{count === 0 && (
				<UpdatedForm
					onSubmit={handleUpdateFirstName}
					title={title[0]}
					value={firstName}
					originalValue={user.first_name}
					onChange={e => setFirstName(e.target.value)}
				/>
			)}
			{count === 1 && (
				<UpdatedForm
					onSubmit={handleUpdateLastName}
					title={title[1]}
					value={lastName}
					originalValue={user.last_name}
					onChange={e => setLastName(e.target.value)}
				/>
			)}
			{error && <div>{error}</div>}
			<BtnContainer>
				<Btn
					disabled={count < 1}
					onClick={() => setCount(prevState => prevState - 1)}
				>
					<BsArrowLeft />
				</Btn>
				<Btn
					disabled={count === title.length - 1}
					onClick={() => setCount(prevState => prevState + 1)}
				>
					<BsArrowRight />
				</Btn>
			</BtnContainer>
		</UpdateBoxContainer>
	);
};

export default UpdateBox;
