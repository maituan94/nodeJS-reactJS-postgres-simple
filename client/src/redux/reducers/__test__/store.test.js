import reducer from '../store'
import { HOME_ACTION_TYPE } from '../../../enum/'

const initialStore = {
  stores: [],
  error: null,
  loading: false,
  createOrUpdateSuccess: null
}

describe('HomeReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initialStore, {})).toEqual(initialStore)
  })

  it('should handle UPDATE_STORE_PROFILE', () => {
    const expectResult = {
      stores: [],
      error: null,
      loading: true,
      createOrUpdateSuccess: null
    }
    expect(reducer(initialStore, { type: HOME_ACTION_TYPE.UPDATE_STORE_PROFILE })).toEqual(expectResult)
  })

  it('should handle UPDATE_STORE_PROFILE_SUCCESS', () => {
    const initStore = {
      stores: [{ id: 1 }],
      error: null,
      loading: false,
      createOrUpdateSuccess: null
    }

    const expectResult = {
      stores: [{ id: 1 }],
      error: null,
      loading: false,
      createOrUpdateSuccess: true
    }
    expect(reducer(initStore, { type: HOME_ACTION_TYPE.UPDATE_STORE_PROFILE_SUCCESS, res: { store: { id: 1 } }})).toEqual(expectResult)
  })

  it('should handle UPDATE_STORE_PROFILE_ERROR', () => {
    const expectResult = {
      stores: [],
      error: { message: '' },
      loading: false,
      createOrUpdateSuccess: false
    }
    expect(reducer(initialStore, { type: HOME_ACTION_TYPE.UPDATE_STORE_PROFILE_ERROR, error: { message: '' } })).toEqual(expectResult)
  })

  it('should handle GET_STORES', () => {
    const expectResult = {
      stores: [],
      error: null,
      loading: true,
      createOrUpdateSuccess: null
    }
    expect(reducer(initialStore, { type: HOME_ACTION_TYPE.GET_STORES })).toEqual(expectResult)
  })

  it('should handle GET_STORES_SUCCESS', () => {
    const expectResult = {
      stores: [{ id: 1 }],
      error: null,
      loading: false,
      createOrUpdateSuccess: null
    }
    expect(reducer(initialStore, { type: HOME_ACTION_TYPE.GET_STORES_SUCCESS, stores: [{ id: 1 }] })).toEqual(expectResult)
  })

  it('should handle GET_STORES_ERROR', () => {
    const expectResult = {
      stores: [],
      error: { message: '' },
      loading: false,
      createOrUpdateSuccess: null
    }
    expect(reducer(initialStore, { type: HOME_ACTION_TYPE.GET_STORES_ERROR, error: { message: '' } })).toEqual(expectResult)
  })
  it('should handle ADD_STORE', () => {
    const expectResult = {
      stores: [],
      error: null,
      loading: true,
      createOrUpdateSuccess: null
    }
    expect(reducer(initialStore, { type: HOME_ACTION_TYPE.ADD_STORE })).toEqual(expectResult)
  })

  it('should handle ADD_STORE_SUCCESS', () => {
    const initStore = {
      stores: [{ name: 'tuan' }],
      error: null,
      loading: false,
      createOrUpdateSuccess: null
    }

    const expectResult = {
      stores: [{ name: 'tuan' }],
      error: null,
      loading: false,
      createOrUpdateSuccess: true
    }
    expect(reducer(initStore, { type: HOME_ACTION_TYPE.ADD_STORE_SUCCESS, res: { store: { id: 1 } }})).toEqual(expectResult)
  })

  it('should handle ADD_STORE_ERROR', () => {
    const expectResult = {
      stores: [],
      error: { message: '' },
      loading: false,
      createOrUpdateSuccess: false
    }
    expect(reducer(initialStore, { type: HOME_ACTION_TYPE.ADD_STORE_ERROR, error: { message: '' } })).toEqual(expectResult)
  })
})