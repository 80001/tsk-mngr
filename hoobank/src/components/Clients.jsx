import React from 'react'
import { feedback } from '../constant'
import { quotes } from '../assets'

const Clients = () => {
    return (
        <div className='clients'>
            <div className="clients__header">
                <h2>What people are saying about us</h2>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className="clients__feedbacks">
                {feedback.map(item => (
                    <div className="clients__feedbacks-body" key={item.id}>
                        <div className='quotes'>
                            <img src={quotes} alt="quotes" />
                        </div>
                        <p>{item.content}</p>
                        <div className="clients__feedbacks-body-author">
                            <img src={item.img} alt="avatar" />
                            <div>
                                <span>{item.name}</span>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clients