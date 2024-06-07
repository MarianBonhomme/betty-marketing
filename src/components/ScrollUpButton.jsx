import React, { useEffect, useState } from 'react'
import ScrollToTop from './ScrollToTop'

export default function ScrollUpButton() {  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    <div className={`fixed bottom-10 right-10 z-50 shadow-card select-none transition ${isVisible ? 'cursor-pointer' : 'opacity-0 pointer-events-none'}`}>
      <ScrollToTop>
        <div className='p-3 bg-secondary flex items-center justify-center'>
          <img src="assets/images/arrow-up.png" alt="Retour en haut" className='w-5 h-5' />
        </div>
      </ScrollToTop>
    </div>
  )
}