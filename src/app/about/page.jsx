"use client";

import Navbar from "../../components/Navbar";
import React, { useEffect, useRef, useState } from "react";
import SectionOne from "../../components/About/SectionOne";
import SectionTwo from "../../components/About/SectionTwo";
import Footer from "../../pages/Home/Footer";
import {useScroll } from "framer-motion";
import Image from "next/image";
import tubBg from '../assets/ABOUT US/tub-bg.webp';
import dynamic from 'next/dynamic';

const SectionThree = dynamic(() => import('@/components/About/SectionThree'), {
  ssr: false,
  loading: () => <div className="h-[700vh] w-full bg-gradient-to-b from-red-800 to-red-900" />
});

const SectionFour = dynamic(() => import('@/components/About/SectionFour'), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-gradient-to-r from-red-900 to-[#ea2729]" />
});

const SectionFive = dynamic(() => import('@/components/About/SectionFive'), {
  ssr: false,
  loading: () => <div className="h-screen w-full bg-gradient-to-r from-red-900 to-red-500" />
});

function page() {

  const [isFixed,setIsFixed] = useState(false);
  const ContainerRef1 = useRef();
  const ContainerRef2 = useRef();

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ContainerRef1,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ContainerRef2,
    offset: ["start start", "end end"],
  });


  useEffect(()=>{
    const handleScroll = () => {
      const containerTop = ContainerRef2.current.getBoundingClientRect().top;
      const containerBottom = window.innerHeight - ContainerRef2.current.getBoundingClientRect().bottom;
      
        if(containerTop <= 0 && containerBottom <= 0){
          setIsFixed(true);
        }else{
          setIsFixed(false)
        }
    };

    window.addEventListener("scroll",handleScroll);

    return () => {
      window.removeEventListener("scroll",handleScroll);
    }
  },[])

  return (
    <div className=" w-full  flex flex-col overflow-clip">
      <div className=" flex h-screen bg-gradient-to-b from-red-800 to-red-900 flex-col w-full gap-8 lg:gap-10 px-5 lg:px-20 pt-6 ">
        <div className=" flex flex-col gap-5 ">
          <Navbar />
          <hr />
        </div>
        <SectionOne />
      </div>
      <SectionTwo />
      <div ref={ContainerRef1}  className="h-[400vh] w-screen z-0  bg-gradient-to-b from-red-800 to-red-900">
        <SectionThree scrollYProgress1={scrollYProgress1} />
      </div>
      <div ref={ContainerRef2} className="h-[400vh]  w-full z-10 relative ">
        <div className={`w-screen h-screen overflow-clip top-0 ${isFixed ? "fixed" : "hidden"}`}>
        <Image src={tubBg}  className="h-screen w-screen object-cover overflow-clip"/>
        </div>
        
        <SectionFour scrollYProgress2={scrollYProgress2} />
        <SectionFive scrollYProgress2={scrollYProgress2}/>
      </div>
      <Footer />
    </div>
  );
}

export default page;
