import { put, call } from 'redux-saga/effects';

import { updateStoreService, getStoresService, addStoreService } from '../../../services/api';
import { 
  updateStoreProfileSuccess,
  updateStoreProfileError,
  getStoresSuccess,
  getStoresError,
  addStoreSuccess,
  addStoreError
} from '../../actions/store';

export function* updateStoreProfile({ body }) {
  try {
    const data = yield call(updateStoreService, body);
    yield put(updateStoreProfileSuccess(data));
  } catch (e) {
    yield put(updateStoreProfileError(e));
  }
}

export function* getStores() {
  try {
    const data = yield call(getStoresService);
    yield put(getStoresSuccess(data));
  } catch (e) {
    yield put(getStoresError(e));
  }
}

export function* addStore({ body }) {
  try {
    const data = yield call(addStoreService, body);
    yield put(addStoreSuccess(data));
  } catch (e) {
    yield put(addStoreError(e));
  }
}