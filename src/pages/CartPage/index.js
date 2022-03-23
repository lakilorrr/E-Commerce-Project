import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { countCartTotalsAction } from './store/actionCreators'
import { PageHero } from '../../components'
import { CartContent } from './children-components'
import { Wrapper } from './style'

const Cart = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cartReducer)
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch(countCartTotalsAction())
    }, [dispatch, cart])

    if (cart.length > 0) {
        return (
            <main>
                <PageHero title='cart' />
                <Wrapper className='page'>
                    <CartContent />
                </Wrapper>
            </main>
        )
    } else {
        return (
            <Wrapper className='page-100'>
                <div className='empty'>
                    <h2>Your cart is empty</h2>
                    <Link to='/products' className='btn'>
                        Fill it
                    </Link>
                </div>
            </Wrapper>
        )
    }
}
export default Cart
