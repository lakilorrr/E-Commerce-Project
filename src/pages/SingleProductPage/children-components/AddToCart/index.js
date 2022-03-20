import React, { useState } from 'react'
import { FaCheck, FaPlus, FaMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { Wrapper, AmountWrapper } from './style'
const AddToCart = ({ id, stock, colors }) => {
    const [colorIdx, setColorIdx] = useState(0)
    const [amount, setAmount] = useState(1)
    const increase = amount => {
        let newAmount = amount + 1
        if (newAmount > stock) {
            setAmount(stock)
        } else {
            setAmount(newAmount)
        }
    }
    const decrease = amount => {
        let newAmount = amount - 1
        if (newAmount < 1) {
            setAmount(1)
        } else {
            setAmount(newAmount)
        }
    }
    return (
        <Wrapper>
            <div className='colors'>
                <span> colors : </span>
                <div>
                    {colors.map((color, idx) => {
                        return (
                            <button
                                key={idx}
                                className={`color-btn ${colorIdx === idx ? 'active' : ''}`}
                                style={{ background: color }}
                                onClick={() => setColorIdx(idx)}>
                                {colorIdx === idx && <FaCheck />}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className='btn-container'>
                <AmountWrapper className='amount-btns'>
                    <button className='amount-btn' onClick={() => decrease(amount)}>
                        <FaMinus />
                    </button>
                    <h2 className='amount'>{amount}</h2>
                    <button className='amount-btn' onClick={() => increase(amount)}>
                        <FaPlus />
                    </button>
                </AmountWrapper>
                <Link to='/cart' className='btn'>
                    add to cart
                </Link>
            </div>
        </Wrapper>
    )
}

export default AddToCart
