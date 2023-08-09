import React from 'react';
import { images, data } from '../../constants';
import './Laurels.css';
import { SubHeading } from '../../components';

const Laurels = () => (
  <div className='app__laurels app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper-info'>
      <SubHeading title='Awards & Recognation' />
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className="app__awards">
        {data.awards.map(award => (
          <div className="app__award" key={award.title}>
            <img src={award.imgUrl} alt={award.title} />
            <div className='app__award-content'>
              <p className='p__cormorant' style={{ color: '#DCCA87', marginBottom: '5px' }}>{award.title}</p>
              <p className="p__opensans" style={{ color: '#AAA' }}>{award.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <img src={images.logo} alt="logo" className="app__laurens-logo" />
    <div className='app__wrapper-image'>
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
