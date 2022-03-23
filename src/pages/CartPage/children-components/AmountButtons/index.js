import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

import { Wrapper } from './style'
const AmountButtons = ({ amount, decrease, increase }) => {
    return (
        <Wrapper className='amount-btns'>
            <button className='amount-btn' onClick={decrease}>
                <FaMinus />
            </button>
            <h2 className='amount'>{amount}</h2>
            <button className='amount-btn' onClick={increase}>
                <FaPlus />
            </button>
        </Wrapper>
    )
}

export default AmountButtons
