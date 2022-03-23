import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartTotals, CartItem, CartColumns } from '../../children-components'
import { clearCartAction } from '../../store/actionCreators'
import { Wrapper } from './style'

const CartContent = () => {
    const { cart } = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()
    return (
        <Wrapper className='section section-center'>
            <CartColumns />
            {cart.map(item => {
                return <CartItem key={item.id} id={item.id} {...item} />
            })}
            <hr />
            <div className='link-container'>
                <Link to='/products' className='link-btn'>
                    continue shopping
                </Link>
                <button className='link-btn clear-btn' onClick={() => dispatch(clearCartAction())}>
                    clear shopping cart
                </button>
            </div>
            <CartTotals />
        </Wrapper>
    )
}

export default CartContent
