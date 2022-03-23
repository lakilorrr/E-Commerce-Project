import * as actionTypes from './constants'

const getLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    if (cart) {
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}
const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 5
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const { id, color, amount, product } = action.addInfo
            const hasProd = state.cart.find(prod => prod.id === id + color)
            if (hasProd) {
                const tempItem = state.cart.map(prod => {
                    if (prod.id === id + color) {
                        let newAmount = prod.amount + amount
                        if (newAmount > prod.max) {
                            newAmount = prod.max
                        }
                        return { ...prod, amount: newAmount }
                    } else {
                        return prod
                    }
                })
                return { ...state, cart: tempItem }
            } else {
                const newItem = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.images[0].url,
                    price: product.price,
                    max: product.stock
                }
                return { ...state, cart: [...state.cart, newItem] }
            }

        case actionTypes.CLEAR_CART:
            return { ...state, cart: [] }
        case actionTypes.REMOVE_ITEM:
            const removedCart = state.cart.filter(prod => prod.id !== action.id)
            return { ...state, cart: removedCart }

        case actionTypes.CHANGE_AMOUNT:
            const { prodId, value } = action.payload
            const cartItem = state.cart.map(item => {
                if (item.id === prodId) {
                    if (value === 'inc') {
                        let newAmount = item.amount + 1
                        if (newAmount > item.max) {
                            newAmount = item.max
                        }
                        return { ...item, amount: newAmount }
                    }
                    if (value === 'dec') {
                        let newAmount = item.amount - 1
                        if (newAmount < 1) {
                            newAmount = 1
                        }
                        return { ...item, amount: newAmount }
                    }
                }
                return item
            })
            return { ...state, cart: cartItem }
        case actionTypes.COUNT_CARAT_TOTALS:
            const { total_amount, total_items } = state.cart.reduce(
                (totalInfo, cartItem) => {
                    const { price, amount } = cartItem
                    totalInfo.total_amount += amount * price
                    totalInfo.total_items += amount
                    return totalInfo
                },
                { total_amount: 0, total_items: 0 }
            )
            return { ...state, total_amount, total_items }
        case actionTypes.CHANGE_SHIPPING_FEE:
            return { ...state, shipping_fee: action.shippingFee }
        default:
            return state
    }
}
export default cartReducer
