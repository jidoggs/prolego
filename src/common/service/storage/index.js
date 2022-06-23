import { STORAGE_KEYS } from "../config/constant";
// import {
// 	LoggedInUserDetails,
// 	LoggedOutUserDetails,
// } from "../../../modules/auth/types/session-model";

const getItem = (key) => {
	return localStorage.getItem(key) || null;
};
const removeItem = (key) => {
	return localStorage.removeItem(key) || null;
};

const setItem = (key, value) => {
	return localStorage.setItem(key, value);
};

export const clearData = () => localStorage.clear();

export const storeUserDetails = (userDetails) => {
	setItem(STORAGE_KEYS.USER_DETAILS_STORAGE_KEY, JSON.stringify(userDetails));
};

export const clearUserDetails = () => {
	removeItem(STORAGE_KEYS.USER_DETAILS_STORAGE_KEY);
	removeItem(STORAGE_KEYS.CLIENT_TOKEN_STORAGE_KEY)
}

export const fetchUserDetails = () => {
	let details = getItem(STORAGE_KEYS.USER_DETAILS_STORAGE_KEY);
	if (details) {
		return JSON.parse(details);
	}
	return { username: "", loggedIn: false };
};

export const storeUserToken = (token ) => {
	return setItem(STORAGE_KEYS.CLIENT_TOKEN_STORAGE_KEY, token);
};

export const fetchUserToken = () => {
	return getItem(STORAGE_KEYS.CLIENT_TOKEN_STORAGE_KEY);
};
