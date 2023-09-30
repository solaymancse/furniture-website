import React, { useState } from 'react'
import { useEffect } from 'react';

export const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

const toggleVisibility = () => {
    if(window.pageYOffset > 300) {
        setIsVisible(true)
    }else{
        setIsVisible(false)
    }
};

useEffect(()=> {
window.addEventListener('scroll', toggleVisibility);

return () => {
    window.removeEventListener('scroll', toggleVisibility)
}
},[])
    const scrollToTop = ()=> {
        window.scrollTo({
            top: 0,
            behavior:'smooth'
        });
    };

    return (
      <>
      {isVisible && (
          <div className=' bottom-20 right-4 md:right-20 fixed bg-E97171 w-10 h-10 rounded-full z-20 cursor-pointer flex justify-center items-center text-white font-bold' onClick={scrollToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
          </svg>

      </div>
      )}
      </>
    )
}
