import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeGridViewAction, changeSortAction } from '../../store/actionCreators'
import { BsFillGridFill, BsList } from 'react-icons/bs'

import { Wrapper } from './style'

const Sort = ({ filteredProducts }) => {
    const dispatch = useDispatch()
    const isGrid = useSelector(state => state.productsReducer.isGrid)
    const updateSort = e => {
        dispatch(changeSortAction(e.target.value))
    }
    return (
        <Wrapper>
            <div className='btn-container'>
                <button onClick={() => dispatch(changeGridViewAction(true))} className={isGrid ? 'active' : ''}>
                    <BsFillGridFill />
                </button>
                <button onClick={() => dispatch(changeGridViewAction(false))} className={!isGrid ? 'active' : ''}>
                    <BsList />
                </button>
            </div>
            <p>{filteredProducts.length} products found</p>
            <hr />
            <form>
                <label htmlFor='sort'>sort by</label>
                <select name='sort' id='sort' className='sort-input' onChange={updateSort}>
                    <option value='price-lowest'>price(lowest)</option>
                    <option value='price-highest'>price(highest)</option>
                    <option value='name-a'>name(a-z)</option>
                    <option value='name-z'>name(z-a)</option>
                </select>
            </form>
        </Wrapper>
    )
}

export default Sort
