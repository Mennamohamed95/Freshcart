import React, { useContext, useState } from 'react'
import style from './CheckOut.module.css'
import { Formik, useFormik } from 'formik'
import* as Yup from 'Yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'


export default function CheckOut() {
  
  let {checkout} = useContext(CartContext)



let Formik = useFormik({
  initialValues:{
    details:'',
    phone:'',
    city:'',

  },onSubmit:checkout
})

return(<>

     
     <form onSubmit={Formik.handleSubmit} className='w-1/2 mx-auto py-8'>
      
    

      <div className="relative w-full mb-3 group py-3">
      <input type="text" name="details" id="details" value={Formik.values.details} onChange={Formik.handleChange} onBlur={Formik.handleBlur} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
      <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your details</label>
      </div>
      
      <div className="relative w-full mb-3 group py-3">
      <input type="text" name="city" id="city" value={Formik.values.city} onChange={Formik.handleChange} onBlur={Formik.handleBlur} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your city</label>
      </div>


      <div className="relative w-full mb-3 group py-3">
      <input type="tel" name="phone" id="phone" value={Formik.values.phone} onChange={Formik.handleChange} onBlur={Formik.handleBlur} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your phone</label>
      </div>
      

       
      <button type="submit" className="text-white bg-emerald-500
       hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">check out</button>  
       
     </form>
  
  </>)

}