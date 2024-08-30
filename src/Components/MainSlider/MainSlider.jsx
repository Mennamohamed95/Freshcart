import React, { useState } from 'react'
import style from './MainSlider.module.css'
import Slider from 'react-slick'
import slider1 from '../../assets/images/slider-image-1.jpeg'
import slider2 from '../../assets/images/slider-image-2.jpeg'
import slider3 from '../../assets/images/slider-image-3.jpeg'
import photo1 from '../../assets/images/photo1.jpg'
import photo2 from '../../assets/images/photo2.jpg'

export default function MainSlider() {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };


    
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:w-3/4 w-full">
          <Slider {...settings}>
            <div>
              <img src={slider1} className='w-full h-[400px] object-cover' alt="Slide 1" />
            </div>
            <div>
              <img src={slider2} className='w-full h-[400px] object-cover' alt="Slide 2" />
            </div>
            <div>
              <img src={slider3} className='w-full h-[400px] object-cover' alt="Slide 3" />
            </div>
          </Slider>
        </div>
        <div className="lg:w-1/4 w-full flex flex-col ">
          <img src={photo1} className='w-full h-[200px] object-cover' alt="Photo 1" />
          <img src={photo2} className='w-full h-[200px] object-cover' alt="Photo 2" />
        </div>
      </div>
    </div>
  );
}