import { SET_AUTHEDUSER, LOG_OUT } from './actionTypes';

export const authedUser = user_name => {
	return {
		type: SET_AUTHEDUSER,
		user_name,
	};
};
export const logOut = () => {
	return {
		type: LOG_OUT,
	};
};
