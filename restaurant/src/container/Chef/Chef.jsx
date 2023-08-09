import React from 'react';
import { images } from '../../constants'
import './Chef.css';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__chef app__bg flex__center section__padding' id='home'>
    <div className="app__wrapper-img">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper-info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-text">
        <p className="p__opensans"><img src={images.quote} alt="quote" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit amet nisi beatae blanditiis facere pariatur aspernatur similique iste architecto error. Eaque, est pariatur! Ab quasi voluptatibus recusandae exercitationem neque aliquid.</p>
      </div>
      <div className="app__chef-luo">
        <h2 className='app__chef-h2'>Kevin Luo - Kazakh</h2>
        <h3 className='app__chef-h3'>Chef & Founder</h3>
      </div>
      <img src={images.sign} alt="sign" className='app__chef-sign' />
    </div>
  </div>
);

export default Chef;
