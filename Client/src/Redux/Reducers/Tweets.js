import { RECIEVE_TWEETS, ADD_NEW_TWEET } from '../Actions/actionTypes';
const Tweets = (state = [], action) => {
	switch (action.type) {
		case RECIEVE_TWEETS:
			return action.tweets;
		case ADD_NEW_TWEET:
			return state.concat([action.tweet]);
		default:
			return state;
	}
};

export default Tweets;
