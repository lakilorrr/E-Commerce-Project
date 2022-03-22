import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../../../utils/helpers'
import { Wrapper } from './style'
const ListView = ({ filteredProducts }) => {
    return (
        <Wrapper>
            {filteredProducts.map(({ id, image, name, price, description }) => {
                return (
                    <article key={id}>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <h5 className='price'>{formatPrice(price)}</h5>
                            <p>{description.substring(0, 200)}...</p>
                            <Link to={`/products/${id}`} className='btn'>
                                Details
                            </Link>
                        </div>
                    </article>
                )
            })}
        </Wrapper>
    )
}

export default ListView
