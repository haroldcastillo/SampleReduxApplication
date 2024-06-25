import { takeLatest,put,call,all,fork } from "redux-saga/effects";

import{
  FETCH_PRODUCT_LIST,
  fetchProductListSuccess,
  fetchProductListFailure,
  CREATE_PRODUCT,
  createProductSuccess,
  createProductFailure
} from "../actions/product";

import {
  getProductList,
  createProduct
} from "../apis/product";

{/* ====== Async Function SAGA ====== */ }

function* fetchProductListSaga(){
  try{
    const response = yield call(getProductList);
    yield put(fetchProductListSuccess({products:response}));
  }catch(error){
    yield put(fetchProductListFailure({error:error.toString()}));
  }
}
function* createProductSaga(props){
  try{
    const response = yield createProduct(props.payload);
    console.warn(response)
    yield put(createProductSuccess(response));
  }catch(error){
    console.warn("ERROR",error)
    yield put(createProductFailure({error:error}));
  }
}

{/* ====== WATCHER SAGA ====== */ }
function* watchFetchProductListSaga(){
  yield takeLatest(FETCH_PRODUCT_LIST,fetchProductListSaga);
}
function* watchCreateProductSaga(){
  yield takeLatest(CREATE_PRODUCT,createProductSaga);
}

export default function* productSaga() {
	yield all([
		fork(watchFetchProductListSaga),
    fork(watchCreateProductSaga),
	]);
}