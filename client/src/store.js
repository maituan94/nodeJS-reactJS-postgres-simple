import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mainReducer from './redux/reducers'

import mainSaga from './redux/sagas'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(mainSaga)

export default store
