import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import college from '../../assets/collegeLogo.png';
import Button from './Button';

const NavBar = () => {
  const [showAcademic, setShowAcademic] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold p-2 rounded-md bg-gray-100'
      : 'text-md font-medium p-2 rounded-md hover:bg-gray-100';

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg bg-background/95 backdrop-blur p-2 pl-10">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center ml-10">
          <NavLink to="/" className="font-bold text-xl flex items-center gap-3">
            <img src={college} alt="College Logo" className="rounded-full h-12 w-12" />
            <span>Narayan Mavi</span>
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 ml-24 relative">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About Us
          </NavLink>
          <NavLink to="/notice" className={linkClasses}>
            Notice
          </NavLink>

          {/* Academic Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowAcademic(true)}
          >
            <button className="text-md font-medium p-2 rounded-md hover:bg-gray-100">
              Academic
            </button>
            {showAcademic && (
              <div className="absolute top-full mt-2 w-40 bg-white shadow-md rounded-md py-2 z-50" onMouseLeave={() => setShowAcademic(false)}>
                <NavLink to="/courses" className="block px-4 py-2 hover:bg-gray-100">
                  Courses
                </NavLink>
                <NavLink to="/scholarships" className="block px-4 py-2 hover:bg-gray-100">
                  Scholarships
                </NavLink>
              </div>
            )}
          </div>
          {/* Gallery Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowGallery(true)}
          >
            <button className="text-md font-medium p-2 rounded-md hover:bg-gray-100">
              Gallery
            </button>
            {showGallery && (
              <div className="absolute top-full mt-2 w-40 bg-white shadow-md rounded-md py-2 z-50" onMouseLeave={() => setShowGallery(false)}>
                <NavLink to="/gallery/video" className="block px-4 py-2 hover:bg-gray-100">
                  Video
                </NavLink>
                <NavLink to="/image" className="block px-4 py-2 hover:bg-gray-100">
                  Image
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className={linkClasses}>
            Contact Us
          </NavLink>
        </nav>

        {/* Auth Buttons and Mobile Menu */}
        <div className="flex items-center gap-x-4">
          <NavLink to="/login">
            <Button css="bg-blue-500 hover:bg-blue-600 w-20 h-10 text-white rounded-md" text="Log in" />
          </NavLink>
          <NavLink to="/signup">
            <Button css="bg-blue-500 hover:bg-blue-600 w-20 h-10 text-white rounded-md" text="Sign Up" />
          </NavLink>
          <button className="md:hidden" aria-label="Toggle Menu">
            <Menu size={23} color="black" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
