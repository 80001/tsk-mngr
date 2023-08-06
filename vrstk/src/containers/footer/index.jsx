import React from 'react'
import './styles.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>

            <div className='gpt3__footer-heading'>
                <h1 className="gradient__text">Do you want to step in po future before others</h1>
            </div>
            <div className='gpt3__footer-button'>
                <p>Request Early Access</p>
            </div>
            <div className='gpt3__footer-links'>
                <div className='gpt3__footer-links-logo'>
                    <img src={gpt3Logo} alt="Logo" />
                    <p>GUR, Kyiv</p>
                </div>
                <div className='gpt3__footer-links-div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links-div'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links-div'>
                    <h4>Get in touch</h4>
                    <p>GUR, Kyiv</p>
                    <p>102</p>
                    <p>ahss@gmail.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>© 2023 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer