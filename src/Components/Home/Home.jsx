import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import RecentProduct from '../RecentProduct/RecentProduct'
import Loading from '../Loading/Loading'
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from '../MainSlider/MainSlider'


export default function Home() {
  const [products, setProducts] = useState([])
  async function getRecentProducts() {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    setProducts(data.data)

  }
  useEffect(()=>{
    getRecentProducts()
  } ,[])


    
  return(
    <>
    <MainSlider/>
    <CategorySlider/>
    {products.length?<div className="flex flex-wrap py-8 px-3 justify-center" >
      {products.map((product ,index)=> <RecentProduct key={index} product={product}/>)}
    </div>:<div className='flex justify-center py-16'><Loading/></div>}
    </>
  )

}