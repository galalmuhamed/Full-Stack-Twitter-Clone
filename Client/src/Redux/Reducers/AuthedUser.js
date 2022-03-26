import { SET_AUTHEDUSER, LOG_OUT } from '../Actions/actionTypes';

const AuthedUser = (state = null, action) => {
	switch (action.type) {
		case SET_AUTHEDUSER:
			return action.user_name;
		case LOG_OUT:
			return null;
		default:
			return state;
	}
};
export default AuthedUser;
