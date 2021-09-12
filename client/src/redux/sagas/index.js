import { all, takeLatest } from 'redux-saga/effects';

import { HOME_ACTION_TYPE } from '../../enum';
import { updateStoreProfile, getStores, addStore } from './store';

export default function* mainSaga() {
  yield all([
    takeLatest(HOME_ACTION_TYPE.GET_STORES, getStores),
    takeLatest(HOME_ACTION_TYPE.ADD_STORE, addStore),
    takeLatest(HOME_ACTION_TYPE.UPDATE_STORE_PROFILE, updateStoreProfile),
  ]);
}