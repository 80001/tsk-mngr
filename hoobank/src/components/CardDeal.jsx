import React from 'react'
import { card } from '../assets'

const CardDeal = () => {
    return (
        <div className='deal'>
            <div className="deal__info">
                <h2>Find a better card deal in few easy steps.</h2>
                <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <button type="button" className='button bg-blue-gradient'>Get Started</button>
            </div>
            <div className="deal__img">
                <img src={card} alt="card" />
            </div>
        </div>
    )
}

export default CardDeal