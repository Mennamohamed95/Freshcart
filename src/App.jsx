import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Products from './Components/Products/Products.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import UserContextProvider, { UserContext } from './Context/UserContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import { Toaster } from 'react-hot-toast'
import WishListContextProvider ,{WishListContext} from './Context/WishListContext.jsx'
import CartContextProvider from './Context/CartContext.jsx'
import WishList from './Components/WishList/WishList.jsx'
import AllOrders from './Components/AllOrders/AllOrders.jsx'
import CheckOut from './Components/CheckOut/CheckOut.jsx'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword.jsx'
import EnterNewPassword from './Components/EnterNewPassword/EnterNewPassword.jsx'
import ResetPassword from './Components/resetPassword/resetPassword.jsx'




let routers = createBrowserRouter([
  {path: "", element: <Layout/>, children :[
    {index : true, element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'wishList' , element:<ProtectedRoute><WishList/></ProtectedRoute>},
    {path:'allorders' , element:<ProtectedRoute><AllOrders/></ProtectedRoute>},
    {path:'checkout' , element:<ProtectedRoute><CheckOut/></ProtectedRoute>},
    {path:'forgetPassword' , element:<ForgetPassword/>},
    {path:'resetPassword' , element:<ResetPassword/>},
    {path:'enterNewPassword' , element:<EnterNewPassword/>},
    {path:'ProductDetails/:id' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'login' , element:<Login/> },
    {path: 'register' , element:<Register/> },
    {path:'*' , element:<Notfound/>},
  ]}
])

function App() {
  

  return <WishListContextProvider>
    <CartContextProvider>
    <UserContextProvider>
    <RouterProvider router={routers}></RouterProvider>
    <Toaster/>
    </UserContextProvider>
    </CartContextProvider> 
  </WishListContextProvider>
  

}

export default App
