import React, { useContext, useState } from 'react'
import style from './Register.module.css'
import { Formik, useFormik } from 'formik'
import* as Yup from 'Yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'


export default function Register() {
  let navigate = useNavigate()

  let {setUserData} = useContext(UserContext)
  

  const [apiErrors, setApiErrors] = useState(null)
  const [loading, setLoading] = useState(false)

  async function register(values) {
    try{
      setLoading(true)
      let {data} =await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)

      localStorage.setItem('user Token' , data.token)
      navigate('/')
      setUserData(data.token)
      


    }catch(err){

      setApiErrors(err.response.data.message)
      setLoading(false)
    }
    
  }

let validationSchema =Yup.object().shape({
  name:Yup.string().min(3,"min length is 3").max(10 , "max lenght is 10").required("name is requierd"),
  email:Yup.string().email("email is invalid").required("email is requierd"),
  password:Yup.string().matches(/^[A-Z]\w{5,10}$/, 'password invalid ex(Ahmed123)').required("password is requierd"),
  rePassword:Yup.string().oneOf([Yup.ref('password')]).required("repassword is requierd"),
  phone:Yup.string().matches(/^(002)?01[0125][0-9]{8}$/ , "phone must be an egyptian number").required("phone is requierd")
})

let Formik = useFormik({
  initialValues:{
  name:'',
  email:'',
  password:'',
  rePassword:'',
  phone:''
  },validationSchema
  ,onSubmit:register
})

return(<>

     <h1 className='text-2xl font-semibold py-8 w-1/2 mx-auto'>Register Now:</h1>
     <form onSubmit={Formik.handleSubmit} className='w-1/2 mx-auto py-8'>
     {apiErrors && <div className="px-4 py-2 mb-2 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">
        {apiErrors}
        </div>}
     <div className="relative w-full mb-3 group py-3">
      <input type="text" name="name" id="name" value={Formik.values.name} onChange={Formik.handleChange} onBlur={Formik.handleBlur} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Name</label>
      </div>
      {Formik.errors.name && Formik.touched.name&&<div className="px-4 py-2 mb-2 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">
        {Formik.errors.name}
        </div>}

      <div className="relative w-full mb-3 group py-3">
      <input type="email" name="email" id="email" value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Email</label>
      </div>
      {Formik.errors.email && Formik.touched.email&&<div className="px-4 py-2 mb-2 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">
        {Formik.errors.email}
        </div>}

      <div className="relative w-full mb-3 group py-3">
      <input type="password" name="password" id="password" value={Formik.values.password} onChange={Formik.handleChange} onBlur={Formik.handleBlur} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Password</label>
      </div>
      {Formik.errors.password && Formik.touched.password&&<div className="px-4 py-2 mb-2 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">
        {Formik.errors.password}
        </div>}

      <div className="relative w-full mb-3 group py-3">
      <input type="password" name="rePassword" id="rePassword" value={Formik.values.rePassword} onChange={Formik.handleChange} onBlur={Formik.handleBlur} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
      <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Repassword</label>
      </div>
      {Formik.errors.rePassword && Formik.touched.rePassword&&<div className="px-4 py-2 mb-2 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">
        {Formik.errors.rePassword}
        </div>}

      <div className="relative w-full mb-3 group py-3">
      <input type="tel" name="phone" id="phone" value={Formik.values.phone} onChange={Formik.handleChange} onBlur={Formik.handleBlur} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" " />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your Phone</label>
      </div>
      {Formik.errors.phone && Formik.touched.phone&&<div className="px-4 py-2 mb-2 text-sm text-red-800 rounded-lg bg-red-50  dark:text-red-400" role="alert">
        {Formik.errors.phone}
        </div>}
      
       
       {loading?  <button type="button" className="text-white bg-emerald-500
       hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"><i className='fas fa-spinner fa-spin-pulse'></i></button>:
      <button type="submit" className="text-white bg-emerald-500
       hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Submit</button>  }
       
     </form>
  
  </>)

}
