import React, { useState } from 'react';
import {
	NewTweetContainer,
	ImgContainer,
	InputContainer,
	TextArea,
	ButtonContainer,
	EmojiContainer,
	NewTweetButton,
} from './Styles/NewTweet.styled';
import { Img } from './Styles/Global.styled';
import Picker from 'emoji-picker-react';
import { BsEmojiSmile } from 'react-icons/bs';
import { handleAddTweet } from '../Redux/Actions/Tweets';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddReplay } from '../Redux/Actions/replies';
import { useNavigate } from 'react-router-dom';

const NewTweet = ({ id }) => {
	const [chosenEmoji, setChosenEmoji] = useState(false);
	const [newTweet, setNewTweet] = useState('');
	const dispatch = useDispatch();
	const authedUser = useSelector(state => state.AuthedUser);
	const users = useSelector(state => state.Users);
	const user = users.filter(u => u.user_name === authedUser);
	const onEmoji = (event, emojiObject) => {
		setNewTweet(prevState => prevState + emojiObject.emoji);
		setChosenEmoji(false);
	};
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		const data = handleAddTweet({
			text: newTweet,
			author: authedUser,
		});
		const tweet = await dispatch(data);

		id && dispatch(handleAddReplay({ parent_tweet: id, replies: tweet.id }));
		setNewTweet('');
		navigate('/');
	};
	return (
		<NewTweetContainer onSubmit={handleSubmit}>
			<ImgContainer to={`/${user[0].user_name}`}>
				<Img src={user[0].avatar_url} />
			</ImgContainer>
			<InputContainer>
				<TextArea
					placeholder="What's Happening?"
					rows="3"
					value={newTweet}
					onChange={e => setNewTweet(e.target.value)}
				/>
				<ButtonContainer>
					<EmojiContainer>
						<BsEmojiSmile
							className="pickerIcon"
							onClick={() => setChosenEmoji(!chosenEmoji)}
						/>
						{chosenEmoji && (
							<Picker
								pickerStyle={{
									width: '200px',
									height: '200px',
									position: 'absolute',
								}}
								onEmojiClick={onEmoji}
							/>
						)}
					</EmojiContainer>
					<NewTweetButton type="submit">Tweet</NewTweetButton>
				</ButtonContainer>
			</InputContainer>
		</NewTweetContainer>
	);
};

export default NewTweet;
