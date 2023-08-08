import React from 'react';
import { images } from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';


const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper-info">
      <SubHeading title='Chase The New Flavour' />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, officiis quod error vero culpa voluptas quisquam unde dolorem ducimus atque vitae, iusto libero odit facilis deleniti et eveniet alias. Labore. </p>
      <button type='button' className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper-img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
