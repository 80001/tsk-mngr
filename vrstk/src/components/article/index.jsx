import React from 'react'
import './styles.css'

const Article = ({ imgUrl, date, title }) => {
    return (
        <div className='gpt3__blog-container-article'>
            <div className='gpt3__blog-container-article-image'>
                <img src={imgUrl} alt="blog image" />
            </div>
            <div className='gpt3__blog-container-article-content'>

                <div className='gpt3__blog-container-article-image'>
                    <p>{date}</p>
                    <h3>{title}</h3>
                    <p>Read Full Article</p>
                </div>
            </div>
        </div>
    )
}

export default Article