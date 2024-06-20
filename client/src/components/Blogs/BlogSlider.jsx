import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import BlogsCard from './BlogsCard'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import {Pagination, Autoplay} from 'swiper/modules'
const BlogSlider = ({blogs}) => {
  return (
    <>
 
        <Swiper
          navigation={true} 
          slidesPerView={3}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay:2500,
            disableOnInteraction: false
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="myswiper max-h-[50rem] mx-auto "
        >
          {blogs.map((blog, i) => (
            <SwiperSlide key={i}>
              <BlogsCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
   

    </>
  )
}

export default BlogSlider