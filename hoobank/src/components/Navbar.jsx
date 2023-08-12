import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
const Navbar = () => {
    const [boorger, setboorger] = useState(false)

    return (
        <header className='header'>
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className="header__nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#solution">Solution</a></li>
            </ul>
            <div className="header__mobile">
                {boorger ? (
                    <RxCross2 className='header__mobile-icon' color='#fff' fontSize={27} onClick={() => setboorger(!boorger)} />
                ) : (
                    <RxHamburgerMenu className='header__mobile-icon' color='#fff' fontSize={27} onClick={() => setboorger(!boorger)} />
                )}
                {boorger &&
                    (
                        <div className="header__mobile-menu">
                            <ul className="header__nav-mobile">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#features">Features</a></li>
                                <li><a href="#solution">Solution</a></li>
                            </ul>
                        </div>
                    )}
            </div>
        </header>
    )
}

export default Navbar