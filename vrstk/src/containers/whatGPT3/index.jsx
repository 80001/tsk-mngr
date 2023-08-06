import React from 'react'
import './styles.css'
import Feature from '../../components/feature'

const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title='What is GPT-3' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia ut veritatis aliquid reprehenderit vero possimus! Non, quis alias omnis similique rem odit praesentium deleniti porro esse, perferendis officiis autem?' />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>
                    The possibilities are beyond your imagination
                </h1>
                <p>Explore the Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature title='Chatbots' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia ut veritatis aliquid reprehenderit vero possimus! Non, quis alias omnis similique rem odit praesentium deleniti porro esse, perferendis officiis autem?' />
                <Feature title='Knowledgebase' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia ut veritatis aliquid reprehenderit vero possimus! Non, quis alias omnis similique rem odit praesentium deleniti porro esse, perferendis officiis autem?' />
                <Feature title='Education' text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia ut veritatis aliquid reprehenderit vero possimus! Non, quis alias omnis similique rem odit praesentium deleniti porro esse, perferendis officiis autem?' />
            </div>
        </div>
    )
}

export default WhatGPT3