import {
	FETCH_USER,
	FETCH_USER_FAILURE,
	FETCH_USER_SUCCESS,
} from "../actions/user.js";

const initialState = {
	user:[]
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER:
			return {
				...state,
				user: {
					...state.user,
					loading: true,
				},
			};

		case FETCH_USER_SUCCESS:
			return {
				...state,
				user: {
					...state.user,
					loading: false,
					data: action.payload.user,
				},
			};

		case FETCH_USER_FAILURE:
			return {
				...state,
				user: {
					...state.user,
					loading: false,
					error: action.payload.error,
				},
			};

		default:
			return state;
	}
};
