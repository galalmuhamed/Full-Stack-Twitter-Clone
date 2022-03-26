import styled from 'styled-components';
import { DashBoardContainer } from './DashBoard.styled';
import { Img, Button } from './Global.styled';

export const ProfileContainer = styled(DashBoardContainer)`
	${DashBoardContainer}
`;
export const CardContainer = styled.div`
	width: 100%;
	border-bottom: 1px solid #e6ecf0;
`;
export const BoxOne = styled.div`
	height: 150px;
	background-color: #cfd9de;
`;
export const BoxTwo = styled.div`
	padding: 10px;
	position: relative;
`;

export const ImgContainer = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	height: 40px;
`;
export const WhiteCircle = styled.div`
	position: absolute;
	top: -70px;
	background-color: white;
	padding: 3px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ImgProfile = styled(Img)`
	width: 100px;
	${Img};
`;
export const UpdateProfile = styled(Button)`
	display: block;
	width: 150px;
	height: 40px;
	margin: 0;
	${Button};
`;
export const UserInfo = styled.div`
	& > :nth-child(1) {
		font-family: 'Roboto', sans-serif;
		text-transform: capitalize;
		font-size: 18px;
	}
	& > :nth-child(2) {
		font-size: 12px;
		color: darkgray;
		font-weight: 600;
	}
`;

export const Joined = styled.div`
	margin-top: 10px;
	display: flex;
	align-items: center;
	color: #536471;
	& > p {
		font-size: 12px;
		margin-left: 5px;
		font-weight: 600;
		color: #687783;
	}
`;

export const SubTitle = styled.h3`
	margin-top: 10px;
	font-size: 14px;
	font-family: 'Roboto', sans-serif;
`;
// update Box
export const UpdateBoxContainer = styled.div`
	position: absolute;
	background-color: whitesmoke;
	border-radius: 20px;
	width: 100%;
	padding: 10px;
`;
export const Close = styled.div`
	text-align: right;
	padding: 0 10px;
	& > :nth-child(1) {
		cursor: pointer;
	}
`;
export const Title = styled.h3`
	text-align: center;
`;
export const InputContainer = styled.div`
	display: flex;
	align-items: center;

	& > input {
		width: 100%;
		border: none;
		background-color: transparent;
		outline: none;
		padding: 5px;
		border-bottom: 2px solid #e6ecf0;
	}

	& .check {
		color: limegreen;
		cursor: auto;
	}
`;

export const BtnContainer = styled.div`
	display: flex;
	justify-content: center;
`;
export const Btn = styled.button`
	display: flex;
	align-items: center;
	margin: 5px 10px;
	background-color: transparent;
	outline: none;
	border: none;
	cursor: pointer;
	font-size: 20px;
`;
