import React, { useRef } from 'react';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';
import { SubHeading } from '../../components';

const Gallery = () => {
  const scrollRef = useRef(null)
  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04,]
  const galleryImagesLooped = [...galleryImages, ...galleryImages, ...galleryImages]
  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 300;
    if (direction === 'left') {
      if (current.scrollLeft === 0) {
        current.scrollLeft = current.scrollWidth; // Переміщуємо вправо на останній елемент
      } else {
        current.scrollLeft -= scrollAmount;
      }
    } else {
      if (current.scrollLeft === current.scrollWidth - current.clientWidth) {
        current.scrollLeft = 0; // Переміщуємо вліво на перший елемент
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae laudantium sequi nostrum? Nesciunt ea cumque rem porro, cupiditate ex magni reiciendis nobis eum assumenda quo magnam error omnis excepturi quam!</p>
        <div className='button-div'>
          <button type="button" className='custom__button'>View More</button>
        </div>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images-container' ref={scrollRef}>
          {galleryImagesLooped.map((image, index) => (
            <div className="app__gallery-images-card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images-arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
