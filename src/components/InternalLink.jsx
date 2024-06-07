import React from 'react'
import { scroller } from 'react-scroll';
import { useMobileMenu } from '../utils/MobileMenuContext';

export default function InternalLink({ children, section }) {
  const { setIsMenuVisible } = useMobileMenu();

  const scrollToSection = () => {
    setIsMenuVisible(false);
    scroller.scrollTo(`${section}`, {
      duration: 1000,
      smooth: 'easeOutQuint',
      offset: -100,
    });
  }

  return (
    <a onClick={scrollToSection} className='cursor-pointer'>
      {children}
    </a>
  )
}