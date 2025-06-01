import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/ImageSlider'
import FacilitiesCard from '../components/FacilitiesCard'
const About = () => {
    
  return (
    <div>
     <ImageSlider/>
     <div className='p-x-20 lg:w-300  lg:ml-40 mt-10'>
        <h1 className="text-4xl font-serif mb-5 text-blue-500">Introduction</h1>
        <p className='font-serif text-gray-600 leading-6 tracking-wider text-lg'>We offer a play-based emergent curriculum complete with low teacher to child ratios. Come see our environment. Omega International H.S.S. & College has been suitably located in Lalitpur at Kumaripati in a serene and academic supportive environment over an impressive landscape. Its team is a unique creation of some of Nepal’s well-known educationists, academicians and scholars from diverse subject background required for the disciplines of Science, Management and Humanities. Such team of professionally trained and experienced teacher guides students continuously for competitive theoretical and practical knowledge. There are well equipped Physics, Chemistry, Biology and Computer Laboratories; spacious sports field and sophisticated library for acquiring knowledge and skills.</p>
     </div>
          <div className=' flex flex-col items-center mt-30 border-t border-gray-400'>
             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-20">Our Facilities</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-5 ml-10">
                  Our platform provides all the tools you need to succeed in today's digital landscape.
                </p>
          </div>
      <div className="flex w-full mt-20">
        <FacilitiesCard arr={[
            {
              title: "Modern Library",
              description: "Access thousands of books, digital resources, and peaceful reading zones to enhance your learning",
            },
            {
              title: "Science & Computer Labs",
              description: "Well-equipped laboratories for hands-on learning in physics, chemistry, biology, and computer science.",
            },
            {
              title: "Sports & Extra Activities",
              description: "We encourage holistic development through sports, cultural programs, and leadership-building events",
            },
          ]}/>
        </div>
    </div>
  )
}

export default About


