import React, { useState } from 'react'
import img1 from '../assets/img1.jpg'
import ClassDetail from '../components/ClassDetail'
const Courses = () => {
    const[showClass,setShowClass]=useState(1)
    const setvalue=(text)=>{
        setShowClass(text)
    }
  return (
    <div className='flex flex-col'>
      <img src={img1} alt='no image found' className=' w-full h-[30rem]  object-cover lg:w-[85rem] lg:h-[40rem] lg:ml-20 rounded-b-lg'/>

      <h1 className=" mt-16 text-2xl font-serif lg:ml-20 mb-5">Courses of Study</h1>
 <select
        className="p-3  w-[50%]  lg:ml-20  rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
        onChange={(text)=>setvalue(text.target.value)}
      >
        <option value="" disabled hidden>choose class</option>
        <option value="1">Option One</option>
        <option value="2">Option Two</option>
        <option value="3">Option Three</option>
      </select>
      <ClassDetail classes={showClass}/>
    </div>
  )
}

export default Courses
