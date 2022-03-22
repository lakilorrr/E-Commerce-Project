import React, { useEffect } from 'react'
import { Outlet, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { changeLoadingDefaultAction } from './store/actionCreators'
import { PageHero } from '../../components'
import { Sort, ListView, GridView, Filters } from './children-components'
import { Wrapper } from './style'

const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeLoadingDefaultAction())
    }, [dispatch])
    const { id } = useParams()
    const filteredProducts = useSelector(state => state.productsReducer.filteredProducts)
    const isGrid = useSelector(state => state.productsReducer.isGrid)

    return id ? (
        <Outlet />
    ) : (
        <main>
            <PageHero title='products' />
            <Wrapper className='page'>
                <div className='section-center products'>
                    <Filters />
                    <div>
                        <Sort filteredProducts={filteredProducts} />
                        {filteredProducts.length > 0 ? (
                            isGrid ? (
                                <GridView filteredProducts={filteredProducts} />
                            ) : (
                                <ListView filteredProducts={filteredProducts} />
                            )
                        ) : (
                            <h4>sorry, no products matched your search.</h4>
                        )}
                    </div>
                </div>
            </Wrapper>
        </main>
    )
}
export default Products
