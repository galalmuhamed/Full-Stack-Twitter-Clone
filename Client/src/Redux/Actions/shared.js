import { allTweets } from './Tweets';
import { allUsers } from './Users';
import { allLikes } from './Likes';
import { allReplies } from './replies';
import { api } from './actionTypes';

export const handleIntialData = () => {
	return async dispatch => {
		try {
			return await Promise.all([
				api.get('/users'),
				api.get('/tweets'),
				api.get('/likes'),
				api.get('/replies'),
			]).then(([users, tweets, likes, replies]) => {
				console.log(users.data);
				console.log(tweets.data);
				console.log(likes.data);
				console.log(replies.data);
				dispatch(allUsers(users.data));
				dispatch(allTweets(tweets.data));
				dispatch(allLikes(likes.data));
				dispatch(allReplies(replies.data));
			});
		} catch (err) {
			throw new Error(`Cannot get All Data ${err}`);
		}
	};
};
