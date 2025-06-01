import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import college from "../../assets/collegeLogo.png";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin } from "../../store/auth/loginThunk";
import { setMessage } from "../../store/auth/loginslice";
import axios from "axios";

const NavBar = () => {
  const [showAcademic, setShowAcademic] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const academicRef = useRef(null);
  const galleryRef = useRef(null);
  const menuRef = useRef(null);

  const accesstoken = localStorage.getItem("accesstoken");
  const dispatch = useDispatch();
  const message = useSelector((state) => state.login.message);
  const navigate = useNavigation();

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

  const logout = async () => {
    try {
      await dispatch(logoutAdmin()).unwrap();
    } catch (error) {
      alert(error.message || "Logout failed");
      console.error(error);
    }
  };

  const handleUpload = async () => {
    try {
      const image = file;
      const res = await axios.post(
        "http://localhost:3000/NarayanMavi/imageupload",
        { image },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadedImage(res.data);
      if(res.status === 200){
        alert('upload photo successfully!')
      }
    } catch (err) {
      console.error(err);
    }
  };

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold p-2 rounded-md bg-gray-100"
      : "text-md font-medium p-2 rounded-md hover:bg-gray-100";

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <header
      ref={menuRef}
      className="sticky top-0 z-50 w-full shadow-lg bg-white/95 backdrop-blur p-2 lg:pl-10"
    >
      <div className="container flex h-16 items-center justify-between lg:pb-0">
        {/* Logo */}
        <div className="flex items-center lg:ml-10">
          <NavLink to="/" className="font-bold text-xl flex items-center gap-3">
            <img
              src={college}
              alt="College Logo"
              className="rounded-full h-12 w-12"
            />
            <span>Narayan Mavi</span>
          </NavLink>
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col mt-1 md:flex-row gap-3 lg:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 z-50`}
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
          <div className="relative w-full md:w-auto" ref={academicRef}>
            <button
              className="text-md font-medium p-2 rounded-md hover:bg-gray-100 w-full text-left flex justify-between items-center"
              onClick={() => {
                setShowAcademic(!showAcademic);
                setShowGallery(false);
              }}
            >
              Academic <span>{showAcademic ? "▲" : "▼"}</span>
            </button>
            <AnimatePresence>
              {showAcademic && (
                <motion.div
                  className={`flex flex-col ${
                    isMobileMenuOpen
                      ? "w-full bg-gray-100 mt-1 rounded-md"
                      : "absolute top-full mt-2 w-40 md:w-48 bg-white shadow-md rounded-md py-2 z-50"
                  }`}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <NavLink
                    to="/courses"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => {
                      setShowAcademic(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Courses
                  </NavLink>
                  <NavLink
                    to="/scholarships"
                    className="block px-4 py-2 hover:bg-gray-200"
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
          <div className="relative w-full md:w-auto" ref={galleryRef}>
            <button
              className="text-md font-medium p-2 rounded-md hover:bg-gray-100 w-full text-left flex justify-between items-center"
              onClick={() => {
                setShowGallery(!showGallery);
                setShowAcademic(false);
              }}
            >
              Gallery <span>{showGallery ? "▲" : "▼"}</span>
            </button>
            <AnimatePresence>
              {showGallery && (
                <motion.div
                  className={`flex flex-col ${
                    isMobileMenuOpen
                      ? "w-full bg-gray-100 mt-1 rounded-md"
                      : "absolute top-full mt-2 w-40 md:w-48 bg-white shadow-md rounded-md py-2 z-50"
                  }`}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <NavLink
                    to="/gallery/video"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => {
                      setShowGallery(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Video
                  </NavLink>
                  <NavLink
                    to="/image"
                    className="block px-4 py-2 hover:bg-gray-200"
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

          {/* Only show mobile menu toggle button if logged in */}
          {accesstoken && (
            <button
              className="md:hidden ml-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          )}
        {/* Settings / Mobile Menu Toggle */}
        <div className="flex items-center gap-x-4 mr-36 lg:mr-0">
          <div className="absolute ml-4">
            {accesstoken ? (
              <button
                className="bg-blue-500 hover:bg-blue-600 w-20 h-10 text-white rounded-md"
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login">
                <Button
                  css="bg-blue-500 hover:bg-blue-600 w-20 h-10 text-white rounded-md "
                  text="Login"
                  onClick={() => navigate("login")}
                />
              </NavLink>
            )}
          </div>

          {/* Upload Section */}
          {/* {accesstoken && (
            <div>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              <button onClick={handleUpload} className="bg-red-400 ml-40">Upload</button>
              {uploadedImage && (
                <>
                  <p>
                    URL:{" "}
                    <a href={uploadedImage.url} target="_blank" rel="noreferrer">
                      {uploadedImage.url}
                    </a>
                  </p>
                  <img src={uploadedImage.url} alt="Uploaded" width="200" />
                </>
              )}
            </div>
          )} */}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
