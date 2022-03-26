import React from 'react';
import { useState } from 'react';
import {
	LoginContainer,
	Left,
	Image,
	Logo,
	Right,
	Title,
} from '../Components/Styles/Login.styled';
import { BsTwitter } from 'react-icons/bs';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';

const Login = () => {
	const [sign, setSign] = useState('signUp');
	return (
		<LoginContainer>
			<Left>
				<Image src="/images/twitter_background.png" />
				<Logo>
					<BsTwitter className="twitterLogoLeft" />
				</Logo>
			</Left>
			<Right>
				<BsTwitter className="twitterLogoRight" />
				<Title>Happening now</Title>
				{sign === 'signUp' ? (
					<SignUp setSign={setSign} />
				) : (
					<SignIn setSign={setSign} />
				)}
			</Right>
		</LoginContainer>
	);
};

export default Login;
