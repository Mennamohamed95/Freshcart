import React, { useContext, useState } from 'react'
import style from './RecentProduct.module.css'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { WishListContext } from '../../Context/WishListContext'


export default function RecentProduct({product}) {

 let {AddProductToCart} = useContext(CartContext)
 let {AddProductToWishList , iconColor , setIconColor} = useContext(WishListContext)
 const [isWishListed, setisWishListed] = useState(false)
 const handelWishListClick = ()=>{
  AddProductToWishList(product.id);
  setisWishListed(true)

 }
  

    
  return <>


  <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 gap-4 product hover:shadow-lime-200 hover:shadow-lg px-3 py-4 me-2 relative">
  <div>
    <Link to={`/ProductDetails/${product.id}`}>
    <img src={product.imageCover}  className='w-full' alt={product.title} />
    <h2 className='text-main text-sm'>{product.category.name} </h2>
    <h2 className='font-medium'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
    <div className='flex justify-between my-2'>
      <h3>{product.price} EGP</h3>
      <h3><i className='fas fa-star rating-color'></i>{product.ratingsAverage}</h3>

    </div>
    </Link>
    <button onClick={()=> AddProductToCart(product.id)} className='btn w-full bg-main text-white rounded py-1'>+ Add To Cart</button>
    <button  onClick={handelWishListClick} style={{color: isWishListed? 'red' : 'black'}} className='absolute top-[5px] right-[10px] z-10 '><i className="fa-solid fa-heart text-lg"></i></button>
    
   
  </div>
  </div>
    
    
  
  </>
}
