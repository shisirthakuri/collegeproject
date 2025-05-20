import React from 'react'
import img1 from '../assets/img1.jpg'
import DocumentListing from '../components/DocumentListing'
const Notice = () => {
  return (
    <div className='flex flex-col'>
     <img src={img1} alt='no image found' className='w-[85rem] h-[40rem] ml-20 rounded-b-lg'/>
     <DocumentListing/>
    </div>
  )
}

export default Notice
