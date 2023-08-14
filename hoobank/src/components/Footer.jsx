import React from 'react'
import { footerLinks, socialMedia } from '../constant'
import { logo } from '../assets'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__up">
                <div className="footer__up-logo">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                    <p>A new way to make the payments easy, reliable and secure.</p>
                </div>
                {footerLinks.map((item, index) => (
                    <div className="footer__up-links" key={index}>
                        <span>{item.title}</span>
                        {item.links.map(i => (
                            <>
                                <a href={i.link}>{i.name}</a>
                            </>
                        ))}
                    </div>
                ))}
            </div>
            <div className="footer__down">
                <p>Copyright © 2023 HooBank. All rights Reserved.</p>
                <div>
                    {socialMedia.map(item => (
                        <a href={item.link}>
                            <img src={item.icon} alt={item.id} key={item.id} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer