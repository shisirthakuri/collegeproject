import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import img1 from '../assets/img6.jpg';
import { Bell } from 'lucide-react';
import CardComponent from '../components/common/Card';
import Button from '../components/common/Button';
import FacilitiesCard from '../components/FacilitiesCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchNoticeBannerThunk } from '../store/Notice/FetchNoticeBanner/FetchBannerNoticeThunk';
import { photoquoteThunk } from '../store/photoquote/PhotoQuoteGetThunk';

const Home = () => {
  const navigate =useNavigate()
  const dispatch =useDispatch()
  const notice = useSelector((state)=>state.noticebannerfetch.notice)
const data = useSelector((state)=>state.photoquote.data)
console.log(data)
const teacherdata = data.slice(0)
console.log(teacherdata)
  useEffect(()=>{
    dispatch(photoquoteThunk())
    dispatch(FetchNoticeBannerThunk())
  },[])

  
  // Ref for HeroSection to trigger animation when in view
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  // Ref for Facilities section
  const facilitiesRef = useRef(null);
  const isFacilitiesInView = useInView(facilitiesRef, { once: true });

  // Ref for Teachers section
  const teachersRef = useRef(null);
  const isTeachersInView = useInView(teachersRef, { once: true });

  // Fade-up animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.3 },
    }),
  };

  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };


  
  
  return (
    <div className="w-full h-full overflow-hidden flex flex-col">        
   <div className="w-full h-14 bg-blue-600 flex items-center overflow-hidden relative">
<div className='w-32 h-full bg-red- flex items-center justify-center z-20 bg-blue-600'>
    <Bell size={23} color="white" className="ml-4 z-10" />
  <h1 className="font-bold text-white text-xl ml-2 z-10">Notice:</h1>
</div>

  {/* Scrolling notice text */}
  <motion.div className="absolute ml-40  whitespace-nowrap text-white  text-lg pl-8 font-medium" animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}>
    {notice}
  </motion.div>
</div>
      {/* HeroSection */}
      <motion.div ref={heroRef} className="h-[40rem] w-full bg-center bg-cover" style={{ backgroundImage: `url(${img1})`,backgroundRepeat:'no-repeat'}}>
              {/* Notices Section */}
        <motion.div
          className="w-full h-[40rem] pt-20 inset-0 bg-black/60 lg:pl-40 lg:pt-40"
          initial={{ opacity: 0 }}
          animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            custom={0} // Topic (first to animate)
            variants={fadeUpVariants}
            initial="hidden"
            animate={isHeroInView ? 'visible' : 'hidden'}
            className="font-bold text-white text-2xl lg:text-4xl ml-5 lg:ml-0"
          >
            Shree Narayan Mavi Secondary School Salyan
          </motion.h1>
          <motion.h1
            custom={1} // Title (second to animate)
            variants={fadeUpVariants}
            initial="hidden"
            animate={isHeroInView ? 'visible' : 'hidden'}
            className="lg:font-bold font-semibold text-gray-50 lg:text-lg mt-3 ml-5 lg:ml-0"
          >
            School is running different program since it's established
          </motion.h1>
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isHeroInView ? 'visible' : 'hidden'}
            className='ml-5 lg:ml-0 flex items-center h-12'
          >
            <Button
              css="bg-blue-500 hover:bg-blue-600 p-3 text-white rounded-md text-lg mt-8"
              text="Admission Now"
              onclick="contact"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Principle Section */}
      <motion.div
        className="flex  lg:flex-row flex-col w-full mt-10 lg:ml-20 lg:gap-x-60 "
        variants={containerVariants}
        initial="hidden"
        animate={isHeroInView ? 'visible' : 'hidden'}
      >
        <motion.img
          src={data[0]?.profileurl}
          alt="Principle"
          variants={fadeUpVariants}
          custom={0}
          className="w-[15rem] h-[18rem] rounded-md ml-16 lg:ml-0"
        />
        <motion.div
          variants={fadeUpVariants}
          custom={1}
          className="md:w-1/2 hover:shadow-indigo-300 hover:shadow-lg rounded-lg border lg:w-[50rem] mt-10 lg:mt-0"
        >
          <div className="flex justify-center items-start flex-col p-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="icon icon-tabler icon-tabler-quote rotate-180 text-sky-500"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5"></path>
            </svg>
            <div className="flex justify-center items-start w-full flex-col text-left gap-5 ">
              <p className="italic text-wrap">
            {data[0]?.quote}
              </p>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">{data[0]?.Name}</h3>
                <p className="text-xs md:text-sm">Principle of narayan mavi</p>
              </div>
            </div>
          </div>
          <div className="bg-sky-500 p-0.5 rounded-b-lg"></div>
        </motion.div>
      </motion.div>

      {/* Facilities Section */}
     <motion.div
  ref={facilitiesRef}
  className="flex flex-col items-center mt-20 border-t border-gray-300 pt-10"
  variants={containerVariants}
  initial="hidden"
  animate={isFacilitiesInView ? 'visible' : 'hidden'}
>
  <motion.div variants={fadeUpVariants} custom={0} className="flex flex-col items-center">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Our School?</h2>
    <motion.p
      variants={fadeUpVariants}
      custom={1}
      className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-5 ml-8 lg:ml-0"
    >
      We’re committed to nurturing students academically, socially, and emotionally with the best facilities and teaching excellence.
    </motion.p>
  </motion.div>
  <motion.div variants={fadeUpVariants} custom={2} className="flex w-full lg:mt-20">
    <FacilitiesCard
      arr={[
        {
          title: 'Dedicated & Skilled Teachers',
          description:
            'Our educators are passionate and well-trained, ensuring every student receives individual attention and academic guidance.',
        },
        {
          title: 'Modern Classrooms & Labs',
          description:
            'Smart classrooms, science labs, and computer labs are equipped with the latest tools to support practical and interactive learning.',
        },
        {
          title: 'Supportive Learning Environment',
          description:
            'From scholarships to extracurricular activities, we foster a balanced development of knowledge, character, and skills.',
        },
      ]}
    />
  </motion.div>
</motion.div>

      {/* Teachers Section */}
      <motion.div
        ref={teachersRef}
        className="mb-12 text-center mt-25"
        variants={containerVariants}
        initial="hidden"
        animate={isTeachersInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={fadeUpVariants}
          custom={0}
          className="mb-4 text-3xl font-bold sm:text-4xl"
        >
          What Teachers Are Saying
        </motion.h2>
        <motion.p
          variants={fadeUpVariants}
          custom={1}
          className="max-w-2xl mx-auto text-lg text-gray-600"
        >
          This statement was taken directly from the teacher's side, not scripted.
        </motion.p>
      </motion.div>
      <motion.div
        className="flex flex-wrap gap-10 lg:gap-4 lg:pl-16"
        variants={containerVariants}
        initial="hidden"
        animate={isTeachersInView ? 'visible' : 'hidden'}
      >
        {data.length > 0 &&
          data.slice(1).map((item, index) => (
            <motion.div key={item._id} variants={fadeUpVariants} custom={index}>
              <CardComponent name={item?.Name} imageUrl={item?.profileurl} message={item?.quote} />
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export default Home;