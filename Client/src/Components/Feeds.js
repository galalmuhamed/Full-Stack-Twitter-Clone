import React from 'react';
import { FeedContainer, TweetsContainer } from './Styles/Feeds.styled';
import NewTweet from './NewTweet';
import { useSelector } from 'react-redux';
import Tweet from './Tweet';

const Feeds = () => {
	const tweets = useSelector(state => state.Tweets);
	const sortedTweet = tweets.sort(
		(a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp)
	);

	return (
		<FeedContainer>
			<NewTweet />
			<TweetsContainer>
				{sortedTweet.map(tweet => (
					<Tweet key={tweet.id} id={tweet.id} />
				))}
			</TweetsContainer>
		</FeedContainer>
	);
};

export default Feeds;
