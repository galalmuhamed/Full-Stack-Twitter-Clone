import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box
}
body {
	font-family: 'Poppins', sans-serif
}

`;
export default GlobalStyles;

export const mainColorLogo = '#1DA1F2';

export const Button = styled.button`
	width: 80%;
	display: flex;
	justify-content: center;
	margin: 10px auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 20px;
	background-color: #1da1f2;
	color: white;
	font-weight: 600;
	font-family: 'Poppins', sans-serif;
	cursor: pointer;
	transition: 0.5s ease;
	&:hover {
		filter: brightness(0.85);
	}
`;
export const Img = styled.img`
	width: 50px;
	border-radius: 50%;
`;

/*
font-family: 'Poppins', sans-serif;
font-family: 'Roboto', sans-serif;

border #e6ecf0
*/

/*
#cfd9de
*/
