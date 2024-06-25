import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCH_USERS_LIST_START,
  FETCH_USERS_LIST_SUCCESS,
	FETCH_USERS_LIST_FAILURE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_SUCCESS
} from "../actions/user.js";

const initialState = {
  user:{
    data:{},
    isloading:false,
    isError:false,
  },
	usersList:{
    data:[],
    isloading:false,
    isError:false,
  }
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        user:{
          ...state.user,
          isloading:true
        }
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user:{
          ...state.user,
          data: action.payload,
          isloading:false
        }
      }
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        user:{
          ...state.user,
          isError: action.payload.error,
          isloading:false
        }
      }


		case FETCH_USERS_LIST_START:
			return {
				...state,
        usersList:{
          ...state.usersList,
          isloading:true,
        }
			};
		case FETCH_USERS_LIST_SUCCESS:
			return {
				...state,
        usersList:{
          ...state.usersList,
          data: action.payload,
          isloading: false,
        }
			};
		case FETCH_USERS_LIST_FAILURE:
			return {
				...state,
        usersList:{
          ...state.usersList,
          isloading: false,
          isError: action.payload.error,
        }
			};
  
    case DELETE_USER:
      return{
        ...state
      }
    case DELETE_USER_SUCCESS:
      return{
        ...state,
        usersList:{
          ...state.usersList,
          data: state.users.data.filter(user=>user._id!==action.payload._id)
        }
      }
    case UPDATE_USER:
      return{
        ...usersList
      }
    case UPDATE_USER_SUCCESS:
      return{
        ...state,
        usersList:{
          ...state.usersList,
          data: state.users.data.map(user=>user._id===action.payload._id?action.payload:user)
        }
      }
		default:
			return state;
	}
};
