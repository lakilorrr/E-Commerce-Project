import * as actionTypes from './constants'

export const changeCartAction = addInfo => ({
    type: actionTypes.ADD_TO_CART,
    addInfo
})
export const changeAmountAction = (prodId, value) => ({
    type: actionTypes.CHANGE_AMOUNT,
    payload: {prodId, value}
})

export const changShippingFeeAction = fee => ({
    type: actionTypes.CHANGE_AMOUNT,
    shippingFee: fee
})
export const removeItemAction = id => ({
    type: actionTypes.REMOVE_ITEM,
    id
})
export const clearCartAction = () => ({
    type: actionTypes.CLEAR_CART,
})
export const countCartTotalsAction = () => ({
    type: actionTypes.COUNT_CARAT_TOTALS,
})

