import React from 'react'
import img1 from '../assets/img4.jpg'
import { ExternalLink } from 'lucide-react'
import { Route, Routes, useNavigate } from 'react-router-dom'
const ImagePage = () => {
    const navigate =useNavigate()
    const image=[
        {
            id:1,
            title:"annual function",
            image:img1
        },
           {
            id:2,
            title:"Esports",
              image:img1
        },
           {
            id:3,
            title:"Farewell program",
              image:img1
        }
    ]
  return (
    <div>
        <img src={img1} alt='no image found' className=' w-full h-[30rem]  object-cover  lg:w-[85rem] lg:h-[40rem] lg:ml-20 rounded-b-lg '/>
       <h1 className="text-4xl font-serif mb-5 text-blue-500 lg:ml-24 mt-10">Gallery</h1>
       <div className=' flex flex-col lg:flex-row  gap-y-6 lg:gap-x-10 lg:ml-24 ' onClick={()=>navigate('/imagesection')}>
       {
        image?.map((item)=>(
            <div key={item.id} className='w-100 h-70 bg-gray-200 rounded-2xl  bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${item.image})`}}>
                 <div className=' w-full h-full inset-0 bg-black/60 pt-60 pl-3 text-white flex gap-x-1 rounded-2xl hover:text-blue-500'>
                    {item.title}
                    <ExternalLink/>
                    </div>
            </div>
        ))
       }
       </div>
    </div>
  )
}

export default ImagePage
