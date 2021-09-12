import { HOME_ACTION_TYPE } from '../../enum/'

const initialStore = {
  stores: [],
  error: null,
  loading: false,
  createOrUpdateSuccess: null
}

const StoreReducers = (store = initialStore, action) => {
  switch (action.type) {
    case HOME_ACTION_TYPE.GET_STORES:
      return {...store, loading: true}
    case HOME_ACTION_TYPE.GET_STORES_SUCCESS:
      return {...store, loading: false, stores: action.stores}
    case HOME_ACTION_TYPE.GET_STORES_ERROR:
      return {...store, loading: false, error: action.error}
    case HOME_ACTION_TYPE.UPDATE_STORE_PROFILE:
      return {...store, loading: true}
    case HOME_ACTION_TYPE.UPDATE_STORE_PROFILE_SUCCESS:
      return {...store, loading: false, createOrUpdateSuccess: true}
    case HOME_ACTION_TYPE.UPDATE_STORE_PROFILE_ERROR:
      return {...store, loading: false, error: action.error, createOrUpdateSuccess: false}
    case HOME_ACTION_TYPE.ADD_STORE:
      return {...store, loading: true}
    case HOME_ACTION_TYPE.ADD_STORE_SUCCESS:
      return {...store, loading: false, createOrUpdateSuccess: true}
    case HOME_ACTION_TYPE.ADD_STORE_ERROR:
      return {...store, loading: false, error: action.error, createOrUpdateSuccess: false}
    case HOME_ACTION_TYPE.RESET_CREATE_OR_UPDATE_SUCCESS:
      return {...store, error: null, createOrUpdateSuccess: null}
    default: return store;
  }
}

export default StoreReducers;