import { all, fork } from "redux-saga/effects";
import userSaga from "./user";
import productSaga from "./product";
function* rootSaga() {
	yield all([
		// Add other sagas here if you have more than one
		fork(userSaga),
    fork(productSaga),
	]);
}

export default rootSaga;
