import React, { useEffect } from 'react'
import { Product } from '../../../../components'
import { useDispatch, useSelector } from 'react-redux'
import { getFeaturedProductsAction } from '../../store/actionCreators'
import { Wrapper } from './style'

const FeaturedProducts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFeaturedProductsAction())
    }, [dispatch])
    const featuredProducts = useSelector(state => state.homeReducer.featuredProducts)

    return (
        <Wrapper className='section'>
            <div className='title'>
                <h2>featured products</h2>
                <div className='underline'></div>
            </div>
            <div className='section-center featured'>
                {featuredProducts.map(featuredProduct => {
                    return <Product key={featuredProduct.id} {...featuredProduct} />
                })}
            </div>
        </Wrapper>
    )
}

export default FeaturedProducts
