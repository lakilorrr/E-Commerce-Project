import * as actionTypes from './constants'
import { getProducts } from '../../../request'

export const filterProductAction = () => ({
    type: actionTypes.FILTER_PRODUCT
})
export const clearFiltersAction = () => ({
    type: actionTypes.CLEAR_FILTERS
})
export const changeFiltersAction = (name, value) => ({
    type: actionTypes.CHANGE_FILTERS,
    payload: { name, value }
})

export const changeGridViewAction = isGrid => ({
    type: actionTypes.CHANGE_GRID_VIEW,
    isGrid: isGrid
})
export const changeSortAction = sortValue => ({
    type: actionTypes.CHANGE_SORT,
    sort: sortValue
})
export const changeLoadingDefaultAction = () => async dispatch => {
    let res = await getProducts()
    let defaultProducts = res.data
    dispatch({
        type: actionTypes.CHANGE_LOADING_DEFAULT,
        defaultProducts: defaultProducts
    })
}
