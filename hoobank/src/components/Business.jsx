import React from 'react'
import { apple, bill, google } from '../assets'

const Business = () => {
    return (
        <div className='business'>
            <div className="business__left">
                <img src={bill} alt="bill" />
            </div>
            <div className="business__right">
                <h2>Easily control your billing & invoicing.</h2>
                <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                <div>
                    <img src={apple} alt="apple" />
                    <img src={google} alt="google" />
                </div>
            </div>
        </div>
    )
}

export default Business