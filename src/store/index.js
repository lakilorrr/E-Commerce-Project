import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import combineReducers from './reducer'
export const store = createStore(combineReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
