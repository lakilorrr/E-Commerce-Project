import React from 'react'
import { removeItemAction, changeAmountAction } from '../../store/actionCreators'
import AmountButtons from '../AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { formatPrice } from '../../../../utils/helpers'
import { Wrapper } from './style'
import { useDispatch } from 'react-redux'
const CartItem = ({ image, name, color, price, amount, id }) => {
    const dispatch = useDispatch()
    const increase = () => {
        dispatch(changeAmountAction(id, 'inc'))
    }
    const decrease = () => {
        dispatch(changeAmountAction(id, 'dec'))
    }
    const removeItem = prodId => {
        dispatch(removeItemAction(prodId))
    }
    return (
        <Wrapper>
            <div className='title'>
                <img src={image} alt={name} />
                <div>
                    <h5 className='name'>{name}</h5>
                    <p className='color'>
                        color : <span style={{ background: color }}></span>
                    </p>
                    <h5 className='price-small'>{formatPrice(price)}</h5>
                </div>
            </div>
            <h5 className='price'>{formatPrice(price)}</h5>
            <AmountButtons amount={amount} increase={increase} decrease={decrease} />
            <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
            <button className='remove-btn' onClick={() => removeItem(id)}>
                <FaTrash />
            </button>
        </Wrapper>
    )
}

export default CartItem
