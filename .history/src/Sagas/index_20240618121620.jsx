import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST,
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../actions/productsActions';

const LIMIT = 15;

function* fetchProductsSaga(action) {
  try {
    const response = yield call(axios.get, `https://dummyjson.com/products`, {
      params: {
        limit: LIMIT,
        skip: action.payload * LIMIT,
      },
    });
    yield put(fetchProductsSuccess(response.data.products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}

export default function* rootSaga() {
  yield all([watchFetchProducts()]);
}
