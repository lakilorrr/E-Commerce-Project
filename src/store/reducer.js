import { combineReducers } from 'redux'
import homeReducer from '../pages/HomePage/store/reducer'
import singleProductReducer from '../pages/SingleProductPage/store/reducer'
import productsReducer from '../pages/ProductsPage/store/reducer'
import cartReducer from '../pages/CartPage/store/reducer'

export default combineReducers({
    homeReducer,
    singleProductReducer,
    productsReducer,
    cartReducer
})
