// import { createStore, applyMiddleware } from "redux";
import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
// import { createLogger } from "redux-logger";
import rootReducer from "./reducers/index.js";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer:rootReducer,
  middleware:()=>[sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export default store;
