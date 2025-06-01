import React from 'react'
import ContactSection from '../components/ContactSection'
import img1 from '../assets/img1.jpg'
const Contact = () => {
  return (
     <div className='flex flex-col'>
          <img src={img1} alt='no image found' className='w-full h-[30rem]  object-cover lg:w-[85rem] lg:h-[40rem] lg:ml-20 rounded-b-lg'/>
 <div className="container  lg:py-10 lg:px-4">
      <ContactSection />
    </div>
    </div>
  )
}

export default Contact
