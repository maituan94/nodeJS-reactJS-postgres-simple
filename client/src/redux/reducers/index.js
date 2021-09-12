import { combineReducers } from 'redux';

import StoreReducers from  './store';

const mainReducer = combineReducers({
  store: StoreReducers
});

export default mainReducer;