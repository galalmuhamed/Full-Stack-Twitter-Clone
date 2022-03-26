import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideBarContainer = styled.div`
	flex: 0.3;
	border-right: 1px solid #e6ecf0;
	padding: 20px 0;
	position: sticky;
	top: 0;
	display: flex;
	flex-direction: column;
	height: 100vh;
	z-index: 5;
	@media only screen and (max-width: 750px) {
		& {
			flex: 0;
			bottom: 0;
			flex-direction: row;
			background-color: whitesmoke;
			justify-content: center;
			align-items: center;
			padding: 0;
			border-right: none;
		}
	}
`;

export const Top = styled.div`
	flex: 0.3;
	@media only screen and (max-width: 750px) {
		& {
			display: none;
		}
	}
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	padding: 10px;
	font-size: 30px;
	color: #1da1f2;
	border-radius: 50%;
	margin-bottom: 20px;
	&:hover {
		cursor: pointer;
		background-color: #e8f5fe;
	}
	@media only screen and (max-width: 750px) {
		& {
			justify-content: center;
			width: auto;
			border-radius: 20px;
		}
	}
`;

export const Center = styled.div`
	flex: 0.4;
	@media only screen and (max-width: 750px) {
		& {
			display: flex;
			justify-content: space-around;
			flex: 0.5;
		}
	}
`;

export const Links = styled(NavLink)`
	display: flex;
	align-items: center;
	color: black;
	text-decoration: none;
	margin: 10px 0;
	padding: 10px;
	border-radius: 20px;
	transition: 0.5s ease;
	& > :nth-child(1) {
		margin-right: 15px;
		font-size: 25px;
		@media only screen and (max-width: 750px) {
			& {
				margin-right: 0;
			}
		}
	}
	&:hover {
		background-color: #e8f5fe;
		color: #1da1f2;
	}
	&.active {
		font-weight: bold;
		color: #1da1f2;
	}
	@media only screen and (max-width: 750px) {
		& {
			justify-content: center;
			padding: 0;
		}
	}
`;
export const Paragraph = styled.p`
	font-size: 20px;
	@media only screen and (max-width: 750px) {
		& {
			display: none;
		}
	}
`;

export const Bottom = styled.div`
	flex: 0.3;
	display: flex;
	align-items: flex-end;

	@media only screen and (max-width: 750px) {
		& {
			flex: 0.5;
			justify-content: center;
		}
	}
`;
export const BottomContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 10px;
	position: relative;
	border-radius: 20px;
	&:hover {
		background-color: #e8f5fe;
	}
`;
export const UserInfo = styled.div`
	font-size: 12px;
	font-weight: 600;
	text-transform: capitalize;
	margin-left: 20px;
	& > :nth-child(2) {
		color: darkgray;
	}
	@media only screen and (max-width: 750px) {
		& {
			display: none;
		}
	}
`;
export const LogOutContainer = styled.div`
	position: absolute;
	top: -160px;
	left: 0;
	width: 100%;
	border-radius: 20px;
	background-color: whitesmoke;
	padding: 15px 0;
	box-shadow: 0px 0px 10px 4px rgb(159 159 159 / 75%);
	z-index: 6;
	@media only screen and (max-width: 750px) {
		& {
			top: -160px;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
		}
	}
`;
export const UserInfoTwo = styled.div`
	display: flex;
	align-items: center;
	padding: 10px;
	border-bottom: 1px solid #e6ecf0;
	& > :nth-child(2) {
		font-size: 12px;
		font-weight: 600;
		text-transform: capitalize;
		margin-left: 20px;
		& > :nth-child(2) {
			color: darkgray;
		}
	}
`;
export const LogOutBtn = styled.div`
	font-size: 12px;
	font-family: 'Roboto', sans-serif;
	margin-top: 10px;
	padding: 10px;
	cursor: pointer;
	&:hover {
		background-color: #ffffff91;
	}
`;
