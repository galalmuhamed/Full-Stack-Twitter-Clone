import React from 'react';
import {
	TweetContainer,
	ImgContainers,
	Information,
	UserName,
	ReplyingTo,
	Text,
	ButtonsContainer,
	IconContainer,
} from './Styles/Feeds.styled';
import { Img } from './Styles/Global.styled';
import { BiMessageRounded } from 'react-icons/bi';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { handleAddLike, handleRemoveLike } from '../Redux/Actions/Likes';

const Tweet = ({ id }) => {
	const dispatch = useDispatch();
	const users = useSelector(state => state.Users);
	const authedUser = useSelector(state => state.AuthedUser);
	const tweets = useSelector(state => state.Tweets);
	const allLikes = useSelector(state => state.Likes);
	const allReplies = useSelector(state => state.Replies);

	const tweeta = tweets.filter(tweet => tweet.id === id);
	const tweet = tweeta[0];

	//replying to to get author id
	const replying_To = allReplies.some(r => r.replies === id)
		? allReplies.filter(r => r.replies === tweet.id)
		: null;

	const data =
		replying_To && tweets.find(t => t.id === replying_To[0].parent_tweet);
	// replying to length
	const replyingLength = allReplies.some(r => r.parent_tweet === id)
		? allReplies.filter(r => r.parent_tweet === id)
		: null;
	//likes
	const likes = allLikes.filter(like => like.tweet_id === tweet.id);

	const allUserswhoLiked = likes.map(like => like.user_id);
	const hasLiked = allUserswhoLiked.includes(authedUser);
	//author
	const author = users.find(u => u.user_name === tweet.author);

	const timestamp = tweet.timestamp.slice(0, tweet.timestamp.length - 5);

	//to get hasLiked

	const handleAdd = e => {
		e.preventDefault();
		dispatch(
			handleAddLike({
				user_id: authedUser,
				tweet_id: tweet.id,
			})
		);
	};
	const handleRemove = e => {
		e.preventDefault();
		const like = likes.find(u => u.user_id === authedUser);
		dispatch(handleRemoveLike(like.id));
	};

	return (
		<TweetContainer>
			<ImgContainers to={`/${author.user_name}`}>
				<Img src={author.avatar_url} />
			</ImgContainers>
			<Information to={`/tweet/${tweet.id}`}>
				<UserName>
					<p>
						{`${author.first_name} ${author.last_name} `}
						<span>{`@${author.user_name}`}</span>
					</p>
					<p>{`${timestamp}`}</p>
					{data && (
						<ReplyingTo
							to={`/tweet/${data.id}`}
						>{`Replying To @${data.author}`}</ReplyingTo>
					)}
				</UserName>
				<Text>{tweet.text}</Text>
				<ButtonsContainer>
					<IconContainer>
						<BiMessageRounded />
						{replyingLength && replyingLength.length > 0 && (
							<span>{replyingLength.length}</span>
						)}
					</IconContainer>
					{hasLiked ? (
						<IconContainer onClick={handleRemove}>
							<BsHeartFill className="heartIcon" />
							{likes.length > 0 && <span>{likes.length}</span>}
						</IconContainer>
					) : (
						<IconContainer onClick={handleAdd}>
							<BsHeart className="heartIcon" />
							{likes.length > 0 && <span>{likes.length}</span>}
						</IconContainer>
					)}
				</ButtonsContainer>
			</Information>
		</TweetContainer>
	);
};

export default Tweet;
