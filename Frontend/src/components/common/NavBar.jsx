import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import college from '../../assets/collegeLogo.png';
import Button from './Button';

const NavBar = () => {
  const [showAcademic, setShowAcademic] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const academicRef = useRef(null);
  const galleryRef = useRef(null);
  const academicTimeoutRef = useRef(null);
  const galleryTimeoutRef = useRef(null);
const navigate = useNavigation()
  // Close dropdowns when clicking outside (for mobile click fallback)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        academicRef.current &&
        !academicRef.current.contains(event.target) &&
        galleryRef.current &&
        !galleryRef.current.contains(event.target)
      ) {
        setShowAcademic(false);
        setShowGallery(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdowns and mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowAcademic(false);
        setShowGallery(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle hover with delay for dropdowns
  const handleMouseEnterAcademic = () => {
    clearTimeout(academicTimeoutRef.current);
    setShowAcademic(true);
    setShowGallery(false); // Close other dropdown
  };

  const handleMouseLeaveAcademic = () => {
    academicTimeoutRef.current = setTimeout(() => {
      setShowAcademic(false);
    }, 200); // 200ms delay
  };

  const handleMouseEnterGallery = () => {
    clearTimeout(galleryTimeoutRef.current);
    setShowGallery(true);
    setShowAcademic(false); // Close other dropdown
  };

  const handleMouseLeaveGallery = () => {
    galleryTimeoutRef.current = setTimeout(() => {
      setShowGallery(false);
    }, 200); // 200ms delay
  };

  // Click fallback for mobile
  const handleClickAcademic = () => {
    setShowAcademic(!showAcademic);
    setShowGallery(false);
  };

  const handleClickGallery = () => {
    setShowGallery(!showGallery);
    setShowAcademic(false);
  };

  const linkClasses = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold p-2 rounded-md bg-gray-100'
      : 'text-md font-medium p-2 rounded-md hover:bg-gray-100';

  // Animation variants for Framer Motion
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

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
        <nav
          className={`${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row gap-6 ml-0 md:ml-24 absolute md:static top-16 left-0 w-full md:w-auto bg-background/95 md:bg-transparent p-4 md:p-0 z-50`}
        >
          <NavLink to="/" className={linkClasses} onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClasses} onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/notice" className={linkClasses} onClick={() => setIsMobileMenuOpen(false)}>
            Notice
          </NavLink>

          {/* Academic Dropdown */}
          <div
            className="relative"
            ref={academicRef}
            onMouseEnter={handleMouseEnterAcademic}
            onMouseLeave={handleMouseLeaveAcademic}
          >
            <button
              className="text-md font-medium p-2 rounded-md hover:bg-gray-100 w-full text-left"
              aria-haspopup="true"
              aria-expanded={showAcademic}
              onClick={handleClickAcademic}
            >
              Academic
            </button>
            <AnimatePresence>
              {showAcademic && (
                <motion.div
                  className="absolute top-full mt-2 w-40 bg-white shadow-md rounded-md py-2 z-[60] md:w-48"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onMouseEnter={() => clearTimeout(academicTimeoutRef.current)}
                  onMouseLeave={handleMouseLeaveAcademic}
                >
                  <NavLink
                    to="/courses"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setShowAcademic(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Courses
                  </NavLink>
                  <NavLink
                    to="/scholarships"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setShowAcademic(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Scholarships
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Gallery Dropdown */}
          <div
            className="relative"
            ref={galleryRef}
            onMouseEnter={handleMouseEnterGallery}
            onMouseLeave={handleMouseLeaveGallery}
          >
            <button
              className="text-md font-medium p-2 rounded-md hover:bg-gray-100 w-full text-left"
              aria-haspopup="true"
              aria-expanded={showGallery}
              onClick={handleClickGallery}
            >
              Gallery
            </button>
            <AnimatePresence>
              {showGallery && (
                <motion.div
                  className="absolute top-full mt-2 w-40 bg-white shadow-md rounded-md py-2 z-[60] md:w-48"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onMouseEnter={() => clearTimeout(galleryTimeoutRef.current)}
                  onMouseLeave={handleMouseLeaveGallery}
                >
                  <NavLink
                    to="/gallery/video"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setShowGallery(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Video
                  </NavLink>
                  <NavLink
                    to="/image"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setShowGallery(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Image
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/contact" className={linkClasses} onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </NavLink>
        </nav>

        {/* Auth Buttons and Mobile Menu Toggle */}
        <div className="flex items-center gap-x-4">
          <NavLink to="/login">
            <Button
              css="bg-blue-500 hover:bg-blue-600 w-20 h-10 text-white rounded-md"
              text="Log in" onClick={()=>navigate('login')}
            />
          </NavLink>
          <NavLink to="/signup">
            <Button
              css="bg-blue-500 hover:bg-blue-600 w-20 h-10 text-white rounded-md"
              text="Sign Up"
            />
          </NavLink>
          <button
            className="md:hidden"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={23} color="black" /> : <Menu size={23} color="black" />}
            <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;