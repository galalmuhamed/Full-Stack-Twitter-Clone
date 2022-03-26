import { GET_ALL_LIKES, ADD_LIKES, REMOVE_LIKE, api } from './actionTypes';

export const allLikes = like => {
	return {
		type: GET_ALL_LIKES,
		like,
	};
};

const addLike = like => {
	return {
		type: ADD_LIKES,
		like,
	};
};

export const handleAddLike = data => {
	return async dispatch => {
		try {
			return await api.post('/likes', data).then(res => {
				console.log(res.data);
				dispatch(addLike(res.data));
			});
		} catch (err) {
			throw new Error(`Cannot Create Like ${err}`);
		}
	};
};

const removeLike = id => {
	return {
		type: REMOVE_LIKE,
		id,
	};
};

export const handleRemoveLike = id => {
	return async dispatch => {
		try {
			dispatch(removeLike(id));
			return await api.delete(`/likes/${id}`).then(res => {
				console.log(res);
			});
		} catch (err) {
			throw new Error(`Cannot Delete Like ${err}`);
		}
	};
};
