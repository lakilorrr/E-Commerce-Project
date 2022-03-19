import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'

const PageHero = ({ title }) => {
    return (
        <Wrapper>
            <div className='section-center'>
                <h3>
                    <Link to='/'>Home</Link>/ {title}
                </h3>
            </div>
        </Wrapper>
    )
}

export default PageHero