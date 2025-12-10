"use client"
import { useEffect, createContext, useState, useContext} from 'react'
import Lenis from '@studio-freight/lenis'

const ScrollContext = createContext(0)

export function useLenisScroll() {
  return useContext(ScrollContext);
  
}

export default function SmoothScroll({ children }) {

  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    const lenis = new Lenis({
      duration: 5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      smoothWheel : true
    })

 

    //  Update state with Lenis scroll position
     lenis.on("scroll", (e) => {
      setScrollY(e.scroll);
    });


    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return  <ScrollContext.Provider value={scrollY}>{children}</ScrollContext.Provider>;
}