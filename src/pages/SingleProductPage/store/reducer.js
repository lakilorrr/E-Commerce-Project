import * as actionTypes from './constants'
const initialState = {
    singleProduct: {}
}

const singleProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_SINGLE_PRODUCT:
            return { ...state, singleProduct: action.singleProduct }

        default:
            return state
    }
}
export default singleProductReducer
