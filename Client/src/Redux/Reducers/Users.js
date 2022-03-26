import {
	RECEIVE_USERS,
	ADD_USER,
	UPDATE_FIRST_NAME,
	UPDATE_LAST_NAME,
} from '../Actions/actionTypes';

const Users = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return action.users;
		case ADD_USER:
			return state.concat([action.user]);
		case UPDATE_FIRST_NAME:
			return state.map(user =>
				user.user_name !== action.authedUser
					? user
					: Object.assign({}, user, { first_name: action.firstName })
			);
		case UPDATE_LAST_NAME:
			return state.map(user =>
				user.user_name !== action.authedUser
					? user
					: Object.assign({}, user, { last_name: action.lastName })
			);

		default:
			return state;
	}
};
export default Users;
