import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay} from 'swiper/modules';

import './Imageslider.css'
import Photo1 from '../assets/banner1.webp'
import Photo3 from '../assets/banner3.webp'
import Photo4 from '../assets/banner4.webp'
import Photo5 from '../assets/banner5.webp'
import { GiHidden } from 'react-icons/gi';



function Imageslider() {
  return (
    
    <>
    <Swiper
      navigation={false}
      cssMode={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      Autoplay ={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard,]}
      className="mySwiper"
    >
      <SwiperSlide><div className='slide'><img src={Photo1} alt="image" /></div></SwiperSlide>
      <SwiperSlide><div className='slide'><img src={Photo3} alt="image" /></div> </SwiperSlide>
      <SwiperSlide><div className='slide'><img src={Photo4} alt="image" /></div> </SwiperSlide>
      <SwiperSlide><div className='slide'><img src={Photo5} alt="image" /></div> </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Imageslider