import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';





export let WishListContext = createContext()
export default function WishListContextProvider({children}){

    let headers = {token: localStorage.getItem('user Token')}
    const [wishList, setWishList] = useState(null)
    const [loading, setLoading] = useState(false)
    const [iconColor,setIconColor] = useState('black');




    async function AddProductToWishList(productId) {
        try{
            setLoading(true)
            let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
                productId
            },{
                headers
            })
            toast.success(data.message)
            setWishList(data)
            setIconColor('red')
            setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false)
            
        }
    }

    async function GetWishList() {
        try{
            setLoading(true)
            let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
                headers
            })
        
            setWishList(data)
            setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false)
            
        }
    }

    async function RemoveProductFromWishList(productId) {
        try{
            setLoading(true)
            let {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
                headers
            })
          
            setWishList(data)
            GetWishList()
            setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false)
            
        }
    }
    useEffect(()=>{
        GetWishList()
    } , [])




    return(<>
    <WishListContext.Provider value={{AddProductToWishList ,iconColor , setIconColor , wishList , GetWishList , RemoveProductFromWishList , loading}}>
        {children}
    </WishListContext.Provider>
    </>)
}