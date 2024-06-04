import { takeLatest, put, call, all, fork } from "redux-saga/effects";
import {
  FETCH_USER,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
	fetchUserFailure,
	fetchUserSuccess,
} from "../actions/user";


function getUserInfo(){
  return fetch("https://jsonplaceholder.typicode.com/users".then(response => response.json()));
}

function* fetchUserSaga() {
	try {
		const user = yield call(getUserInfo);
		yield put(fetchUserSuccess({ user }));
	} catch (error) {
		yield put(fetchUserFailure({ error }));
	}
}

function* watchFetchUserSaga() {
	yield takeLatest(FETCH_USER, fetchUserSaga);
}

export default function* userSaga() {
	yield all([
		fork(watchFetchUserSaga),
	]);
}
