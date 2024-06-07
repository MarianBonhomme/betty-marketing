import React, { useEffect, useState } from "react";
import ScrollToTop from "./ScrollToTop";

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  return (
    <div
      className={`shadow-card fixed bottom-5 right-5 z-40 select-none transition duration-300 sm:bottom-10 sm:right-10 ${isVisible ? "cursor-pointer" : "pointer-events-none opacity-0"}`}
    >
      <ScrollToTop>
        <div className="flex items-center justify-center bg-secondary p-3">
          <img
            src="assets/images/arrow-up.png"
            alt="Retour en haut"
            className="h-5 w-5"
          />
        </div>
      </ScrollToTop>
    </div>
  );
}
