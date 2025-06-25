import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // you can adjust this threshold
    window.scrollTo({
      top: 0,
      behavior: isMobile ? "smooth" : "auto", // "smooth" for mobile, "auto" for desktop
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
