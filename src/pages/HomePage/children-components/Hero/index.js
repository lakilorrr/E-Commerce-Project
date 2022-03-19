import React from 'react'
import { Link } from 'react-router-dom'
import heroBcg from '../../../../assets/hero-bcg.jpeg'
import heroBcg2 from '../../../../assets/hero-bcg-2.jpeg'
import { Wrapper } from './style'

const Hero = () => {
    return (
        <Wrapper className='section-center'>
            <article className='content'>
                <h1>
                    design your
                    <br />
                    comfort zone
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, ratione aliquam consequuntur nesciunt perspiciatis, harum nisi saepe veniam
                    mollitia recusandae esse corporis. Assumenda quasi alias laborum fugit possimus. Ad, soluta?
                </p>
                <Link to='/products' className='btn hero-btn'>
                    shop now
                </Link>
            </article>
            <article className='img-container'>
                <img src={heroBcg} alt='table' className='main-img' />
                <img src={heroBcg2} alt='person' className='accent-img' />
            </article>
        </Wrapper>
    )
}

export default Hero
