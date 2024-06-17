import {
	FETCH_USER_START,
	FETCH_USER_FAILURE,
	FETCH_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  CREATE_USER,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS
} from "../actions/user.js";

const initialState = {
	users:{
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
        users:{
          ...state.users,
          isloading:true,
        }
			};
		case FETCH_USER_SUCCESS:
			return {
				...state,
        users:{
          ...state.users,
          data: action.payload.user,
          isloading: false,
        }
			};
		case FETCH_USER_FAILURE:
			return {
				...state,
        users:{
          ...state.users,
          isloading: false,
          isError: action.payload.error,
        }
			};
    case CREATE_USER:
      return{
        ...state,
      }
    case CREATE_USER_SUCCESS:
      return{
        ...state,
        users:{
          ...state.users,
          data: [...state.users.data,action.payload],
        }
      }
    case DELETE_USER:
      return{
        ...state
      }
    case DELETE_USER_SUCCESS:
      console.log(action.payload)
      return{
        ...state,
        users:{
          ...state.users,
          data: state.users.data.filter(user=>user._id!==action.payload._id)
        }
      }
    case UPDATE_USER:
      return{
        ...state
      }
    case UPDATE_USER_SUCCESS:
      return{
        ...state,
        users:{
          ...state.users,
          data: state.users.data.map(user=>user._id===action.payload._id?action.payload:user)
        }
      }
		default:
			return state;
	}
};
