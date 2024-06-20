import React from 'react';
import Footer from '../components/common/Footer';

const Weather = () => {
  return (
    <div>
        <div className='w-full mt-20 h-[100vh]'>
        <iframe
          src="https://pranjalshukla1602.github.io/weathercol/#/current-location"
          title="Weather App"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        ></iframe>
    </div>
    <Footer/>
    </div>
    
  );
}

export default Weather;
