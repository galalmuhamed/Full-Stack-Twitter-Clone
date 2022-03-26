import React from 'react';
import { useParams } from 'react-router-dom';
import { TweetPageContainer } from '../Components/Styles/TweetPage.styled';
import Tweet from '../Components/Tweet';
import Title from '../Components/Title';
import { useSelector } from 'react-redux';
import NewTweet from '../Components/NewTweet';

const TweetPage = () => {
	const { id } = useParams();
	const allReplies = useSelector(state => state.Replies);
	const filterReplies = allReplies.filter(r => r.parent_tweet === id);

	console.log(id);
	console.log(allReplies);
	console.log(filterReplies);

	if (!id) {
		return <div>No Tweet Found</div>;
	}
	return (
		<TweetPageContainer>
			<Title title="Tweet" />
			<Tweet id={id} />
			<NewTweet id={id} />
			{filterReplies.length > 0 &&
				filterReplies.map(t => <Tweet key={t.id} id={t.replies} />)}
		</TweetPageContainer>
	);
};

export default TweetPage;
