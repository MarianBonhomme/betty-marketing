import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

export default function ScrollToTop({ children }) {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeOutQuint'
    });
  }
  return (
    <div onClick={scrollToTop} className='cursor-pointer'>
      {children}
    </div>
  )
}
