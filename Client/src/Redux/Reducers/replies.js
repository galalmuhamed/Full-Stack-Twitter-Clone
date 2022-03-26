import { RECIEVE_REPLIES, ADD_REPLIES } from '../Actions/actionTypes';

const Replies = (state = [], action) => {
	switch (action.type) {
		case RECIEVE_REPLIES:
			return action.replies;
		case ADD_REPLIES:
			return state.concat([action.reply]);
		default:
			return state;
	}
};

export default Replies;
