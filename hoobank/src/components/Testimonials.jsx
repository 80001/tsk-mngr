import React from 'react'
import { clients } from '../constant'

const Testimonials = () => {
    return (
        <div className='company'>
            {clients.map(item => (
                <img src={item.logo} alt={item.id} key={item.id} />
            ))}
        </div>
    )
}

export default Testimonials