import { applyMiddleware, compose, createStore } from 'redux'
import { commonReducer } from './reducer'
import { thunk } from 'redux-thunk'

const store = createStore(commonReducer, compose(applyMiddleware(thunk)))

export default store
