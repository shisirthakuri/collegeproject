import React from 'react'
import img1 from '../assets/img1.jpg'
import DocumentListing from '../components/DocumentListing'
const Notice = () => {
  
  return (
    <div className='flex flex-col'>
     <img src={img1} alt='no image found' className=' w-full h-[30rem]  object-cover lg:w-[85rem] lg:h-20rem lg:h-[40rem] lg:ml-20 rounded-b-lg'/>
     <DocumentListing/>
    </div>
  )
}

export default Notice
