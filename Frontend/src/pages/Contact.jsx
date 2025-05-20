import React from 'react'
import ContactSection from '../components/ContactSection'
import img1 from '../assets/img1.jpg'
const Contact = () => {
  return (
     <div className='flex flex-col'>
          <img src={img1} alt='no image found' className='w-[85rem] h-[40rem] ml-20 rounded-b-lg'/>
 <div className="container  py-10 px-4">
      <ContactSection />
    </div>
    </div>
  )
}

export default Contact
