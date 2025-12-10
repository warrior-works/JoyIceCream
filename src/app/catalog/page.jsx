"use client"
import Navbar from "@/components/Navbar";
import React from "react";
import localFont from "next/font/local";
import Footer from "../../pages/Contact/ContactFooter";
import Image from "next/image";
import dubba from "../assets/HERO-SECTION/132.png";
import MobileMenu from "@/components/MobileMenu";
import strawberry from "../assets/CUTY/Rectangle 15.png";
import { useState } from "react";
import One from '../assets/CUTY/Rectangle 14.png'
import two from '../assets/CUTY/Rectangle 16.png'
import three from '../assets/CUTY/Rectangle 17.png'
import four from '../assets/CUTY/sunlover-caramel-1.png'
import frame from '../assets/CUTY/Frame 17.png'



import Starwbeery from "../assets/CATALOG/TUB IMG/STRAWBERRY.webp";
import OneStrawbeey from "../assets/CATALOG/CATALOG CUT FRUITS/STRAWBERRY/1.png";
import twoStrawbeey from "../assets/CATALOG/CATALOG CUT FRUITS/STRAWBERRY/2.png";
import threeStrawbeey from "../assets/CATALOG/CATALOG CUT FRUITS/STRAWBERRY/3.png";
import fourStrawbeey from "../assets/CATALOG/CATALOG CUT FRUITS/STRAWBERRY/4.png";


import butterscotch from "../assets/CATALOG/TUB IMG/BUTTERSCOTCH.webp";
import Onebutterscotch from "../assets/CATALOG/CATALOG CUT FRUITS/BUTTER SCOTCH/1.png";
import twobutterscotch from "../assets/CATALOG/CATALOG CUT FRUITS/BUTTER SCOTCH/2.png";
import threebutterscotch from "../assets/CATALOG/CATALOG CUT FRUITS/BUTTER SCOTCH/3.png";
import fourbutterscotch from "../assets/CATALOG/CATALOG CUT FRUITS/BUTTER SCOTCH/4.png";



import Mango from "../assets/CATALOG/TUB IMG/MANGO.webp";
import OneMango from "../assets/CATALOG/CATALOG CUT FRUITS/MANGO/1.png";
import twoMango from "../assets/CATALOG/CATALOG CUT FRUITS/MANGO/2.png";
import threeMango from "../assets/CATALOG/CATALOG CUT FRUITS/MANGO/2-1.png";
import fourMango from "../assets/CATALOG/CATALOG CUT FRUITS/MANGO/4.png";

import SpanishDelight from "../assets/CATALOG/TUB IMG/SPANISH DELIGHT.webp";
import OneSpanish from "../assets/CATALOG/CATALOG CUT FRUITS/SPANISH DELIGHT/1.png";
import twoSpanish from "../assets/CATALOG/CATALOG CUT FRUITS/SPANISH DELIGHT/2.png";
import threeSpanish from "../assets/CATALOG/CATALOG CUT FRUITS/SPANISH DELIGHT/3.png";
import fourSpanish from "../assets/CATALOG/CATALOG CUT FRUITS/SPANISH DELIGHT/4.png";

import Chikoo from "../assets/CATALOG/TUB IMG/CHIKOO.webp";
import OneChikoo from "../assets/CATALOG/CATALOG CUT FRUITS/CHIKOO/1.png";
import twoChikoo from "../assets/CATALOG/CATALOG CUT FRUITS/CHIKOO/2.png";
import threeChikoo from "../assets/CATALOG/CATALOG CUT FRUITS/CHIKOO/3.png";
import fourChikoo from "../assets/CATALOG/CATALOG CUT FRUITS/CHIKOO/4.png";

import Kulfi from "../assets/CATALOG/TUB IMG/KULFI.webp";
import OneKulfi from "../assets/CATALOG/CATALOG CUT FRUITS/KULFI/1.png";
import twoKulfi from "../assets/CATALOG/CATALOG CUT FRUITS/KULFI/2.png";
import threeKulfi from "../assets/CATALOG/CATALOG CUT FRUITS/KULFI/3.png";
import fourKulfi from "../assets/CATALOG/CATALOG CUT FRUITS/KULFI/4.png";

