import React from 'react'
import { arrowUp, discount, robot } from '../assets/'
const Hero = () => {
    return (
        <div className='hero bg-discount-gradient'>
            <div className="hero__info">
                <div className="hero__info-header">
                    <img src={discount} alt="discount" />
                    <h4><span>20%</span> Discount for <span>1 month</span> account!</h4>
                </div>
                <div className="hero__info-main">
                    <h1>The next <span className='text-gradient'>Generation</span> payment method.</h1>
                    <div className='bg-blue-gradient'>
                        <p className='text-gradient'>Get <img src={arrowUp} alt="start" /> <br />Started</p>
                    </div>
                </div>
                <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                    We examine annual percentage rates, annual fees.</p>
            </div>
            <div className="hero__image">
                <img src={robot} alt="robot" />
            </div>
        </div>
    )
}

export default Hero