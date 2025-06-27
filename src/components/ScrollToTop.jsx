// src/hooks/useScrollRestoration.js
import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = {};

const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    const path = location.pathname;

    if (navigationType === "POP" && scrollPositions[path] !== undefined) {
      // Restore scroll position on back/forward navigation
      window.scrollTo(0, scrollPositions[path]);
    } else {
      // New page navigation
      window.scrollTo(0, 0);
    }

    return () => {
      // Save current scroll position
      scrollPositions[path] = window.scrollY;
    };
  }, [location, navigationType]); // ✅ Include navigationType
};

export default ScrollToTop;
