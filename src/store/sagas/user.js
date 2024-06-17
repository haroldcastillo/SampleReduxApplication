import { takeLatest, put, call, all, fork } from "redux-saga/effects";
import {
  FETCH_USER_START,
	fetchUserFailure,
	fetchUserSuccess,
  CREATE_USER,
  createUserSuccess,
  DELETE_USER,
  deleteUserSuccess,
  UPDATE_USER,
  updateUserSuccess
} from "../actions/user";

import { 
  getUserList,
  createUser,
  updateUser,
  deleteUser 
} from "../apis/user";

{/* ====== Async Function SAGA ====== */ }
function* fetchUserSaga() {
  try {
    const response = yield call(getUserList);
    yield put(fetchUserSuccess({ user: response })); 
  } catch (error) {
    yield put(fetchUserFailure({ error: error.toString() }));
  }
}

function* createUserSaga(props) {
  try {
    const response = yield createUser(props.payload);
    yield put(createUserSuccess(response));
  } catch (error) {
    console.log(error);
  }
}
function* updateUserSaga(props) {
  try{
    const response = yield updateUser(props.payload);
    yield put(updateUserSuccess(response))
  }catch(error){
    console.log(error)
  }
}

function* deleteUserSaga(props) {
  try{
    const response = yield deleteUser(props.payload)
    console.log(response)
    yield put(deleteUserSuccess({_id:props.payload.id}))
  }catch(error){
    console.log(error)
  }
}


{/* ====== WATCHER SAGA ====== */ }
function* watchFetchUserSaga() {
	yield takeLatest(FETCH_USER_START, fetchUserSaga);
}
function* watchCreateUserSaga() {
	yield takeLatest(CREATE_USER, createUserSaga);
}
function* watchDeleteUserSaga() {
	yield takeLatest(DELETE_USER, deleteUserSaga);
}
function* watchUpdateUserSaga() {
  yield takeLatest(UPDATE_USER, updateUserSaga);
}

export default function* userSaga() {
	yield all([
		fork(watchFetchUserSaga),
    fork(watchCreateUserSaga),
    fork(watchDeleteUserSaga),
    fork(watchUpdateUserSaga),
	]);
}
