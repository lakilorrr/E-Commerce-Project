import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { Wrapper } from './style'

const CartButtons = ({ handleSidebarStatus }) => {
    return (
        <Wrapper className='cart-btn-wrapper'>
            <Link to='/cart' className='cart-btn' onClick={() => handleSidebarStatus(false)}>
                Cart
                <span className='cart-container'>
                    <FaShoppingCart />
                    <span className='cart-value'></span>
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
