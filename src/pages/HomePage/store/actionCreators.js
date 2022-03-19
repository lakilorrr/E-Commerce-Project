import * as actionTypes from './constants'
import { getProducts } from '../../../request'

export const getFeaturedProductsAction = () => async dispatch => {
    try {
        let res = await getProducts()
        let featuredProducts = res.data.filter(product => product.featured === true)
        dispatch({
            type: actionTypes.GET_FEATURED_PRODUCTS,
            featuredProducts: featuredProducts
        })
    } catch (error) {
        console.log(error)
    }
}
