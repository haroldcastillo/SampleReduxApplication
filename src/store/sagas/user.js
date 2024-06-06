import { takeLatest, put, call, all, fork } from "redux-saga/effects";
import {
  FETCH_USER_START,
	fetchUserFailure,
	fetchUserSuccess,
} from "../actions/user";



function* fetchUserSaga() {
	try {
		const user = yield call(fetch("https://jsonplaceholder.typicode.com/users".then(response => response.json())));
		yield put(fetchUserSuccess({ user }));
	} catch (error) {
		yield put(fetchUserFailure({ error }));
	}
}

function* watchFetchUserSaga() {
	yield takeLatest(FETCH_USER_START, fetchUserSaga);
}

export default function* userSaga() {
	yield all([
		fork(watchFetchUserSaga),
	]);
}
