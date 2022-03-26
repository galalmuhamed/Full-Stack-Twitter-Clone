import { RECIEVE_REPLIES, ADD_REPLIES, api } from './actionTypes';

export const allReplies = replies => {
	return {
		type: RECIEVE_REPLIES,
		replies,
	};
};

const addReplies = reply => {
	return {
		type: ADD_REPLIES,
		reply,
	};
};
export const handleAddReplay = data => {
	return async dispatch => {
		try {
			return api.post('/replies', data).then(res => {
				dispatch(addReplies(res.data));
				console.log(res.data);
			});
		} catch (err) {
			throw new Error(`Cannot Create Replay ${err}`);
		}
	};
};
