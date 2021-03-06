import React from 'react'
import { Wrapper } from './style'
import { services } from '../../../../utils/constants'

const Services = () => {
    return (
        <Wrapper>
            <div className='section-center'>
                <article className='header'>
                    <h3>
                        custom furniture
                        <br />
                        built for you
                    </h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus amet asperiores repudiandae veniam quae quo eveniet praesentium eligendi
                        non dolorem facere ullam excepturi, modi velit itaque fugiat consequuntur eos quidem!
                    </p>
                </article>
                <div className='services-center'>
                    {services.map(service => {
                        const { id, icon, title, text } = service
                        return (
                            <article key={id} className='service'>
                                <span className='icon'>{icon}</span>
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </article>
                        )
                    })}
                </div>
            </div>
        </Wrapper>
    )
}

export default Services
