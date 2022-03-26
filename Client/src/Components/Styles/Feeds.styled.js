import styled from 'styled-components';
import { ImgContainer } from './NewTweet.styled';
import { Link } from 'react-router-dom';
export const FeedContainer = styled.div`
	width: 100%;
`;

export const TweetsContainer = styled.ol`
	list-style: none;
`;
export const TweetContainer = styled.li`
	padding: 10px;
	border-bottom: 1px solid #e6ecf0;
	display: flex;
`;
export const ImgContainers = styled(ImgContainer)`
	${ImgContainer}
`;
export const Information = styled(Link)`
	width: 100%;
	color: black;
	text-decoration: none;
`;
export const UserName = styled.div`
	font-family: 'Roboto', sans-serif;
	& > :nth-child(1) {
		text-transform: capitalize;
		font-size: 14px;
		& > :nth-child(1) {
			text-transform: none;
			color: darkgray;
			font-size: 12px;
		}
	}
	& > :nth-child(2) {
		font-size: 11px;
		color: darkgray;
	}
`;
export const ReplyingTo = styled(Link)`
	font-size: 11px;
	color: darkgray;
	text-decoration: none;
	transition: 0.5s ease text-decoration;
	&:hover {
		text-decoration: underline;
	}
`;
export const Text = styled.div`
	margin-top: 5px;
	margin-left: 5px;
	font-weight: 600;
`;
export const ButtonsContainer = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-around;
`;
export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	& > span {
		margin-left: 10px;
		font-size: 12px;
		font-family: 'Roboto', sans-serif;
	}
	& > .heartIcon {
		color: red;
		cursor: pointer;
	}
`;