import Pista from "../assets/CATALOG/TUB IMG/PISTA GREEN.webp";
import OnePista from "../assets/CATALOG/CATALOG CUT FRUITS/PISTA GREEN/1.png";
import twoPista from "../assets/CATALOG/CATALOG CUT FRUITS/PISTA GREEN/2.png";
import threePista from "../assets/CATALOG/CATALOG CUT FRUITS/PISTA GREEN/3.png";
import fourPista from "../assets/CATALOG/CATALOG CUT FRUITS/PISTA GREEN/4.png";

import Vanilla from "../assets/CATALOG/TUB IMG/VANILLA.webp";
import OneVanilla from "../assets/CATALOG/CATALOG CUT FRUITS/VANILLA/1.png";
import twoVanilla from "../assets/CATALOG/CATALOG CUT FRUITS/VANILLA/2.png";
import threeVanilla from "../assets/CATALOG/CATALOG CUT FRUITS/VANILLA/3.png";
import fourVanilla from "../assets/CATALOG/CATALOG CUT FRUITS/VANILLA/4.png";

import Coconut from "../assets/CATALOG/TUB IMG/TENDER COCONUT.webp";
import OneCoconut from "../assets/CATALOG/CATALOG CUT FRUITS/TENDER COCONUT/1.png";
import twoCoconut from "../assets/CATALOG/CATALOG CUT FRUITS/TENDER COCONUT/2.png";
import threeCoconut from "../assets/CATALOG/CATALOG CUT FRUITS/TENDER COCONUT/3.png";
import fourCoconut from "../assets/CATALOG/CATALOG CUT FRUITS/TENDER COCONUT/4.png";

const styles = {
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  }
};

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});



