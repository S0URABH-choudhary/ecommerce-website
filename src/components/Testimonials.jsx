import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import profile from "../assets/profile.avif";
import { FaQuoteLeft } from "react-icons/fa6";
import { BiSolidQuoteAltRight } from "react-icons/bi";

import "./Testimonials..css";

function Testimonials() {
  return (
    <>
      <Swiper style={{}}
        breakpoints={{
          320:{
            slidesPerView:1,
          },
          768:{
            slidesPerView:2,

          }
        }}
        spaceBetween={20}
        Autoplay={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
        clickable: true,
        }}
        
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="testimonial-holder">
            <div className="box">
            <p><FaQuoteLeft style={{
              display: "inline",
              opacity: "0.5",
              marginRight: "1vw"}} />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium illum ex impedit quia voluptatum et deleniti aperiam reprehenderit laboriosam voluptatibus, assumenda eligendi recusandae modi adipisci eum nesciunt culpa dolorum quas! <BiSolidQuoteAltRight style={{
              display: "inline-block",
              opacity: "0.5",
              marginLeft: "1vw"
            }}/></p>
            </div>
            <div className="data">
              <img src={profile} alt="image" id="testimonial-image" />
              <h4>name</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-holder">
            <div className="box"><p><FaQuoteLeft style={{
              display: "inline",
              opacity: "0.5",
              marginRight: "1vw"}} />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium illum ex impedit quia voluptatum et deleniti aperiam reprehenderit laboriosam voluptatibus, assumenda eligendi recusandae modi adipisci eum nesciunt culpa dolorum quas! <BiSolidQuoteAltRight style={{
              display: "inline-block",
              opacity: "0.5",
              marginLeft: "1vw"
            }}/></p></div>
            <div className="data">
              <img src={profile} alt="" id="testimonial-image" />
              <h5>name</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-holder">
            <div className="box"><p><FaQuoteLeft style={{
              display: "inline",
              opacity: "0.5",
              marginRight: "1vw"}} />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium illum ex impedit quia voluptatum et deleniti aperiam reprehenderit laboriosam voluptatibus, assumenda eligendi recusandae modi adipisci eum nesciunt culpa dolorum quas! <BiSolidQuoteAltRight style={{
              display: "inline-block",
              opacity: "0.5",
              marginLeft: "1vw"
            }}/></p></div>
            <div className="data">
              <img src={profile} alt="" id="testimonial-image" />
              <h5>name</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-holder">
            <div className="box"><p><FaQuoteLeft style={{
              display: "inline",
              opacity: "0.5",
              marginRight: "1vw"}} />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium illum ex impedit quia voluptatum et deleniti aperiam reprehenderit laboriosam voluptatibus, assumenda eligendi recusandae modi adipisci eum nesciunt culpa dolorum quas! <BiSolidQuoteAltRight style={{
              display: "inline-block",
              opacity: "0.5",
              marginLeft: "1vw"
            }}/></p></div>
            <div className="data">
              <img src={profile} alt="" id="testimonial-image" />
              <h5>name</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-holder">
            <div className="box"><p><FaQuoteLeft style={{
              display: "inline",
              opacity: "0.5",
              marginRight: "1vw"}} />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium illum ex impedit quia voluptatum et deleniti aperiam reprehenderit laboriosam voluptatibus, assumenda eligendi recusandae modi adipisci eum nesciunt culpa dolorum quas! <BiSolidQuoteAltRight style={{
              display: "inline-block",
              opacity: "0.5",
              marginLeft: "1vw"
            }}/></p></div>
            <div className="data">
              <img src={profile} alt="" id="testimonial-image" />
              <h5>name</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-holder">
            <div className="box"><p><FaQuoteLeft style={{
              display: "inline",
              opacity: "0.5",
              marginRight: "1vw"}} />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium illum ex impedit quia voluptatum et deleniti aperiam reprehenderit laboriosam voluptatibus, assumenda eligendi recusandae modi adipisci eum nesciunt culpa dolorum quas! <BiSolidQuoteAltRight style={{
              display: "inline-block",
              opacity: "0.5",
              marginLeft: "1vw"
            }}/></p></div>
            <div className="data">
              <img src={profile} alt="" id="testimonial-image" />
              <h5>name</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Testimonials;
