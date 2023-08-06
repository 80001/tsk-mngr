import React from 'react'
import './styles.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt="possibility" />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>The possibility are beyond your imagination</h1>
                <p>You bed any for travelling assistance indeed</p>
                <h4>Request Early Access to Get Started</h4>

            </div>
        </div>
    )
}

export default Possibility