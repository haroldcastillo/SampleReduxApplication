import { all, fork } from "redux-saga/effects";
import userSaga from "./user";

function* rootSaga() {
	yield all([
		// Add other sagas here if you have more than one
		fork(userSaga),
	]);
}

export default rootSaga;
