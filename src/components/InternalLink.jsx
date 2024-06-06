import React from 'react'
import { scroller } from 'react-scroll';

export default function InternalLink({ children, section }) {

  const scrollToSection = () => {
    scroller.scrollTo(`${section}`, {
      duration: 800,
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