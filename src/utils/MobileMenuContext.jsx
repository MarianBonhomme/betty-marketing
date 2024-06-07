import React, { createContext, useContext, useState } from 'react';

const MobileMenuContext = createContext();

export const MobileMenuProvider = ({ children }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ isMenuVisible, setIsMenuVisible }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenu = () => {
  return useContext(MobileMenuContext);
};