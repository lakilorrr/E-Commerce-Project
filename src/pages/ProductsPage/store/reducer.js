import * as actionTypes from './constants'
const initialState = {
    defaultProducts: [],
    filteredProducts: [],
    isGrid: true,
    sort: 'price-lowest',
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    freeShipping: false
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLEAR_FILTERS:
            return { ...state, text: '', company: 'all', category: 'all', color: 'all', price: state.max_price, freeShipping: false }
        case actionTypes.CHANGE_FILTERS:
            const { name, value } = action.payload
            return { ...state, [name]: value }
        case actionTypes.FILTER_PRODUCT:
            const { text, company, category, color, price, freeShipping, defaultProducts } = state
            let filtered = [...defaultProducts]
            if (text !== '') {
                filtered = filtered.filter(product => product.name.toLowerCase().startsWith(text))
            }
            if (category !== 'all') {
                filtered = filtered.filter(product => product.category === category)
            }
            if (color !== 'all') {
                filtered = filtered.filter(product => {
                    return product.colors.find(c => c === color)
                })
            }
            if (company !== 'all') {
                filtered = filtered.filter(product => product.company === company)
            }
            if (freeShipping) {
                filtered = filtered.filter(product => product.shipping === freeShipping)
            }
            filtered = filtered.filter(product => product.price <= price)
            return { ...state, filteredProducts: filtered }

        case actionTypes.CHANGE_LOADING_DEFAULT:
            let prices = action.defaultProducts.map(p => p.price)
            let maxPrice = Math.max(...prices)
            return { ...state, defaultProducts: action.defaultProducts, filteredProducts: action.defaultProducts, max_price: maxPrice, price: maxPrice }

        case actionTypes.CHANGE_SORT:
            let products = [...state.filteredProducts]
            if (action.sort === 'price-lowest') {
                products.sort((a, b) => a.price - b.price)
            }
            if (action.sort === 'price-highest') {
                products.sort((a, b) => b.price - a.price)
            }
            if (action.sort === 'name-a') {
                products.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
            }
            if (action.sort === 'name-z') {
                products.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            }
            return { ...state, sort: action.sort, filteredProducts: products }

        case actionTypes.CHANGE_GRID_VIEW:
            return { ...state, isGrid: action.isGrid }

        default:
            return state
    }
}
export default productsReducer
