import React from 'react'
import img1 from '../assets/img6.jpg'
import { Bell, CheckCircle2 } from 'lucide-react'
import principle from '../assets/principle.jpg'
import CardComponent from '../components/common/Card'
import Button from '../components/common/Button'
import FacilitiesCard from '../components/FacilitiesCard'
const Home = () => {
  const arr = [
    {
      id: 1,
      name: "ram",
      message: "",
      imageUrl: ""
    },
    {
      id: 2,
      name: "shayam",
      message: "",
      imageUrl: ""
    }, {
      id: 3,
      name: "hhh",
      message: "",
      imageUrl: ""
    },
    {
      id: 4,
      name: "shisir",
      message: "",
      imageUrl: ""
    },
    {
      id: 5,
      name: "virus",
      message: "",
      imageUrl: ""
    },
  ]


  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='w-full h-15 bg-blue-500 flex gap-x-4 items-center'>
        <Bell size={23} color="white" className='ml-5' />
        <h1 className='font-bold text-white text-2xl'>
          Notices</h1>
      </div>
      <div className='h-[40rem] w-[100rem]' style={{ backgroundImage: `url(${img1})` }}>
        <div className=' w-full h-[40rem] inset-0 bg-black/60 pl-40 pt-40'>
          <h1 className='font-bold text-white text-4xl'> Shree Narayan Mavi Secondary </h1>
          <h1 className='font-bold text-white text-4xl'> School Salyan</h1>
          <h1 className='font-bold text-gray-50 text-lg mt-3'>School is running different program since it's established</h1>
        <Button css="bg-blue-500 hover:bg-blue-600 p-3 text-white rounded-md text-lg mt-8" text=" Admission Now" />
        </div>
      </div>
      <div className='flex w-full  mt-10 ml-20 gap-x-80'>
        <img src={principle} alt='no image found' className='w-[15rem]  h-[18rem] rounded-md' />
        <div className="  md:w-1/2  hover:shadow-indigo-300 hover:shadow-lg rounded-lg border w-[140rem]">
          <div className="flex justify-center items-start flex-col p-5 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              className="icon icon-tabler icon-tabler-quote rotate-180 text-sky-500" viewBox="0 0 24 24">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path
                d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5">
              </path>
            </svg>
            <div className="flex justify-center items-start w-full flex-col text-left gap-5">
              <p className="italic text-wrap">
                Here goes the review submitted by user,
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam mollitia et
                Lorem ipsum dolor sit , Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ea labore. Cupiditate quasi eius quis dolore et laboriosam excepturi delectus ipsa, officia nam, quod perferendis cumque, tenetur aperiam ex. Inventore. </p>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">Dabendra Rawat</h3>
                <p className="text-xs md:text-sm">Principle of narayan mavi</p>
              </div>
            </div>
          </div>
          <div className="bg-sky-500 p-0.5 rounded-b-lg"></div>
        </div>
      </div>
      <div>

      </div>
        <div className='flex flex-col items-center mt-20 border-t border-gray-300 pt-10'>
          <div className=' flex flex-col items-center'>
             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-5">
                  Our platform provides all the tools you need to succeed in today's digital landscape.
                </p>
          </div>
          <div className="flex w-full mt-20">
        <FacilitiesCard arr={[
            {
              title: "Experienced Faculty",
              description: "Learn from dedicated teachers with years of experience in teaching and guiding students to success",
            },
            {
              title: "Quality Education",
              description: "Our curriculum blends theory and practice, preparing students for higher studies and real-world challenges",
            },
            {
              title: "Scholarship Opportunities",
              description: "We offer merit-based and need-based scholarships to encourage and support our students",
            },
          ]}/>
        </div>
      </div>
      <div class="mb-12 text-center mt-25">
        <h2 class="mb-4 text-3xl font-bold sm:text-4xl">
          What Teachers Are Saying
        </h2>
        <p class="max-w-2xl mx-auto text-lg text-gray-600">
          Hear from tools that have successfully listed on our platform
        </p>
      </div>
      
      <div className='flex  flex-wrap gap-4 pl-20'>
        {
          arr.length > 0 ? arr.map((item) => (
            <CardComponent name={item.name} imageUrl={item.imageUrl} message={item.message} key={item.id} />)) : null
        }
      </div>

    </div>


  )
}

export default Home
