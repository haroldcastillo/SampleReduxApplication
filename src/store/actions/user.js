export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

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

