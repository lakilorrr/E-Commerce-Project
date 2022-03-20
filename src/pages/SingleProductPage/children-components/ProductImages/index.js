import React, { useState } from 'react'
import { Wrapper } from './style'

const ProductImages = ({ images = [{ url: '' }] }) => {
    const [imgIndex, setImgIndex] = useState(0)
    return (
        <Wrapper>
            <img src={images[imgIndex].url} alt='main img' className='main' />
            <div className='gallery'>
                {images.map((img, idx) => {
                    return <img key={idx} alt={img.filename} src={img.url} className={`${idx === imgIndex ? 'active' : ''}`} onClick={() => setImgIndex(idx)} />
                })}
            </div>
        </Wrapper>
    )
}

export default ProductImages
