import React, { useEffect, useState } from 'react'
import style from './CategorySlider.module.css'
import Slider from "react-slick"
import axios from 'axios'

export default function CategorySlider() {
  const [categories, setCategories] = useState([])
  async function getRecentCategories() {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    setCategories(data.data)

  }
  
  useEffect(()=>{
    getRecentCategories()
  } ,[])


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



    
  return <>
 
    <div className="py-4">
    <Slider {...settings}>
      {categories?.map((category , index)=> <div key={index}>
        <img  className='w-full h-[200px]' src={category.image}/>
        <h2 className='text-start text-black mt-2'>{category.name}</h2>
      </div> )}
    </Slider>
    </div>
  
  </>
}
