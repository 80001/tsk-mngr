import React from 'react';
import './FindUs.css'
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__find app__bg flex__center section__padding' id='home'>
    <div className="app__wrapper-info">
      <SubHeading title='Contact' />
      <h1 className="headtext__cormorant">Find Us</h1>
      <p className="p__opensans" style={{ color: '#AAA' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nisi?</p>
      <h2 className="p__cormorant" style={{ color: '#DCCA87' }}>Opening Hours</h2>
      <div style={{ color: 'white', fontSize: '16px', lineHeight: '28px' }} className='div'>
        <p>Mon - Fri: 10:00 am - 02:00 am</p>
        <p>Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <div className="button-div">
        <button type="button" className='custom__button'>Visit Us</button>
      </div>
    </div>
    <div className="app__wrapper-images">
      <img src={images.findus} alt="Find Us" />
    </div>
  </div>
);

export default FindUs;
