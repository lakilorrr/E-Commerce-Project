import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { Wrapper } from './style'

const Stars = ({ stars, reviews }) => {
    const starBar = Array.from({ length: 5 }, (val, idx) => {
        return <span key={idx}>{stars >= idx + 1 ? <BsStarFill /> : stars > idx + 0.5 ? <BsStarHalf /> : <BsStar />}</span>
    })
    return (
        <Wrapper>
            <div className='stars'>{starBar}</div>
            <p className='reviews'>{reviews} customer reviews</p>
        </Wrapper>
    )
}

export default Stars
