import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import college from "../../assets/collegeLogo.png";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin } from "../../store/auth/loginThunk";
import { setMessage } from "../../store/auth/loginslice";
import { uploadimage } from "../../store/upload/uploadThunk";

const NavBar = () => {
  const [showAcademic, setShowAcademic] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [images, setImages] = useState([]);
  const uploadRef = useRef(null);
  const academicRef = useRef(null);
  const galleryRef = useRef(null);
  const menuRef = useRef(null);
  const accesstoken = localStorage.getItem("accesstoken");
  const dispatch = useDispatch();
  const message = useSelector((state) => state.login.message);
  const uploadMessage = useSelector((state) => state.upload.message);
  const uploadError = useSelector((state) => state.upload.error);

  const navigate = useNavigation();

  // Handle outside click
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

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowAcademic(false);
        setShowGallery(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (message) {
      alert(message);
      dispatch(setMessage(""));
    }
  }, [message, dispatch]);

  useEffect(() => {
    console.log("trigger done")
    console.log(uploadMessage)
    if (uploadMessage) {
      alert(uploadMessage);
    } else if (uploadError) {
      alert(uploadError);
    }
  }, [uploadMessage, uploadError]);

  const logout = async () => {
    try {
      await dispatch(logoutAdmin()).unwrap();
    } catch (error) {
      alert(error.message || "Logout failed");
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files)
    setImages(files);
  };

  const handleFileSelect = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault()
    if (images.length === 0) {
      alert("Please select images first.");
      return;
    }

    // const formData = new FormData();
    // images.forEach((file) => {
    //   formData.append("images", file);
    // });
    // console.log(formData,"frontend")
    try {
     dispatch(uploadimage(images));
      setImages([]);
    } catch (err) {
      console.error(err);
    }
  };

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold px-4 py-2 rounded-md bg-gray-100"
      : "text-md font-medium px-4 py-2 rounded-md hover:bg-gray-100";

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <header ref={menuRef} className="sticky top-0 z-50 w-full shadow-lg bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <NavLink to="/" className="font-bold text-xl flex items-center gap-3">
            <img src={college} alt="College Logo" className="rounded-full h-12 w-12" />
            <span>Narayan Mavi</span>
          </NavLink>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* Main Nav Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } w-full md:flex md:w-auto flex-col md:flex-row gap-2 md:gap-4 mt-4 md:mt-0`}
        >
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About Us</NavLink>
          <NavLink to="/notice" className={linkClasses}>Notice</NavLink>

          {/* Academic Dropdown */}
          <div className="relative" ref={academicRef}>
            <button
              className="text-md font-medium px-4 py-2 rounded-md hover:bg-gray-100 flex items-center gap-1"
              onClick={() => {
                setShowAcademic(!showAcademic);
                setShowGallery(false);
              }}
            >
              Academic {showAcademic ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence>
              {showAcademic && (
                <motion.div
                  className="absolute left-0 mt-2 w-40 md:w-48 bg-white shadow-md rounded-md py-2 z-50"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <NavLink to="/courses" className="block px-4 py-2 hover:bg-gray-200">Courses</NavLink>
                  <NavLink to="/scholarships" className="block px-4 py-2 hover:bg-gray-200">Scholarships</NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Gallery Dropdown */}
          <div className="relative" ref={galleryRef}>
            <button
              className="text-md font-medium px-4 py-2 rounded-md hover:bg-gray-100 flex items-center gap-1"
              onClick={() => {
                setShowGallery(!showGallery);
                setShowAcademic(false);
              }}
            >
              Gallery {showGallery ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence>
              {showGallery && (
                <motion.div
                  className="absolute left-0 mt-2 w-40 md:w-48 bg-white shadow-md rounded-md py-2 z-50"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <NavLink to="/gallery/video" className="block px-4 py-2 hover:bg-gray-200">Video</NavLink>
                  <NavLink to="/image" className="block px-4 py-2 hover:bg-gray-200">Image</NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/contact" className={linkClasses}>Contact Us</NavLink>
        </nav>

        {/* Right Side (Login / Upload) */}
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          {accesstoken ? (
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" onClick={logout}>
              Logout
            </button>
          ) : (
            <NavLink to="/login">
              <Button css="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" text="Login" />
            </NavLink>
          )}

          {accesstoken && (
            <div className="flex flex-col items-start">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                ref={uploadRef}
              />
              <button onClick={handleFileSelect} className="bg-yellow-500 text-white px-3 py-1 rounded-md mt-1">
                Choose Images
              </button>
              <button onClick={handleUpload} className="bg-green-500 text-white px-3 py-1 rounded-md mt-1">
                Upload
              </button>

              {/* Preview Selected Images */}
              {images.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {images.map((file, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(file)}
                      alt={`preview-${index}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
