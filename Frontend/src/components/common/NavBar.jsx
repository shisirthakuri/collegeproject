import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import college from '../../assets/collegeLogo.png'
const NavBar = () => {
  return (
    <div>
         <header className="sticky top-0 z-50 w-full shadow-lg  bg-background/95 backdrop-blur p-2 pl-10">
        <div className="container flex h-16 items-center justify-between  ">
          <div className="flex items-center  ml-10">
            <Link href="/" className="font-bold text-xl flex items-center gap-3">
              <div className=" rounded-full">
               <img src={college} alt='no image found' className='rounded-full h-15 w-15 '/>
              </div>
              <span>Narayan Mavi</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 ml-24">
            <Link href="#features" className="text-md font-medium p-2 rounded-md hover:bg-gray-100">
                Home
            </Link>
            <Link href="#testimonials" className="text-md font-medium p-2 rounded-md hover:bg-gray-100">
              AboutUs
            </Link>
            <Link href="#pricing" className="text-md font-medium p-2 rounded-md hover:bg-gray-100">
              Notice
            </Link>
            <Link href="#pricing" className="text-md font-medium p-2 rounded-md hover:bg-gray-100">
              Academic
            </Link>
            <Link href="#contact" className="text-md font-medium p-2 rounded-md hover:bg-gray-100">
              Gallery
            </Link>
              <Link href="#contact" className="text-md font-medium p-2 rounded-md hover:bg-gray-100">
              ContactUs
            </Link>
          </nav>
          <div className="flex  gap-x-4"  aria-label='Log in'>
           <button className='bg-blue-500 hover:bg-blue-600 w-20 h-10 text-white rounded-md'>
             <Link href="/login" className=""> 
              Log in
            </Link>
           </button>
            <button  aria-label='SignUp' className='bg-blue-500 hover:bg-blue-600 w-20 h-10 text-white rounded-md'>
              <Link href="/signup">SignUp</Link>
            </button>
            <button variant="ghost" size="icon" className="md:hidden" aria-label='Toggle Menu'>
              <Menu size={23} color="black"/>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar
