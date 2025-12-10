"use client";
import React, { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";
import flavor1 from "../../app/assets/HERO-SECTION/ALL-FLAVORS/101.png";
import flavor2 from "../../app/assets/HERO-SECTION/ALL-FLAVORS/102.png";
import flavor3 from "../../app/assets/HERO-SECTION/ALL-FLAVORS/103.png";
import flavor4 from "../../app/assets/HERO-SECTION/ALL-FLAVORS/104.png";
import flavor5 from "../../app/assets/HERO-SECTION/ALL-FLAVORS/105.png";
import flavor6 from "../../app/assets/HERO-SECTION/ALL-FLAVORS/106.png";
import flavor7 from "../../app/assets/HERO-SECTION/ALL-FLAVORS/107.png";
import flavor8 from "../../app/assets/HERO-SECTION/ALL-FLAVORS/108.png";
import flavor9 from "../../app/assets/HERO-SECTION/ALL-FLAVORS/109.png";
import flavor10 from "../../app/assets/HERO-SECTION/ALL-FLAVORS/110.png";
import flavor11 from "../../app/assets/HERO-SECTION/ALL-FLAVORS/111.png";
import centerText from "../../app/assets/HERO-SECTION/ALL-FLAVORS/center-text.png";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});
const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});

function SectionThree() {
  const containerRef = useRef();

  const allFlavors = [
    flavor1,
    flavor2,
    flavor3,
    flavor4,
    flavor5,
    flavor6,
    flavor7,
    flavor8,
    flavor9,
    flavor10,
    flavor11,
  ];

  const [value, setValue] = useState(0);
  const [mobileValue, setMobileValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      if (containerTop < -1962) {
        setValue(-1962);
      } else if (containerTop < 0) {
        setValue(containerTop);
      } else {
        setValue(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.getBoundingClientRect().top;
      if (containerTop < -1638) {
        setMobileValue(-1638);
      } else if (containerTop < 0) {
        setMobileValue(containerTop);
      } else {
        setMobileValue(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen h-[350vh] lg:h-[400vh] py-20  relative text-white bg-gradient-to-b from-red-950 to-red-900 overflow-clip"
    >
      <div className="sticky w-full h-screen top-0 will-change-transform  py-10 flex flex-col justify-around gap-10 lg:gap-20 items-center ">
        <div className="flex flex-col justify-center gap-2">
        <h1
          className={`${thunder.className} text-5xl md:text-7xl text-center  uppercase text-white`}
        >
          explore our flavors
        </h1>
        <h1 className="w-[22.56rem] md:w-[32rem]  text-sm md:text-base text-center text-white">
          Our Ice Cream is made with the finest natural ingredients, including
          fresh dairy and real fruits. Crafted for pure joy<span className="hidden lg:inline">, every scoop is
          rich, creamy, and irresistibly delicious.</span> 
        </h1>
        </div>
       

        {/* DESKTOP VERSION  */}
        <div className="w-96 h-96 rounded-full hidden lg:flex items-center justify-center relative">
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              alt="text describing icecream"
              src={centerText}
              className="w-[45%] md:w-[50%] lg:w-[60%]"
            />
          </div>

          {/* Ice cream containers */}
          {allFlavors.map((item, index) => (
            <motion.div
              key={index}
              className="absolute w-24 h-24 hidden lg:block"
              style={{
                transform: `rotate(${
                  -index * (value / 60)
                }deg) translateY(-170px)`,
                zIndex: 11 - index,
              }}
            >
              <Image
                src={item}
                alt={`Ice cream ${index + 1}`}
                width={80}
                height={80}
                className={`w-full h-full object-contain `}
              />
            </motion.div>
          ))}
        </div>

        {/* MOBILE VERSION  */}
        <div className="w-96 h-96 rounded-full lg:hidden flex items-center justify-center relative">
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              alt="text describing icecream"
              src={centerText}
              className="w-[45%] md:w-[50%] lg:w-[60%]"
            />
          </div>

          {/* Ice cream containers */}
          {allFlavors.map((item, index) => (
            <div
              key={index}
              className="absolute w-20 md:w-24 h-20 md:h-24  lg:hidden"
              style={{
                transform: `rotate(${
                  -index * (mobileValue / 50)
                }deg) translateY(-140px)`,
                zIndex: 11 - index,
              }}
            >
              <Image
                src={item}
                alt={`Ice cream ${index + 1}`}
                width={80}
                height={80}
                className={`w-full h-full object-contain `}
              />
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}

export default SectionThree;
