import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	background-color: white;
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 10px;
	position: relative;
	min-height: 100vh;
	@media only screen and (max-width: 750px) {
		& {
			flex-direction: column-reverse;
		}
	}
`;

export const Opacity = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 4;
`;
