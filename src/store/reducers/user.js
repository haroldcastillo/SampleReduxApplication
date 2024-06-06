import { data } from "autoprefixer";
import {
	FETCH_USER_START,
	FETCH_USER_FAILURE,
	FETCH_USER_SUCCESS,
} from "../actions/user.js";

const initialState = {
	user:{
    data:[],
    isloading:false,
    isError:false,
  }
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_START:
			return {
				...state,
        user:{
          ...state.user,
          isloading: true,
        }
			};

		case FETCH_USER_SUCCESS:
			return {
				...state,
        data: action.payload.data,
        isloading: false,
			};

		case FETCH_USER_FAILURE:
			return {
				...state,
        isError: action.payload.error,
        isloading: false,
			};

		default:
			return state;
	}
};
