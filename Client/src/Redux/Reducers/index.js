import { combineReducers } from 'redux';
import Users from './Users';
import AuthedUser from './AuthedUser';
import Tweets from './Tweets';
import Likes from './Likes';
import Replies from './replies';

export default combineReducers({
	Users,
	AuthedUser,
	Tweets,
	Likes,
	Replies,
});
