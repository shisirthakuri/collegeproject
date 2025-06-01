import React from 'react'
import img1 from '../assets/img1.jpg'
import ScholarTable from '../components/ScholarTable'
const ScholarShips = () => {
  return (
    <div className='flex flex-col lg:p-x-20'>
       <img src={img1} alt='no image found' className='  w-full h-[30rem]  object-cover lg:w-[85rem] lg:h-[40rem] lg:ml-20 rounded-b-lg'/>
        <div className='px-5 lg:p-x-20 lg:w-300  lg:ml-40 mt-10'>
        <h1 className="text-4xl font-serif mb-5 text-blue-500">Scholarships</h1>
        <p className='font-serif text-gray-600 leading-6 tracking-wider text-lg'>We offer a play-based emergent curriculum complete with low teacher to child ratios. Come see our environment. Omega International H.S.S. & College has been suitably located in Lalitpur at Kumaripati in a serene and academic supportive environment over an impressive landscape. Its team is a unique creation of some of Nepal’s well-known educationists, academicians and scholars from diverse subject background required for the disciplines of Science, Management and Humanities. Such team of professionally trained and experienced teacher guides students continuously for competitive theoretical and practical knowledge. There are well equipped Physics, Chemistry, Biology and Computer Laboratories; spacious sports field and sophisticated library for acquiring knowledge and skills.</p>
   </div>
   <ScholarTable/>
   <h1 className='font-serif text-gray-600 leading-6 tracking-wider text-md lg:ml-40 '> # Above table scholarships criteria is apply for <span className='bg-gray-300 p-1'>all classes</span></h1>
    </div>
  )
}

export default ScholarShips
