import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import {Pagination, Autoplay} from 'swiper/modules'
import UspCard from './UspCard'
const UspSlider = ({data}) => {
  return (
    <>
 
        <Swiper
          navigation={true} 
          slidesPerView={4}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay:2500,
            disableOnInteraction: false
          }}
          modules={[Pagination, Autoplay]}
          direction="horizontal"
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
          }}
          className="myswiper max-h-[50rem] mx-auto"
        >
          {data.map((data, i) => (
            <SwiperSlide key={i}>
              <UspCard data={data} iconName={data.icon} />
            </SwiperSlide>
          ))}
        </Swiper>
   

    </>
  )
}

export default UspSlider