import React, { useEffect, useState } from 'react'
import style from './Categories.module.css'
import axios from 'axios'
import Loading from '../Loading/Loading'

export default function Categories() {

  const [categories, setCategories] = useState(null)
  const [subCategories, setSubCategories] = useState(null);
  const [category, setCategory] = useState(null);
  const [subLoading, setSubLoading] = useState(false);
async function getCategory() {
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  setCategories(data)
  

  
}
async function getSubCategories(categoryId) {
  try {
    setSubLoading(true);
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`
    );
    setSubCategories(data.data);
  } catch (error) {
    console.log(error);
  } finally {
    setSubLoading(false);
  }
}


useEffect(()=>{
getCategory()

} ,[])

    
  return(<> 
  <h2 className='text-center font-serif text-main font-semibold pt-12 pb-2 text-2xl'>All Categories</h2>
 <div className="flex flex-wrap py-8  container mx-auto justify-center gap-5 mt-6" >
 {categories?.data.map((category , i)=> <div  onClick={() => {
                getSubCategories(category._id);
                setCategory(category.name);
              }} key={category._id}  className="sm:w-1/2 lg:w-1/3 xl:w-1/4 cursor-pointer  max-w-sm bg-white border border-gray-200 rounded-lg hover:shadow-md hover:shadow-green-900">

  <a >
  <img className="rounded-t-lg h-[300px] w-full"  src={category.image} alt='' />
</a>
<div className="p-5">
  <a >
    <h5 className="mb-2 text-2xl text-center text-main font-bold tracking-tight">{category.name}</h5>
  </a>
  
 
</div>

  </div>)}

 </div> 

 {subCategories ? (
        <h2 className="text-3xl py-4 my-8 text-center text-green-600 border-t">
          {category}
        </h2>
      ) : (
        ""
      )}
      {subLoading ? (<Loading />) : subCategories ? (<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
        {subCategories.map((category) => (<p key={category._id} className=" flex justify-center items-center shadow p-4 rounded-lg text-lg hover:shadow-2xl hover:scale-[1.01] duration-500" >
          {category.name}</p>))}
      </div>) : ("")}
   


  
  </>
)
}
