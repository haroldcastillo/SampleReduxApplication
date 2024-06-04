import { all, fork } from "redux-saga/effects";
// import authSaga from "./auth";
// import ofAccountSaga from "./ofAccount";
import userSaga from "./user";
// import ofClientSaga from "./ofClient";

function* rootSaga() {
	yield all([
		// Add other sagas here if you have more than one
		fork(userSaga),
	]);
}

export default rootSaga;
