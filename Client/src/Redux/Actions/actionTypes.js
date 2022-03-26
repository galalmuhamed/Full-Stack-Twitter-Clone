import axios from 'axios';

export const api = axios.create({
	baseURL: `http://localhost:5000/`,
});

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECIEVE_TWEETS = 'RECIEVE_TWEETS';
export const GET_ALL_LIKES = 'GET_ALL_LIKES';
export const RECIEVE_REPLIES = 'RECIEVE_REPLIES';

export const SET_AUTHEDUSER = 'SET_AUTHEDUSER';
export const SIGN_IN = 'SIGN_IN';
export const LOG_OUT = 'LOG_OUT';

export const ADD_USER = 'ADD_USER';
export const ADD_NEW_TWEET = 'ADD_NEW_TWEET';
export const ADD_LIKES = 'ADD_LIKES ';
export const ADD_REPLIES = 'ADD_REPLIES ';

export const REMOVE_LIKE = 'REMOVE_LIKE';

export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
