import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import college from "../../assets/collegeLogo.png";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logoutAdmin } from "../../store/auth/loginThunk";


const NavBarAdmin = () => {


  const accesstoken = localStorage.getItem("accesstoken");
  const dispatch = useDispatch();
  const status = useSelector((state) => state.upload.status);
  const navigate = useNavigate();



  





  const logout = async () => {
    try {
      await dispatch(logoutAdmin()).unwrap();
      navigate('/')
    } catch (error) {
      alert(error.message || "Logout failed");
      console.error(error);
    }
  };





  return (
 <header  className="sticky top-0 z-50 w-full shadow-lg bg-white/95 backdrop-blur p-2 lg:pl-10">
      <div className="container flex h-16 items-center justify-between lg:pb-0">
        <div className="flex items-center lg:ml-10">
          <NavLink to="/" className="font-bold text-xl flex items-center gap-3">
            <img src={college} alt="College Logo" className="rounded-full h-12 w-12" />
            <span>Narayan Mavi</span>
          </NavLink>
        </div>
 <div className="mr-4 lg:mr-18">
            {accesstoken ? (
              <button className="bg-blue-500 hover:bg-blue-600 w-20 h-10 text-white rounded-md ml-2 lg:ml-0" onClick={logout}>
                Logout
              </button>
            ) : (
              <NavLink to="/login">
                <Button css="bg-blue-500 hover:bg-blue-600 w-20 h-10 text-white rounded-md" text="Login" onClick={() => navigate("/login")} />
              </NavLink>
            )}
          </div>
      </div>
    </header>
  );
};

export default NavBarAdmin;







