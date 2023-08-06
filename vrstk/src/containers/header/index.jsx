import React from 'react'
import './styles.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className='gpt3__header section__padding'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>
                    Let`s Build Something amazing with GPT-3 Open AI
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, adipisci? Quasi cumque expedita dicta beatae placeat deleniti facilis consequatur odio distinctio! Voluptas quidem consectetur ipsa quod excepturi, dignissimos non nihil.</p>
                <div className='gpt3__header-content-input'>
                    <input type="email" placeholder='Your Email Adress' />
                    <button type='button'>Get Started</button>
                </div>
                <div className='gpt3__header-content-people'>
                    <img src={people} alt="people" />
                    <p>1,600 People lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid.</p>
                </div>
            </div>
            <div className='gpt3__header-image'>
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header