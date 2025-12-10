"use client";

import React from "react";
import localFont from "next/font/local";
import Marquee from "react-fast-marquee";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});

const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});


function SecondSection() {
  

  return (
  
  <Marquee
            autoFill
            className="w-full flex items-center gap-5 overflow-x-hidden"
          >
            <h1
              className={`${thunderLight.className} text-[14rem] hidden md:flex flex-shrink-0  uppercase px-10`}
            >
              scoop up!
            </h1>
            <h1
              className={`${thunderLight.className} text-[14rem] hidden md:flex flex-shrink-0 uppercase text-transparent [-webkit-text-stroke:2px_white]`}
            >
              scoop up!
            </h1>
          </Marquee>
        
      
      
  );
}

export default SecondSection;
