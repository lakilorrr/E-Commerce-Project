import React from 'react'
import { Product } from '../../../../components'
import { Wrapper } from './style'
const GridView = ({ filteredProducts }) => {
    return (
        <Wrapper>
            <div className='products-container'>
                {filteredProducts.map(product => {
                    return <Product key={product.id} {...product} />
                })}
            </div>
        </Wrapper>
    )
}

export default GridView
