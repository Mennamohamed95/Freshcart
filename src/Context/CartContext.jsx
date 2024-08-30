import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export let  CartContext = createContext()

export default function CartContextProvider({children}){
    let headers = {token: localStorage.getItem('user Token')}


    const [cart, setCart] = useState(null)
    const [loading, setLoading] = useState(false)

    async function AddProductToCart(productId) {
        try{
            setLoading(true)
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
                productId
            },{
                headers
            })
            toast.success(data.message)
            setCart(data)
            setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false)
            
        }
    }
    async function updateProductCount(productId , count) {
        if (count > 0) {
            try{
                setLoading(true)
                let {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
                    count
                },{
                    headers
                })
                setCart(data)
                setLoading(false)
            }catch(err){
                console.log(err)
                setLoading(false)
                
            } 
        }else{
            deleteProduct(productId)
        }
       
    }
    async function deleteProduct(productId) {
            try{
                setLoading(true)
                let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
                    headers
                })
                // console.log(data)
                setCart(data)
                setLoading(false)
            }catch(err){
                console.log(err)
                setLoading(false)
                
            } 
        
       
    }

    async function getCart(){
        try{
            setLoading(true)
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
                headers
            })
            // console.log(data)
            setCart(data)
            setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false)
            
        }
    }


    async function checkout(shippingAddress) {
        try{
            setLoading(true)
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`,{
                shippingAddress
            },{
                headers
            })
            console.log(data)
            window.location.href = data.session.url
            
            
            setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false)
            
        }
    }


    async function clearCart() {
        try{
            setLoading(true)
            let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
                headers
            })
            
            setCart(null)
            setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false)
            
        } 
    
   
}


   useEffect(()=>{
    getCart()
   } , [])
    


    return <CartContext.Provider value={{clearCart , checkout , AddProductToCart , cart , getCart, setCart , updateProductCount , loading ,deleteProduct }}>
        {children}
    </CartContext.Provider>

}

