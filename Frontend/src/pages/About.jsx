import React from 'react';
import ImageSlider from '../components/ImageSlider';
import FacilitiesCard from '../components/FacilitiesCard';

const About = () => {
  return (
    <div>
      <ImageSlider />

      {/* Introduction */}
      <div className="px-5 lg:px-20 lg:w-[80%] lg:ml-40 mt-10">
        <h1 className="text-4xl font-serif mb-5 text-blue-500">Introduction</h1>
        <p className="font-serif text-gray-600 leading-6 tracking-wider text-lg">
          Shree Narayan Mavi Secondary School is dedicated to delivering quality education through a
          child-friendly environment and modern teaching methodologies. Located in a peaceful and
          academically supportive area of Salyan, our school provides a balanced blend of academic
          excellence, moral values, and practical skills. Our experienced faculty, equipped
          laboratories, and dynamic extracurricular activities foster holistic development in every
          student. We aim to nurture responsible citizens with the knowledge and character to lead
          in their communities and beyond.
        </p>
      </div>

      {/* Facilities */}
      <div className="flex flex-col items-center mt-28 border-t border-gray-400">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mt-20">Our Facilities</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-5 ml-10 text-center">
          We provide modern educational facilities that ensure a rich and practical learning
          experience for all our students.
        </p>
      </div>

      <div className="flex w-full mt-20">
        <FacilitiesCard
          arr={[
            {
              title: 'Well-Equipped Classrooms',
              description:
                'Bright, spacious, and technology-supported classrooms designed to promote interactive and engaging learning.',
            },
            {
              title: 'Science & Computer Labs',
              description:
                'Hands-on learning with modern physics, chemistry, biology, and computer labs to enhance scientific and technological skills.',
            },
            {
              title: 'Sports & Extracurricular Activities',
              description:
                'From football and volleyball to cultural events and student clubs — we focus on physical health, creativity, and teamwork.',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default About;
