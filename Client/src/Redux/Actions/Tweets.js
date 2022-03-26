import { RECIEVE_TWEETS, ADD_NEW_TWEET, api } from './actionTypes';

export const allTweets = tweets => {
	return {
		type: RECIEVE_TWEETS,
		tweets,
	};
};

export const addTweet = tweet => {
	return {
		type: ADD_NEW_TWEET,
		tweet,
	};
};

export const handleAddTweet = data => {
	return async dispatch => {
		try {
			const res = await api.post('/tweets', data);
			const tweet = await res.data;
			dispatch(addTweet(res.data));
			console.log(tweet);
			return tweet;
		} catch (err) {
			throw new Error(`Cannot Add New Tweet ${err}`);
		}
	};
};
