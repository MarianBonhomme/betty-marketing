import React, { createContext, useContext, useEffect, useState } from 'react';

const MobileMenuContext = createContext();

export const MobileMenuProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(() => {
    return window.innerWidth <= 768;
  });
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MobileMenuContext.Provider 
      value={{ 
        isMobile,
        isMenuVisible, 
        setIsMenuVisible 
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenu = () => {
  return useContext(MobileMenuContext);
};