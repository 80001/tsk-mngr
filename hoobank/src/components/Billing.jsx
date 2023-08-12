import React from 'react'
import { send, shield, star } from '../assets'

const Billing = () => {
    return (
        <div className='billing'>
            <div className="billing__left">
                <h2>You do the business, we'll handle the money</h2>
                <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                <button type="button" className='button bg-blue-gradient'>Get Started</button>
            </div>
            <div className="billing__right">
                <div className="billing__right-frame">
                    <img src={star} alt="start" />
                    <div>
                        <h5>Rewards</h5>
                        <p>We take proactive steps make sure your information and transactions are secure.</p>
                    </div>
                </div>
                <div className="billing__right-frame">
                    <img src={shield} alt="start" />
                    <div>
                        <h5>100% Secured</h5>
                        <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                    </div>
                </div>
                <div className="billing__right-frame">
                    <img src={send} alt="start" />
                    <div>
                        <h5>Balance Transfer</h5>
                        <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billing