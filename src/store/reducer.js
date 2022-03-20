import { combineReducers } from 'redux'
import homeReducer from '../pages/HomePage/store/reducer'
import singleProductReducer from '../pages/SingleProductPage/store/reducer'

export default combineReducers({
    homeReducer,
    singleProductReducer
})