function page() {
  const catalog = ["tub", "cone", "bulk", "ripplette", "bar", "sipup", "cup"];
  const img = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const cards = [
    {
      name: "STRAWBERRY",
      size: "500 ML",
      img: Starwbeery,
      img1: OneStrawbeey, 
       img2: twoStrawbeey,
      img3: threeStrawbeey,
       img4:  fourStrawbeey,
      bg: "bg-[#FF707C]",
      text: "text-white"
    },

    {
      name: "BUTTERSCOCTH",
      size: "500 ML",
      img: butterscotch,
      img1: Onebutterscotch,
      img2: twobutterscotch,
      img3: threebutterscotch,
      img4: fourbutterscotch,
      bg: "bg-[#FED65E]",
      text: "text-[#E73D13]"
    },
    {
      name: "MANGO",
      size: "500 ML",
      img: Mango,
      img1: OneMango,
      img2: twoMango,
      img3: threeMango,
      img4: fourMango,
      bg: "bg-[#FFB800]",
      text: "text-white"
    },
    {
      name: "SPANISH DELIGHT",
      size: "500 ML",
      img: SpanishDelight,
      img1: OneSpanish,
      img2: twoSpanish,
      img3: threeSpanish,
      img4: fourSpanish,
      bg: "bg-[#FF9A3D]",
      text: "text-white"
    },
    {
      name: "VANILLA",
      size: "500 ML",
      img: Vanilla,
      img1: OneVanilla,
      img2: twoVanilla,
      img3: threeVanilla,
      img4: fourVanilla,
      bg: "bg-[#FFFDD0]",
      text: "text-[#E73D13]"
    },
    {
      name: "CHIKOO",
      size: "500 ML",
      img: Chikoo,
      img1: OneChikoo,
      img2: twoChikoo,
      img3: threeChikoo,
      img4: fourChikoo,
      bg: "bg-[#8B4513]",
      text: "text-white"
    },
    {
      name: "KULFI",
      size: "500 ML",
      img: Kulfi,
      img1: OneKulfi,
      img2: twoKulfi,
      img3: threeKulfi,
      img4: fourKulfi,
      bg: "bg-[#E8DBC5]",
      text: "text-[#E73D13]"
    },
    {
      name: "PISTA GREEN",
      size: "500 ML",
      img: Pista,
      img1: OnePista,
      img2: twoPista,
      img3: threePista,
      img4: fourPista,
      bg: "bg-[#90EE90]",
      text: "text-[#E73D13]"
    },
   
    {
      name: "TENDER COCONUT",
      size: "500 ML",
      img: Coconut,
      img1: OneCoconut,
      img2: twoCoconut,
      img3: threeCoconut,
      img4: fourCoconut,
      bg: "bg-[#FAFAFA]",
      text: "text-[#8B4513]"
    }
  ]
  return (
    <div className="w-full h-auto flex flex-col gap-10 bg-gradient-to-b from-red-800 to-red-900 text-white">
      <div className=" px-5 lg:px-20 pt-6 flex flex-col gap-5  z-[60]">
        <Navbar />
        <hr />
      </div>

      <div className="felx flex-col h-full gap-5">
        <div className="w-full flex justify-center relative">
          <h1 className={`${thunder.className} md:text-[17rem] text-5xl flex flex-shrink-0 uppercase text-white`}>
            catalog
          </h1>
          
          {/* Decorative images around the text */}

          <Image
            src={One}
            alt="blueberry"
            width={80}
            className=" hidden lg:block absolute top-52 right-80 transform -translate-y-1/2 md:w-[140px] animate-float-fast"
          />
          <Image
            src={strawberry}
            alt="strawberry"
            width={80}
            className="hidden lg:block  absolute left-[48%] top-12 md:w-[100px] animate-float-slow"
          />
          <Image
            src={four}
            alt="caramel"
            width={380}
            className="hidden lg:block  absolute right-[32%] top-20 transform -translate-y-1/2 md:w-[150px] animate-float-fast"
          />
          <Image
            src={three}
            alt="vanilla"
            width={140}
            className="hidden lg:block  absolute left-[27rem] bottom-0 md:w-[130px] animate-float-slow"
          />
          <Image
            src={two}
            alt="orange"
            width={180}
            className="hidden lg:block  absolute left-80 top-10 md:w-[80px] animate-float-fast"
          />
        </div>
        <div className=" flex justify-center w-full ">
          <h1 className="w-96 text-center text-white">
            Vibrant elavated flavor combos made to delight and refresh you every
            time
          </h1>
        </div>
      </div>
      <div className=" px-20 md:flex items-center justify-center gap-5 hidden">
        {catalog.map((items, index) => {
          return (
            <div key={index} className=" uppercase flex text-xl items-center gap-2 px-5 py-2 rounded-lg border-[0.5px] border-gray-200 mt-5">
              <div className=" w-10 h-10 ">

              <Image alt="frame" src={frame} sizes="10" className=" w-full h-full object-cover"/>
              </div>
              <h1 className=" font-semibold ">{items}</h1>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 w-full px-5 md:px-20 mt-20">
        {img.map((_, index) => {
          const card = cards[index % cards.length];
          return (
            <div key={index} className={`group h-[500px] rounded-2xl ${card.bg} flex items-center justify-center cursor-pointer overflow-hidden relative`}>
              <div className={`${card.text} flex h-full flex-col justify-between items-center py-5 relative z-10`}>
                <h1 className={`${thunder.className} text-center uppercase text-5xl mt-5`}>
                  {card.name}
                </h1>
                <div className="relative">
                  <div className="z-0">
                    <Image
                    alt="image"
                      src={card.img}
                      width={200}
                      className="z-50 group-hover:scale-125 duration-500"
                    />
                  </div>
                </div>
                <h1 className={`${thunder.className} text-center uppercase text-5xl`}>
                  {card.size}
                </h1>
              </div>
              
              {/* Berry splash elements */}
              <Image
                src={card.img1}
                alt={`${card.name}-1`}
                width={100}
                className="absolute top-20 left-10 opacity-0 group-hover:opacity-100 group-hover:-translate-x-10 group-hover:-translate-y-10 duration-500 rotate-45 transform animate-float-fast z-50"
              />
              <Image
                src={card.img2}
                alt={`${card.name}-2`}
                width={60}
                className="absolute top-40 right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-10 group-hover:-translate-y-10 duration-500 -rotate-12 transform animate-float-fast z-50"
              />
              <Image
                src={card.img3}
                alt={`${card.name}-3`}
                width={120}
                className="absolute bottom-20 left-10 opacity-0 group-hover:opacity-100 group-hover:-translate-x-10 group-hover:translate-y-10 duration-500 rotate-6 transform animate-float-fast z-50"
              />
              <Image
                src={card.img4}
                alt={`${card.name}-4`}
                width={115}
                className="absolute bottom-40 right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-10 group-hover:translate-y-10 duration-500 -rotate-12 transform animate-float-fast z-50"
              />
            </div>
          );
        })}
      </div>
      
      <Footer />
    </div>
  );
}

export default page;
