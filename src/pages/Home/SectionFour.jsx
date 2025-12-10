"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import barMain from "../../app/assets/HERO-SECTION/ICECREAM-BARS/barMain.png";
import bar1 from "../../app/assets/HERO-SECTION/ICECREAM-BARS/bar1.png";
import bar2 from "../../app/assets/HERO-SECTION/ICECREAM-BARS/bar2.png";
import bar3 from "../../app/assets/HERO-SECTION/ICECREAM-BARS/bar3.png";
import bar4 from "../../app/assets/HERO-SECTION/ICECREAM-BARS/bar4.png";
import { motion } from "framer-motion";

const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});

const thunderSemibold = localFont({
  src: "../../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "600",
});

const thunderBold = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
});

function SectionFour() {
  return (
    <div className=" w-full h-screen relative lg:flex lg:items-center text-white  lg:justify-center bg-gradient-to-b from-red-900 to-red-950 overflow-x-hidden">
      <div className="absolute z-0 top-0 left-0 hidden lg:block"></div>
      <div className="w-full h-full flex flex-col gap-10 justify-around lg:justify-between items-center">
        <div className=" flex flex-col gap-16 lg:gap-10 justify-between lg:justify-normal items-center lg:py-0">
          <h1
            className={`${thunderSemibold.className} lg:${thunderSemibold.className}  text-white uppercase text-[3.6rem] md:text-[6rem] lg:font-semibold lg:text-[9rem]   font-bold`}
          >
            Ice Cream Bars
          </h1>
          <h1 className=" text-center text-sm md:text-sm lg:text-base w-[22rem] md:w-[26rem] lg:-mt-24 lg:w-[30rem] -mt-16 text-white">
            It’s about turning simple moments into delightful experiences. Ice
            cream isn’t just a dessert; it’s a way to bring happiness, share
            smiles, and create lasting memories.{" "}
          </h1>
        </div>
        {/* ----BARS DESKTOP ANIMATION--- */}
        <div className="hidden lg:block h-1/2 w-full  relative">
          <div className="absolute z-50 -bottom-11 left-1/2 transform -translate-x-1/2">
            <Image alt="ice cream bar" src={barMain} className="w-[12rem]" />
          </div>
          <div className="absolute bottom-0 left-1/2 z-20 transform -translate-x-1/2  w-[11.5rem]">
            <motion.div
              initial={{ rotateZ: 0, x: 0, scale: 0 }}
              whileInView={{ rotateZ: 40, x: 130, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image alt="ice cream bar" src={bar1} className="w-full" />
            </motion.div>
          </div>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2   w-[11.5rem] ">
            <motion.div
              initial={{ rotateZ: 0, x: 0, y: 0, scale: 0 }}
              whileInView={{ rotateZ: 60, x: 185, y: 20, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image alt="ice cream bar" src={bar2} className="w-full" />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-1/2 z-20 transform -translate-x-1/2  w-[11.5rem]">
            <motion.div
              initial={{ rotateZ: 0, x: 0, scale: 0 }}
              whileInView={{ rotateZ: -40, x: -130, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image alt="ice cream bar" src={bar3} className="w-full" />
            </motion.div>
          </div>
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2   w-[11.5rem]  ">
            <motion.div
              initial={{ rotateZ: 0, x: 0, y: 0, scale: 0 }}
              whileInView={{ rotateZ: -60, x: -185, y: 20, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image alt="ice cream bar" src={bar4} className="w-full" />
            </motion.div>
          </div>
        </div>

        {/* -----BARS ANIMATION MOBILE VERSION--- */}
        <div className="lg:hidden w-full h-1/2 relative">
          <div className="absolute z-50 bottom-0 left-1/2 transform -translate-x-1/2">
            <Image alt="ice cream bar" src={barMain} className="w-[9.5rem] md:w-[13.5rem]" />
          </div>
          <div className="absolute bottom-28 left-1/2 z-20 transform -translate-x-1/2  w-[7rem] md:w-[11rem]">
            <motion.div
              initial={{ rotateZ: 0, x: 0 }}
              whileInView={{ rotateZ: 30, x: 90 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image alt="ice cream bar" src={bar1} className="w-full" />
            </motion.div>
          </div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2   w-[7rem] md:w-[11rem]">
            <motion.div
              initial={{ rotateZ: 0, x: 0 }}
              whileInView={{ rotateZ: 35, x: 100 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image alt="ice cream bar" src={bar2} className="w-full" />
            </motion.div>
          </div>
          <div className="absolute bottom-28 left-1/2 z-20 transform -translate-x-1/2  w-[7rem] md:w-[11rem]">
            <motion.div
              initial={{ rotateZ: 0, x: 0 }}
              whileInView={{ rotateZ: -30, x: -90 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image alt="ice cream bar" src={bar3} className="w-full" />
            </motion.div>
          </div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2   w-[7rem] md:w-[11rem]">
            <motion.div
              initial={{ rotateZ: 0, x: 0 }}
              whileInView={{ rotateZ: -35, x: -100 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            >
              <Image alt="ice cream bar" src={bar4} className="w-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
