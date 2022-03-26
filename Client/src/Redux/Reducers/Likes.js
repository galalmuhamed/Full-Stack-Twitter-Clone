import { GET_ALL_LIKES, ADD_LIKES, REMOVE_LIKE } from '../Actions/actionTypes';

const Likes = (state = [], action) => {
	switch (action.type) {
		case GET_ALL_LIKES:
			return action.like;
		case ADD_LIKES:
			return state.concat([action.like]);
		case REMOVE_LIKE:
			return state.filter(like => like.id !== action.id);
		default:
			return state;
	}
};

export default Likes;
