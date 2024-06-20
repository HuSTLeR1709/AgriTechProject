import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './featuredSlider.css';

const FeaturedSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Set the speed of the slide transition (in milliseconds)
    autoplay: true,
    autoplaySpeed: 2000, // Set the time between slides (in milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className='custom-slider'>
      <div className='featured-image-container'>
        <img src={props.img1} alt="Image 1" className='featured-image'/>
      </div>
      <div className='featured-image-container'>
        <img src={props.img2} alt="Image 2" className='featured-image'/>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default FeaturedSlider;
