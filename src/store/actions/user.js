export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const UPDATE_USER = "UPDATE_USER"
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"

export const fetchUser = () => {
  return {
    type: FETCH_USER_START,
  };
};

export const fetchUserSuccess = ({ user }) => ({
	type: FETCH_USER_SUCCESS,
	payload: {
		user,
	},
});

export const fetchUserFailure = ({ error }) => ({
	type: FETCH_USER_FAILURE,
	payload: {
		error,
	},
});



export const createUser = ({name,email}) => ({
	type: CREATE_USER,
  payload: {
    name,
    email
  },
});

export const createUserSuccess = ({_id,name,email}) => ({
	type: CREATE_USER_SUCCESS,
  payload: {
    _id,
    name,
    email
  },
});

export const deleteUser = ({id}) => ({
	type: DELETE_USER,
  payload: {
    id
  },
});

export const deleteUserSuccess = ({_id}) => ({
	type: DELETE_USER_SUCCESS,
  payload: {
    _id,  
  },
});

export const updateUser = ({id,name,email}) => ({
	type: UPDATE_USER,
  payload: {
    id,
    name,
    email
  },
});
export const updateUserSuccess = ({_id,name,email}) => ({
  type: UPDATE_USER_SUCCESS,
  payload: {
    _id,
    name,
    email
  }
})
