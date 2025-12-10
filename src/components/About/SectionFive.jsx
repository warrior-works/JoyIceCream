import localFont from "next/font/local";
import React from "react";
import lcJava from '../../app/assets/ABOUT US/lcjava.png'
import rode from '../../app/assets/ABOUT US/rode.webp'
import rodeMobile from '../../app/assets/MOBILE/HOME/RoundBgg.webp'
import dub from '../../app/assets/ABOUT US/icetub.webp'
import Image from "next/image";
import { motion, useTransform } from "framer-motion";

const thunderMedium = localFont({
  src: "../../app/fonts/Thunder-MediumLC.otf",
  weight: "500",
});
const thunderSemibold = localFont({
  src: "../../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "600",
});
const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});

const SectionFive = ({scrollYProgress2}) => {

  const scale = useTransform(scrollYProgress2,[0,0.5,0.75,1],[0.7,0.7,0.7,1])
  const scaleMobile = useTransform(scrollYProgress2,[0,0.25,0.5,0.75,1],[0.7,0.7,0.7,0.75,1])

  const translateY = useTransform(scrollYProgress2,[0,0.55,1],[0,0,0])
  const translateYMobile = useTransform(scrollYProgress2,[0,0.4,0.67,1],[0,0,0,0])


  return (
    <>
    <motion.div 
    style={{
      scale:scale,
      translateY:translateY
    }}
    className="sticky hidden lg:block  lg:mt-[100vh] top-0 h-screen text-white w-screen bg-gradient-to-b from-red-600 to-red-900 overflow-hidden">
       <div className="relative w-full h-full">
       <div className="z-0 absolute right-0 top-0 w-full h-full">
      <Image src={rode} className="bg-cover h-full w-full hidden lg:block"/>
      </div>
      <div className="w-full h-full bg-transparent justify-between lg:justify-normal flex flex-col lg:flex-row z-10">
        <div className="lg:w-[60%] pt-7 lg:pt-0">
          <div className="h-full w-full flex flex-col gap-4 lg:gap-14 px-5 lg:px-14 lg:pt-16 lg:pb-20">
            <div className="w-full text-white">
              <h1 className={` uppercase ${thunderMedium.className} text-2xl lg:text-[4vw] leading-normal lg:leading-none`}>
              Same Great Taste, New Look
              </h1>
              <h1 className={`${thunderSemibold.className} text-5xl lg:text-[8vw] uppercase leading-none`}>YOUR FAVOURITE JOY</h1>
            </div>

            <div className="w-full flex flex-col lg:gap-4 z-20 text-white">
                <h2 className={`${thunderMedium.className} text-4xl lg:text-[4.5vw]`}>2025</h2>
                <p>JOY has grown from strength to strength; it has been a household name across the nation for decades. JOY has come to become synonymous with trust and pure happiness.</p>
                <p>People of almost all age groups are able to relate to JOY and its products. Some of the most well-known products include the JOY Ball, Cassata, and many more.</p>
                <p>JOY has been successful in building an industrial franchising structure like none other and has always been ahead of its times. Accolades has been a part of JOY all through its span so far, and the achievements of JOY.</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[40%] z-20 flex items-center justify-center">
            <Image src={dub} className=" w-[20%] lg:w-[70%]"/>
        </div>
      </div>
       </div>
    </motion.div>

    {/* -----MOBILE-VERSION---- */}
    <motion.div 
    style={{
      scale:scaleMobile,
      translateY:translateYMobile
    }}
    className="sticky lg:hidden mt-[50vh]  top-0 h-screen w-screen bg-gradient-to-b from-red-600 to-red-900 overflow-hidden">
       <div className="relative w-full h-full">
       <div className="z-0 absolute right-0 bottom-0  w-full ">
      <Image alt="red rode" src={rodeMobile} className="bg-cover h-full w-full  lg:hidden"/>
      </div>
      <div className="w-full h-full bg-transparent flex flex-col justify-around lg:flex-row z-10">
        <div className="lg:w-[55%] pt-8 lg:pt-0">
          <div className="h-full w-full flex flex-col gap-5 lg:gap-16 px-5 lg:px-14 lg:py-20">
            <div className="w-full text-white">
              <h1 className={` uppercase ${thunderMedium.className} text-2xl lg:text-6xl leading-normal lg:leading-none`}>
              Same Great Taste, New Look
              </h1>
              <h1 className={`${thunderSemibold.className} text-5xl lg:text-[7rem] uppercase leading-none`}>YOUR FAVOURITE JOY</h1>
            </div>

            <div className="w-full flex flex-col gap-4 lg:gap-7 z-20 text-white">
                <h2 className={`${thunderMedium.className} text-4xl lg:text-6xl`}>2025</h2>
                <p className={`text-sm lg:text-xl`}>JOY has grown from strength to strength; it has been a household name across the nation for decades. JOY has come to become synonymous with trust and pure happiness.</p>
                <p className={`text-sm lg:text-xl`}>People of almost all age groups are able to relate to JOY and its products. Some of the most well-known products include the JOY Ball, Cassata, and many more.</p>
                <p className={`text-sm lg:text-xl`}>JOY has been successful in building an industrial franchising structure like none other and has always been ahead of its times. Accolades has been a part of JOY all through its span so far, and the achievements of JOY.</p>
            </div>
          </div>
        </div>

        <div className="lg:w-[45%] w-full z-20 flex items-center justify-center">
            <Image alt="ice cream container" src={dub} className="w-[50%] lg:w-[70%]"/>
        </div>
      </div>
       </div>
    </motion.div>
    </>
  );
};

export default SectionFive;