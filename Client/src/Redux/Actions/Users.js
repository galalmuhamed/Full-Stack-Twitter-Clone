import {
	RECEIVE_USERS,
	ADD_USER,
	SIGN_IN,
	api,
	UPDATE_FIRST_NAME,
	UPDATE_LAST_NAME,
} from './actionTypes';
import { authedUser } from './AuthedUser';

// get all users
export const allUsers = users => {
	return {
		type: RECEIVE_USERS,
		users,
	};
};

// add user
export const addUser = user => {
	return {
		type: ADD_USER,
		user,
	};
};
export const signIn = user => {
	return {
		type: SIGN_IN,
		user,
	};
};

export const handleAddUser = data => {
	return async dispatch => {
		try {
			return await api.post('/users', data).then(res => {
				console.log(res.data);
				dispatch(addUser(res.data));
				dispatch(authedUser(res.data.user_name));
			});
		} catch (err) {
			throw new Error(`Cannot Post ${err}`);
		}
	};
};

export const handleSignIn = data => {
	return async dispatch => {
		try {
			const res = await api.post('/users/authentication', data);
			const user = await res.data;
			console.log(user);
			dispatch(signIn(user));
			user && dispatch(authedUser(user.user_name));
			return user;
		} catch (err) {
			throw new Error(`Cannot Sign In ${err}`);
		}
	};
};

export const updateFirstName = (authedUser, firstName) => {
	return {
		type: UPDATE_FIRST_NAME,
		authedUser,
		firstName,
	};
};

export const handleFirstName = (user_name, firstName) => {
	return async dispatch => {
		try {
			dispatch(updateFirstName(user_name, firstName));
			const res = await api.put(`/users/${user_name}`, {
				first_name: firstName,
			});
			const user = await res.data;
			console.log(user);
		} catch (err) {
			throw new Error(`Cannot Sign In ${err}`);
		}
	};
};

export const updateLastName = (authedUser, lastName) => {
	return {
		type: UPDATE_LAST_NAME,
		authedUser,
		lastName,
	};
};
export const handleLastName = (user_name, lastName) => {
	return async dispatch => {
		try {
			dispatch(updateLastName(user_name, lastName));
			const res = await api.put(`/users/last/${user_name}`, {
				last_name: lastName,
			});
			const user = await res.data;
			console.log(user);
		} catch (err) {
			throw new Error(`Cannot Sign In ${err}`);
		}
	};
};
