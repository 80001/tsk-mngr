import React from 'react'
import './styles.css'
import Feature from '../../components/feature'

const featuresData = [
    {
        title: 'Improving end distrusts intantly',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo nihil consequatur eius odio maiores quod id necessitatibus doloremque. Excepturi quibusdam autem sapiente doloribus cupiditate inventore enim aspernatur minima deserunt?'
    },
    {
        title: 'Become the tended active',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo nihil consequatur eius odio maiores quod id necessitatibus doloremque. Excepturi quibusdam autem sapiente doloribus cupiditate inventore enim aspernatur minima deserunt?'
    },
    {
        title: 'Message or am nothing',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo nihil consequatur eius odio maiores quod id necessitatibus doloremque. Excepturi quibusdam autem sapiente doloribus cupiditate inventore enim aspernatur minima deserunt?'
    },
    {
        title: 'Realy boy law country',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo nihil consequatur eius odio maiores quod id necessitatibus doloremque. Excepturi quibusdam autem sapiente doloribus cupiditate inventore enim aspernatur minima deserunt?'
    }
]
const Features = () => {
    return (
        <div className='gpt3__features section__padding'>
            <div className='gpt3__features-hading'>
                <div className='gradient__text'>
                    <h1>The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen</h1>                    </div>
                <p>Request early access to Get Started</p>
            </div>
            <div className='gpt3__features-container'>
                {featuresData.map((item, index) => (
                    <Feature key={item.title + index} title={item.title} text={item.text} />
                ))}
            </div>
        </div>
    )
}

export default Features