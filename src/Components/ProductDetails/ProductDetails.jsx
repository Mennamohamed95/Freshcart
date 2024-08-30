import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import { CartContext } from '../../Context/CartContext';
import ProductByCategory from '../ProductByCategory/ProductByCategory';

export default function ProductDetails() {

  let {AddProductToCart} = useContext(CartContext)
  const [categoryId, setCategoryId] = useState()
  const [productByCategory, setProductByCategory] = useState([])
  let {id} = useParams()
  const [productDetails, setProductDetails] = useState({})
     async function getProductDetails(id) {
    try{
      let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      setProductDetails(data.data)
      setCategoryId(data.data.category._id)
      console.log(data.data.category._id)
    

    }catch(err){
      console.log(err)

    }
      
     }

     async function getProductByCategory(categoryId) {
      let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`)
      setProductByCategory(data)
      console.log(data)  
    }

     useEffect(()=>{
      getProductDetails(id)
      
     },[])

     var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    };

   
    
  return <>
    <div className='flex flex-wrap items-center px-4'>
      <div className='w-1/4 p-4'>
      <Slider {...settings}>
      {productDetails.images?.map((image , index)=> <img key={index} className='w-full' src={image}/>)}
    </Slider>
      </div>
      <div className='w-3/4 p-6'>
      <h2>{productDetails.title}</h2>
      <p className='my-6 text-gray-500'>{productDetails.description}</p>
      <h3>{productDetails.category?.name}</h3>
      <div className='flex justify-between my-2'>
      <h3>{productDetails.price} EGP</h3>
      <h3><i className='fas fa-star rating-color'></i>{productDetails.ratingsAverage}</h3>

    </div>
    <button onClick={()=>AddProductToCart(id)} className='btn w-full bg-main text-white rounded py-1'>Add To Cart</button>
    

      </div>
    </div>

    <ProductByCategory  />
  
  </>
}
