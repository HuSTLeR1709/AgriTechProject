import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './featuredSlider.css';
import blogbackgroundd from '../../assests/bgImages/blog_backgroundd.jpg';
import blogbackground from '../../assests/bgImages/blog_background.jpg';
import { FaBookOpenReader } from "react-icons/fa6";
const FeaturedSliderBlogs = (props) => {
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
      <div className='featured-image-container relative'>
        <img src={blogbackgroundd} alt="Image 1" className='relative blog background'/>
        <div className='text-[90px] font-bold text-white absolute top-[25vh] left-[30vw]'>GREENFIELDS</div>
        <div className='absolute top-[46vh] left-[30vw] text-4xl cursor-pointer flex w-[300px] flex-row items-center justify-center gap-2 text-[#06623B] py-4 bg-[#FED507] rounded-2xl transition-all duration-200 ease-in-out hover:scale-95 hover:bg-[#06623B] hover:text-[#FFF]'>
    <p className='text-4xl font-semibold'>Read More</p>
    <FaBookOpenReader />
    </div>
      </div>
      <div className='featured-image-container relative'>
        <img src={blogbackground} alt="Image 2" className='featured-image'/>
        <div className='text-[90px] font-bold text-white absolute top-[25vh] left-[5vw]'><div>BANANA</div>CROP</div>
        <div className='absolute top-[63vh] left-[5vw] text-4xl cursor-pointer flex w-[300px] flex-row items-center justify-center gap-2 bg-[#06623B] py-4 text-[#FED507] rounded-2xl transition-all duration-200 ease-in-out hover:scale-95 hover:bg-[#FED507] hover:border-2 hover:border-solid hover:border-[#06623B] hover:text-[#FFF]'>
    <p className='text-4xl font-semibold'>Read More</p>
    <FaBookOpenReader />
    </div>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default FeaturedSliderBlogs;
