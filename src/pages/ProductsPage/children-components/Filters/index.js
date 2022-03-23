import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProductAction, changeFiltersAction, clearFiltersAction } from '../../store/actionCreators'
import { FaCheck } from 'react-icons/fa'
import { getUniqueValues, formatPrice } from '../../../../utils/helpers'
import { Wrapper } from './style'
const Filters = () => {
    const dispatch = useDispatch()
    const { defaultProducts, category, color, company, text, price, min_price, max_price, freeShipping } = useSelector(state => state.productsReducer)
    const categories = getUniqueValues(defaultProducts, 'category')
    const companies = getUniqueValues(defaultProducts, 'company')
    const colors = getUniqueValues(defaultProducts, 'colors')
    useEffect(() => {
        dispatch(filterProductAction())
    }, [dispatch, category, color, company, text, price, freeShipping])

    return (
        <Wrapper>
            <div className='content'>
                <form onSubmit={e => e.preventDefault()}>
                    <div className='form-control'>
                        {/* text */}
                        <input
                            type='text'
                            name='text'
                            placeholder='search'
                            className='search-input'
                            onChange={e => dispatch(changeFiltersAction(e.target.name, e.target.value))}
                        />
                        {/* category */}
                        <div className='form-control'>
                            <h5>category</h5>
                            <div>
                                {categories.map((c, idx) => {
                                    return (
                                        <button
                                            key={idx}
                                            name='category'
                                            className={category === c ? 'active' : ''}
                                            onClick={e => dispatch(changeFiltersAction(e.target.name, c))}>
                                            {c}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        {/* company */}
                        <div className='form-control'>
                            <h5>company</h5>
                            <select className='company' name='company' value={company} onChange={e => dispatch(changeFiltersAction(e.target.name, e.target.value))}>
                                {companies.map((c, idx) => {
                                    return (
                                        <option key={idx} value={c}>
                                            {c}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        {/* color */}
                        <div className='form-control'>
                            <h5>colors</h5>
                            <div className='colors'>
                                {colors.map((c, idx) => {
                                    return c === 'all' ? (
                                        <button
                                            key={idx}
                                            className={`all-btn ${color === 'all' ? 'active' : ''}`}
                                            name='cplor'
                                            onClick={e => dispatch(changeFiltersAction(e.target.name, c))}>
                                            all
                                        </button>
                                    ) : (
                                        <button
                                            key={idx}
                                            className={`color-btn ${c === color ? 'active' : ''}`}
                                            style={{ background: c }}
                                            name='color'
                                            onClick={e => dispatch(changeFiltersAction(e.target.name, c))}>
                                            {c === color && <FaCheck />}
                                        </button>
                                    )
                                })}
                            </div>
              </div>
              {/* price */}
              <div className="form-control">
                <h5>price</h5>
                <p className="price">{ formatPrice(price)}</p>
                <input
                  type="range"
                  value={price}
                  onChange={(e)=>dispatch(changeFiltersAction(e.target.name, +e.target.value))}
                  name="price"
                  min={min_price}
                  max={max_price} />
              </div>
              {/* shipping */}
              <div className="form-control shipping">
                <label htmlFor="shipping">free shipping</label>
                <input
                  type="checkbox"
                  name="freeShipping"
                  id="shipping"
                  checked={freeShipping}
                  onChange={ (e)=>dispatch(changeFiltersAction(e.target.name, e.target.checked))} />
              </div>
                    </div>
          </form>
          {/* clear */}
          <button className='clear-btn' onClick={(e) => dispatch(clearFiltersAction())}>clear filters</button>
            </div>
        </Wrapper>
    )
}

export default Filters
