import { HOME_ACTION_TYPE } from '../../enum'

export const updateStoreProfile = (body) => ({
  type: HOME_ACTION_TYPE.UPDATE_STORE_PROFILE,
  body,
});

export const updateStoreProfileSuccess = (res) => ({
  type: HOME_ACTION_TYPE.UPDATE_STORE_PROFILE_SUCCESS,
  res,
});

export const updateStoreProfileError = (error) => ({
  type: HOME_ACTION_TYPE.UPDATE_STORE_PROFILE_ERROR,
  error,
});

export const addStore = (body) => ({
  type: HOME_ACTION_TYPE.ADD_STORE,
  body,
});

export const addStoreSuccess = (res) => ({
  type: HOME_ACTION_TYPE.ADD_STORE_SUCCESS,
  res,
});

export const addStoreError = (error) => ({
  type: HOME_ACTION_TYPE.ADD_STORE_ERROR,
  error,
});

export const getStores = () => ({
  type: HOME_ACTION_TYPE.GET_STORES,
})

export const getStoresSuccess = (stores) => ({
  type: HOME_ACTION_TYPE.GET_STORES_SUCCESS,
  stores,
})

export const getStoresError = (error) => ({
  type: HOME_ACTION_TYPE.GET_STORES_ERROR,
  error,
})

export const resetCreateOrUpdateSuccess = () => ({
  type: HOME_ACTION_TYPE.RESET_CREATE_OR_UPDATE_SUCCESS
})
