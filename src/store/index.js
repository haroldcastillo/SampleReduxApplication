import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import { createLogger } from "redux-logger";
import rootReducer from "./reducers/index.js";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
