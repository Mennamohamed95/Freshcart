import React, { useState } from 'react'
import style from './ProductByCategory.module.css'
import Slider from 'react-slick';

export default function ProductByCategory() {

  // console.log(productByCategory)



  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
  };
    
  return <>
    <div className="py-4">
    <Slider {...settings}>
      { <div>
        
      </div> }
    </Slider>
    </div>
  
  </>
}
