import * as actionTypes from './constants'

const initialState = {
    featuredProducts: []
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_FEATURED_PRODUCTS:
            return { ...state, featuredProducts: action.featuredProducts }

        default:
            return state
    }
}
export default homeReducer
