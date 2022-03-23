import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Wrapper } from './style'

const CartButtons = ({ handleSidebarStatus }) => {
    const { cart } = useSelector(state => state.cartReducer)

    return (
        <Wrapper className='cart-btn-wrapper'>
            <Link to='/cart' className='cart-btn' onClick={() => handleSidebarStatus(false)}>
                Cart
                <span className='cart-container'>
                    <FaShoppingCart />
                    <span className='cart-value'>{cart.length}</span>
                </span>
            </Link>
            <button className='auth-btn'>
                Login
                <FaUserPlus />
            </button>
        </Wrapper>
    )
}

export default CartButtons
