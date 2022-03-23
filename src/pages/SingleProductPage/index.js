import React, { useEffect } from 'react'
import { PageHero } from '../../components'
import { Stars, ProductImages, AddToCart } from './children-components'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProductAction } from './store/actionCreators'
import { formatPrice } from '../../utils/helpers'
import { Wrapper } from './style'

const SingleProduct = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSingleProductAction(id))
    }, [dispatch, id])
    const singleProduct = useSelector(state => state.singleProductReducer.singleProduct)
    const { name, price, description, stock, stars, reviews, company, images } = singleProduct
    return (
        <Wrapper>
            <PageHero title={name} singleProduct />
            <div className='section section-center page'>
                <Link to='/products' className='btn'>
                    back to products
                </Link>
                <div className='product-center'>
                    <ProductImages images={images} />
                    <section className='content'>
                        <h2>{name}</h2>
                        <Stars stars={stars} reviews={reviews} />
                        <h5 className='price'>{formatPrice(price)}</h5>
                        <p className='desc'>{description}</p>
                        <p className='info'>
                            <span>Available : </span>
                            {stock > 0 ? 'In stock' : 'out of stock'}
                        </p>
                        <p className='info'>
                            <span>SKU : </span>
                            {id}
                        </p>
                        <p className='info'>
                            <span>Brand : </span>
                            {company}
                        </p>
                        <hr />
                        {stock > 0 && <AddToCart product={singleProduct} />}
                    </section>
                </div>
            </div>
        </Wrapper>
    )
}
export default SingleProduct
