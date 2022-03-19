import React from 'react'
import { Services, Hero, FeaturedProducts, Contact } from './children-components'
import { Wrapper } from './style'

const Home = () => {
    return (
        <main>
            <Hero />
            <FeaturedProducts />
            <Services />
            <Contact />
        </main>
    )
}
export default Home
