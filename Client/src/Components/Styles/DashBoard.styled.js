import styled from 'styled-components';
export const DashBoardContainer = styled.div`
	flex: 0.4;
	border-right: 1px solid #e6ecf0;
	@media only screen and (max-width: 750px) {
		& {
			flex: 1;
		}
	}
`;
export const HomeTitle = styled.h3`
	height: 50px;
	font-weight: 900;
	font-size: 20px;
	font-family: 'Roboto', sans-serif;
	padding: 10px;
	background-color: ${props => (props.offset === 0 ? 'white' : '#e2e2e259')};
	position: sticky;
	top: 0;
	text-transform: capitalize;
	z-index: 3;
`;
