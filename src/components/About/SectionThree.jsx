"use client";
import { motion, useTransform } from 'framer-motion';

import localFont from 'next/font/local';
import React from 'react'

const thunderSemibold = localFont({
  src: "../../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "600"
});

const SectionThree = ({scrollYProgress1}) => {

  const scale = useTransform(scrollYProgress1, [0,0.8,1], [1,15,55]);
 
  return (
    <div
     className='sticky top-0 left-0 w-screen h-screen  flex items-center justify-center overflow-hidden z-0 '>
        <motion.h1
          style={{
            scale:scale,

          }}
         className={`${thunderSemibold.className} text-[#F5A5A5] text-[5rem] md:text-[10rem] lg:text-[16.5rem]`}>THE JOURNEY</motion.h1>
    </div>   
  )
}

export default SectionThree