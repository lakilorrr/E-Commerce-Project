import React from 'react'
import PageHero from '../../components/PageHero'
import aboutImg from '../../assets/hero-bcg.jpeg'
import { Wrapper } from './style'

const About = () => {
    return (
        <main>
            <PageHero title='about' />
            <Wrapper className='page section section-center'>
                <img src={aboutImg} alt='desk' />
                <article>
                    <div className='title'>
                        <h2>Our story</h2>
                        <div className='underline'></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem delectus tempore asperiores. At ex, vel tempore corrupti ipsam molestiae
                        quibusdam fuga sequi deserunt quod harum alias placeat. Quidem, sequi numquam.
                    </p>
                </article>
            </Wrapper>
        </main>
    )
}
export default About
