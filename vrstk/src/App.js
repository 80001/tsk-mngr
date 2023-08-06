import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Brand from './components/brand'
import WhatGPT from './containers/whatGPT3'
import Features from './containers/features'
import Possibility from './containers/possibility'
import Header from './containers/header'
import CTA from './components/cta'
import Blog from './containers/blog'
import Footer from './containers/footer'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App