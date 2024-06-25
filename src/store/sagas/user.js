import { takeLatest, put, call, all, fork } from "redux-saga/effects";
import {
  LOGIN_USER_START,
  loginUserSuccess,
  loginUserFailure,
  FETCH_USERS_LIST_START,
  fetchUsersListSuccess,
  fetchUsersListFailure,
  CREATE_USER,
  createUserSuccess,
  DELETE_USER,
  deleteUserSuccess,
  UPDATE_USER,
  updateUserSuccess,
} from "../actions/user";

import {
  getUserList,
  createUser,
  updateUser,
  deleteUser 
} from "../apis/user";
import {
  login
} from "../apis/auth";

{/* ====== Async Function SAGA ====== */ }
function* loginUserSaga(props) {
  try {
    const response = yield login(props.payload);
    yield put(loginUserSuccess({
      ...response.user,
      token: response.accessToken
    })); 
  } catch (error) {
    yield put(loginUserFailure({ error: error.toString() }));
  }
}


function* fetchUsersListSaga() {
  try {
    const response = yield call(getUserList);
    yield put(fetchUsersListSuccess(response )); 
  } catch (error) {
    yield put(fetchUsersListFailure({ error: error.toString() }));
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
    yield put(deleteUserSuccess({_id:props.payload.id}))
  }catch(error){
    console.log(error)
  }
}


{/* ====== WATCHER SAGA ====== */ }
function* watchLoginUserSaga() {
  yield takeLatest(LOGIN_USER_START, loginUserSaga);
}


function* watchFetchUsersSaga() {
	yield takeLatest(FETCH_USERS_LIST_START, fetchUsersListSaga);
}

function* watchDeleteUserSaga() {
	yield takeLatest(DELETE_USER, deleteUserSaga);
}
function* watchUpdateUserSaga() {
  yield takeLatest(UPDATE_USER, updateUserSaga);
}

export default function* userSaga() {
	yield all([
    fork(watchLoginUserSaga),
		fork(watchFetchUsersSaga),
    fork(watchDeleteUserSaga),
    fork(watchUpdateUserSaga),
	]);
}
