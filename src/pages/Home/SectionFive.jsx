"use client";

import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import RoundBg from "../../app/assets/MOBILE/HOME/RoundBg.png";
import dub1Mob from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/dub1.png";
import dub2Mob from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/dub2.png";
import dub3Mob from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/dub3.png";
import bar1Mob from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/bar1.png";
import bar2Mob from "../../app/assets/MOBILE/HOME/JOYINEVERYMOMENT/bar2.png";
import { motion } from "framer-motion";
import bar1 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/bar1.png'
import bar2 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/bar2.png'
import bar3 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/bar3.png'
import dub1 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/12.png'
import dub2 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/13.png'
import dub3 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/14.png'
import dub4 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/15.png'
import dub5 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/16.png'
import dub6 from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/17.png'
import rode from '../../app/assets/HERO-SECTION/JOYEVERYBITE-DESKTOP/rode.png'

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});
const thunderMedium = localFont({
  src: "../../app/fonts/Thunder-MediumLC.otf",
  weight: "500",
});

function SectionFive() {
  return (
    <div className=" w-full h-96 lg:h-[80vh] bg-gradient-to-b from-red-950 to-red-900 flex items-center justify-center relative text-white overflow-x-clip">
      <div className="absolute inset-0 h-full w-full flex items-center">
      <Image alt="rounded rode" src={rode} className="w-full hidden lg:block" />
      </div>
      
      <h1
        className={`${thunderMedium.className} w-full h-full hidden text-white z-10  lg:flex justify-center items-center text-[18vw] font-extrabold uppercase`}
      >
        JOY in every bite
      </h1>
      
      <div className="hidden lg:block w-full h-full absolute top-0 left-0">
        <motion.div
          initial={{ width: 100 }}
          whileInView={{ width: 150 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[10.5rem] left-8"
        >
          <Image className="w-full transform -translate-y-1/2 animate-float-fast" src={dub1} alt="ice cream container"  />
        </motion.div>
        <motion.div
          initial={{ width: 100 }}
          whileInView={{ width: 150 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[17rem] left-[31rem] z-30"
        >
          <Image className="w-full transform -translate-y-1/2 animate-float-fast" src={dub2} alt="ice cream container" />
        </motion.div>
        <motion.div
          initial={{ width: 100 }}
          whileInView={{ width: 150 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[22.5rem] left-[14.5rem] z-30"
        >
          <Image className="w-full transform -translate-y-1/2 animate-float-fast" src={dub3} alt="ice cream container" />
        </motion.div>
        <motion.div
          initial={{ width: 80 }}
          whileInView={{ width: 150 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[9.5rem] right-[37.5rem] z-30"
        >
          <Image className="w-full transform -translate-y-1/2 animate-float-fast" src={dub4} alt="ice cream container" />
        </motion.div>
        <motion.div
          initial={{ width: 100 }}
          whileInView={{ width: 150 }} 
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[17rem] right-20 z-30"
        >
          <Image className="w-full transform -translate-y-1/2 animate-float-fast" src={dub5} alt="ice cream container" />
        </motion.div>
        <motion.div
          initial={{ width: 100 }}
          whileInView={{ width: 150 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[20.5rem] right-[21.5rem] z-30"
        >
          <Image className="w-full transform -translate-y-1/2 animate-float-fast" src={dub6} alt="ice cream container" />
        </motion.div>
        <motion.div
          initial={{ width: 60 }}
          whileInView={{ width: 160 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[10rem] right-1 z-30"
        >
          <Image className="w-full transform -translate-y-1/2 animate-float-fast" src={bar1} alt="ice cream bar" />
        </motion.div>
        <motion.div
          initial={{ width: 75 }}
          whileInView={{ width: 250 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[10rem] left-[14rem] z-30"
        >
          <Image className="w-full transform -translate-y-1/2 animate-float-fast" src={bar2} alt="ice cream bar" />
        </motion.div>
        <motion.div
          initial={{ width: 100 }}
          whileInView={{ width: 210 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[20rem] right-[35.5rem] z-30"
        >
          <Image className="w-full transform -translate-y-1/2 animate-float-fast" src={bar3} alt="ice cream bar" />
        </motion.div>
      </div>


      {/* ----MOBILE-VERSION---- */}
      <div className="absolute  lg:hidden left-0 top-0 h-full flex items-center w-full">
      <Image alt="rounded rode" src={RoundBg} className="w-full " />
      </div>
      <div className="lg:hidden w-full h-full flex flex-col justify-center items-center z-10">
        <h1 className={`${thunderMedium.className} text-[24vw] leading-none `}>
          JOY IN
        </h1>
        <h1
          className={`${thunderMedium.className} text-[24vw] leading-none -mt-3`}
        >
          EVERY BITE
        </h1>
      </div>
      <div className="lg:hidden w-full h-full absolute top-0 left-0">
        <motion.div
          initial={{ width: 80 }}
          whileInView={{ width: 100 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[6.5rem] left-6 z-20"
        >
          <Image className="w-full" src={dub1Mob} alt="ice cream container" />
        </motion.div>
        <motion.div
          initial={{ width: 80 }}
          whileInView={{ width: 112 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[6rem] right-6 z-20"
        >
          <Image className="w-full" src={dub2Mob} alt="ice cream container" />
        </motion.div>
        <motion.div
          initial={{ width: 80 }}
          whileInView={{ width: 100 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[14.5rem] right-3 z-20"
        >
          <Image className="w-full" src={dub3Mob} alt="ice cream container" />
        </motion.div>
        <motion.div
          initial={{ width: 80 }}
          whileInView={{ width: 105 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[14rem] right-[8.2rem] z-20"
        >
          <Image className="w-full" src={bar1Mob} alt="ice cream bar" />
        </motion.div>
        <motion.div
          initial={{ width: 75 }}
          whileInView={{ width: 90 }}
          viewport={{ once: false, amount: 0.99 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute top-[8rem] right-1 z-20"
        >
          <Image className="w-full" src={bar2Mob} alt="ice cream bar" />
        </motion.div>
      </div>
    </div>
  );
}

export default SectionFive;
