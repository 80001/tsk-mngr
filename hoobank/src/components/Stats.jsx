import React from 'react'

const Stats = () => {
    return (
        <div className='stats bg-discount-gradient'>
            <div className="stats__row">
                <h2>3800+</h2>
                <h3 className='text-gradient'>USER ACTIVE</h3>
            </div>
            <span className='line' />
            <div className="stats__row">
                <h2>230+</h2>
                <h3 className='text-gradient'>TRUSTED BY COMPANY</h3>
            </div>
            <span className='line' />
            <div className="stats__row">
                <h2>$230M+</h2>
                <h3 className='text-gradient'>TRANSACTION</h3>
            </div>
        </div>
    )
}

export default Stats