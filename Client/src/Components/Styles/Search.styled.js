import styled from 'styled-components';
import { Img } from './Global.styled';
import { Link } from 'react-router-dom';
export const SearchContainer = styled.div`
	flex: 0.3;
	@media only screen and (max-width: 750px) {
		& {
			display: none;
		}
	}
`;
export const BoxContainer = styled.div`
	background-color: ${props => (props.offset === 0 ? 'white' : '#e2e2e259')};
	padding: 10px;
	position: sticky;
	top: 0;
	height: 50px;
`;
export const InputContainer = styled.div`
	background-color: white;
	display: flex;
	align-items: center;
	padding: 5px;
	border: 2px solid lightblue;
	border-radius: 20px;

	&:focus-within {
		border-color: #1da1f2;
		box-shadow: 0px 0px 10px 4px rgb(159 159 159 / 75%);
		color: #1da1f2;
	}
`;
export const Input = styled.input`
	width: 100%;
	margin-left: 10px;
	border: none;
	outline: none;
	background-color: white;
	color: black;
`;

export const OlContainer = styled.ol`
	padding: 15px 0;
	list-style: none;
	border-radius: 20px;
`;

export const Card = styled.li`
	display: flex;
	align-items: center;
	padding: 5px;
	&:hover {
		background-color: whitesmoke;
	}
`;

export const SearchImg = styled(Img)`
	width: 30px;
	margin-right: 15px;
`;
export const CardInfo = styled.div`
	& > p {
		font-size: 12px;
		color: darkgray;
	}
`;
export const Links = styled(Link)`
	text-decoration: none;
	color: black;
	text-transform: capitalize;
	font-family: 'Roboto', sans-serif;
	display: block;
	&:hover {
		text-decoration: underline;
	}
`;
