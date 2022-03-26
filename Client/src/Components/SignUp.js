import React, { useState } from 'react';

import {
	SubTitle,
	Form,
	FLContainer,
	Avatars,
	Input,
	ButtonOne,
	Paragraph,
	ButtonTwo,
} from './Styles/Login.styled';
import FormGroups from './FormGroup';
import { avatars } from '../Utils/data';
import { handleAddUser } from '../Redux/Actions/Users';
import { useDispatch, useSelector } from 'react-redux';

const SignUp = ({ setSign }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [gender, setGender] = useState('Male');
	const [avatar, setAvatar] = useState('');
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const dispatch = useDispatch();
	const Users = useSelector(state => state.Users);
	const allUserName = Users.map(user => user.user_name);
	const allEmails = Users.map(user => user.email);

	const handleSubmit = e => {
		e.preventDefault();
		if (
			firstName.trim() === '' ||
			lastName.trim() === '' ||
			email.trim() === '' ||
			userName.trim() === '' ||
			avatar === '' ||
			gender.trim() === '' ||
			password.trim() === ''
		) {
			setError(
				"Your First/Last/User Name, avatar, email or Password Field can't be Empty"
			);
		} else if (allUserName.includes(userName)) {
			setError('Choose Unique User Name');
		} else if (allEmails.includes(email)) {
			setError('Choose Unique Email');
		} else {
			dispatch(
				handleAddUser({
					first_name: firstName,
					last_name: lastName,
					email: email,
					user_name: userName.split(' ').join('').toLowerCase(),
					avatar_url: avatar,
					gender: gender,
					password: password,
				})
			);
		}
		/*
		{
					first_name: firstName,
					last_name: lastName,
					email: email,
					user_name: userName.split(' ').join('').toLowerCase(),
					avatar_url: avatar,
					gender: gender,
					password: password,
				}
		*/
		setFirstName('');
		setLastName('');
		setUserName('');
		setEmail('');
		setAvatar('');
		setPassword('');
	};

	return (
		<>
			<SubTitle>Sign Up For Twitter Now.</SubTitle>
			<Form onSubmit={handleSubmit}>
				<FLContainer>
					<FormGroups labelId="firstName" text="First Name:">
						<Input
							type="text"
							placeholder="First Name"
							maxLength="20"
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
					</FormGroups>
					<FormGroups labelId="lastName" text="Last Name:">
						<Input
							type="text"
							placeholder="Last Name"
							maxLength="20"
							value={lastName}
							onChange={e => setLastName(e.target.value)}
						/>
					</FormGroups>
				</FLContainer>

				<FormGroups labelId="gender" text="Gender:">
					<select
						name="gender"
						id="gender"
						required
						value={gender}
						onChange={e => setGender(e.target.value)}
						className="select"
					>
						<option disabled>-choose-</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
				</FormGroups>

				<FormGroups labelId="avatar" text="Avatar:">
					<Avatars>
						{avatars.map((pic, idx) => (
							<img
								key={idx}
								src={pic.avatar}
								alt={pic.name}
								onClick={e => setAvatar(e.target.src)}
								id={
									avatar === `http://localhost:3000${pic.avatar}`
										? 'selected'
										: ''
								}
							/>
						))}
					</Avatars>
				</FormGroups>

				<FormGroups labelId="userName" text="User Name:">
					<Input
						type="text"
						placeholder="User Name Must be Unique"
						maxLength="50"
						value={userName}
						onChange={e => setUserName(e.target.value)}
					/>
				</FormGroups>
				<FormGroups labelId="email" text="Email:">
					<Input
						type="email"
						placeholder="Email"
						maxLength="50"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</FormGroups>

				<FormGroups labelId="password" text="Password:">
					<Input
						type="password"
						placeholder="Password"
						maxLength="20"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</FormGroups>
				{error && (
					<FormGroups labelId="Error" text="error" className="error">
						<p>{error}</p>
					</FormGroups>
				)}
				<ButtonOne type="submit">Sign Up</ButtonOne>
			</Form>
			<Paragraph>Already have an account?</Paragraph>
			<ButtonTwo onClick={() => setSign('signIn')}>Sign In</ButtonTwo>
		</>
	);
};

export default SignUp;
