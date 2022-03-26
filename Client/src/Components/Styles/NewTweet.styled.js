import styled from 'styled-components';
import { Button } from './Global.styled';
import { Link } from 'react-router-dom';

export const NewTweetContainer = styled.form`
	margin-top: 10px;
	width: 100%;
	display: flex;
	border-bottom: 1px solid #e6ecf0;
	padding: 10px;
`;
export const ImgContainer = styled(Link)`
	margin-right: 10px;
`;

export const InputContainer = styled.div`
	width: 100%;
`;

export const TextArea = styled.textarea`
	width: 100%;
	margin-top: 10px;
	font-weight: 600;
	padding: 5px;
	outline: none;
	border: none;
	letter-spacing: 1px;
	font-family: 'Roboto', sans-serif;
	resize: none;
`;
export const ButtonContainer = styled.div`
	margin-top: 5px;
	border-top: 1px solid #e6ecf0;
	display: flex;
	justify-content: space-between;
	padding: 5px 10px;
`;
export const EmojiContainer = styled.div`
	position: relative;
	& > .pickerIcon {
		color: #1da1f2;
		cursor: pointer;
		&:hover {
			filter: brightness(0.85);
		}
	}
`;
export const NewTweetButton = styled(Button)`
	width: 100px;
	margin: 0;
	${Button};
`;
