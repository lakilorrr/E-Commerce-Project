import React from 'react'
import { Wrapper } from './style'

const Contact = () => {
    return (
        <Wrapper>
            <div className='section-center'>
                <h3>Subscribe and get 20% off</h3>
                <div className='content'>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt libero odit voluptatibus blanditiis quae? Qui voluptatem quibusdam
                        quaerat accusantium facilis iusto sint, eveniet natus iste, temporibus inventore ex tempore doloremque?
                    </p>
                    <form className='contact-form'>
                        <input type='email' className='form-input' placeholder='enter your email' />
                        <button className='submit-btn' type='submit'>
                            subscribe
                        </button>
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default Contact
