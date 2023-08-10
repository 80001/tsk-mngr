import React, { useRef } from 'react';
import './Footer.css';
import { BiLogoInstagram, BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi'
import { SubHeading } from '../../components';

const Footer = () => {
  const scrollTop = () => {
    console.log('start')
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className='app__footer app__bg flex__center section__padding' id='footer' >
      <div className="app__footer-titles">
        <SubHeading title='Newsletter' />
        <h1 className="headtext__cormorant">Subscribe To our newsletter</h1>
        <p>And never miss latest Updates!</p>
        <div className="app__footer-titles-mail">
          <input type="email" name="mail" id="mail" placeholder='Email Adress' />
          <button type="button" className='custom__button'>Subscribe</button>
        </div>
      </div>
      <div className="app__footer-contacts">
        <div className="app__footer-contacts-group">
          <h2 className='p__cormorant'>Contuct Us</h2>
          <p className="p__opensans">Krasyliv, Shevchenko street 7</p>
          <p className="p__opensans">091 241 25 12 <br />068 123 24 42</p>
        </div>
        <div className="app__footer-contacts-group">
          <h1 className="headtext__cormorant">Gericht</h1>
          <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
          <SubHeading title='' />
          <div>
            <BiLogoFacebook color='#fff' fontSize={27} />
            <BiLogoTwitter color='#fff' fontSize={27} />
            <BiLogoInstagram color='#fff' fontSize={27} />
          </div>
        </div>
        <div className="app__footer-contacts-group">
          <h2 className='p__cormorant'>Working Hours</h2>
          <p className="p__opensans">Monday-Friday:<br />08:00 am-12:00 pm</p>
          <p className="p__opensans">Saturday-Sunday:<br />07:00 am-11:00 pm</p>
        </div>
      </div>
      <p className="app__footer-signs">
        2023 Gericht. All right reserved ©
      </p>
      <div className="scroll-top" onClick={scrollTop}
      >
        <div />
        <h2 className='p__cormorant'>TOP</h2>
      </div>
    </div>
  )
}

export default Footer;
