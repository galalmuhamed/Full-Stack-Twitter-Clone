import React, { useState } from 'react';
import {
	SubTitle,
	Paragraph,
	Form,
	Input,
	ButtonOne,
	ButtonTwo,
} from './Styles/Login.styled';
import FormGroups from './FormGroup';
import { handleSignIn } from '../Redux/Actions/Users';
import { useDispatch, useSelector } from 'react-redux';

const SignIn = ({ setSign }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const dispatch = useDispatch();
	const users = useSelector(state => state.Users);
	const emails = users.map(user => user.email);

	const handleSubmit = async e => {
		e.preventDefault();

		if (email.trim() === '' || password.trim() === '') {
			setError('Cannot Email Or Password BE Empty');
		} else if (!emails.includes(email)) {
			setError('This Email Not Found');
		} else if (
			(await dispatch(
				handleSignIn({
					email,
					password,
				})
			)) === null
		) {
			setError('passowrd Is Incorrect');
		}
	};

	return (
		<>
			<SubTitle>Sign In For Twitter Now.</SubTitle>
			<Form onSubmit={handleSubmit}>
				<FormGroups labelId="email" text="Email:">
					<Input
						type="email"
						placeholder="Email"
						maxLength="50"
						value={email}
						onChange={e => setEmail(e.target.value)}
						autoComplete="off"
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
				<ButtonOne type="submit">Sign In</ButtonOne>
			</Form>
			<Paragraph>Rgister</Paragraph>
			<ButtonTwo onClick={() => setSign('signUp')}>Sign Up</ButtonTwo>
		</>
	);
};

export default SignIn;
