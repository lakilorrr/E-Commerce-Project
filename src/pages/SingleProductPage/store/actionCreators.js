import * as actionTypes from './constants'
import { getSingleProduct } from '../../../request'

export const getSingleProductAction = productID => async dispatch => {
    try {
        let res = await getSingleProduct(productID)
        let singleProduct = res.data
        dispatch({
            type: actionTypes.GET_SINGLE_PRODUCT,
            singleProduct: singleProduct
        })
    } catch (err) {
        console.log(err)
    }
}
