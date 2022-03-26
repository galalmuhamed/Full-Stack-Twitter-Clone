import styled from 'styled-components';
import { Button } from './Global.styled';
export const LoginContainer = styled.div`
	display: flex;
	width: 100%;
	min-height: 100vh;
	@media only screen and (max-width: 750px) {
		& {
			flex-direction: column-reverse;
		}
	}
`;
export const Left = styled.div`
	flex: 0.6;
	position: relative;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Logo = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
	& > .twitterLogoLeft {
		color: white;
		font-size: 350px;
	}
	@media only screen and (max-width: 1000px) {
		& > .twitterLogoLeft {
			font-size: 200px;
		}
	}
`;
export const Right = styled.div`
	flex: 0.4;
	padding: 40px;
	padding-bottom: 0;

	& > .twitterLogoRight {
		color: #1da1f2;
		font-size: 50px;
		margin-bottom: 40px;
	}
`;

export const Title = styled.h1`
	font-size: 70px;
	margin-bottom: 30px;
	font-family: 'Roboto', sans-serif;
	@media only screen and (max-width: 1000px) {
		& {
			font-size: 50px;
		}
	}
`;
export const SubTitle = styled.h2`
	font-family: 'Roboto', sans-serif;
	margin-bottom: 10px;
`;

// signIn sign UP

export const Form = styled.form`
	width: 100%;
`;

export const FLContainer = styled.div`
	width: 100%;
	display: flex;
	& > :nth-child(1) {
		margin-right: 5px;
	}
`;

export const FormGroup = styled.div`
	width: 100%;
	margin: 5px 0;
	border: 2px solid lightblue;
	border-radius: 10px;
	padding: 5px 10px;
	display: flex;
	align-items: center;
	min-height: 50px;
	&:focus-within {
		border-color: #1da1f2;
		box-shadow: 0px 0px 10px 4px rgb(159 159 159 / 75%);
	}
	& > .select {
		border: none;
		width: 100%;
		background-color: white;
		text-align: center;
		outline: none;
		padding: 5px;
		font-family: 'Poppins', sans-serif;
	}
	&.error {
		border-color: red;
		font-size: 11px;
		font-weight: 600;
	}
`;
export const Label = styled.label`
	display: inline-block;
	width: 120px;
	font-family: 'Roboto', sans-serif;
	font-size: 15px;

	@media only screen and (max-width: 750px) {
		& {
			width: 60px;
			font-size: 12px;
		}
	}
`;
export const Input = styled.input`
	border: none;
	outline: none;
	padding: 5px;
	background-color: white;
	width: 100%;
`;

export const Avatars = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	& > img {
		width: 40px;
		margin: 0 10px;
		border-radius: 50%;
		opacity: 0.5;
		cursor: pointer;
		transition: 0.5s ease;
		&:hover {
			opacity: 1;
		}
		@media only screen and (max-width: 750px) {
			& {
				margin: 0 5px;
				width: 35px;
			}
		}
	}
	& #selected {
		opacity: 1;
	}
`;

export const ButtonOne = styled(Button)`
	${Button}
`;
export const ButtonTwo = styled(Button)`
	display: block;
	color: #1da1f2;
	margin: 10px 0;
	width: 200px;
	background-color: white;
	border: 1px solid grey;
	${Button};
	&:hover {
		filter: brightness(0.95);
	}
`;
export const Paragraph = styled.p`
	font-family: 'Roboto', sans-serif;
`;
