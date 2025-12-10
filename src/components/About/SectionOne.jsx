import React from "react";
import localFont from "next/font/local";
import vintageImage from "../../app/assets/ABOUT US/HERO.webp";
import Image from "next/image";
import vintageImageMobile from '../../app/assets/MOBILE/ABOUT/HERO.webp'

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});
const thunderLight = localFont({
  src: "../../app/fonts/Thunder-LC.ttf",
  weight: "100 900",
});
const thunderSemibold = localFont({
  src: "../../app/fonts/Thunder-SemiBoldLC.otf",
  weight: "600",
});

function SectionOne() {
  return (
    <div className=" w-full flex flex-col justify-between lg:justify-normal  lg:block lg:h-[75vh] h-auto gap-10 relative text-white">
      <Image
        src={vintageImage}
        alt="old joy factory"
        className=" w-full h-full hidden lg:block object-cover rounded-2xl"
      />
      <Image
        src={vintageImageMobile}
        alt="old joy factory"
        className=" w-full  lg:hidden object-cover rounded-xl"
      />
      <div className=" lg:absolute lg:top-0 lg:left-0 w-full lg:h-full flex items-center justify-center pb-5 lg:py-0">
        <div className=" flex flex-col w-full  gap-3 lg:gap-5 lg:text-center lg:items-center text-white">
          <h1 className={` uppercase leading-none lg:leading-normal text-[3.2rem] w-full flex lg:w-auto lg:text-9xl text-white ${thunder.className}`}>
            about joy ice cream
          </h1>
          <h1 className={`${thunder.className} text-[1.32rem] lg:text-4xl font-bold uppercase`}>
            indian ice cream industry, since 1948
          </h1>
          <h1 className="w-full text-sm lg:text-base lg:w-[650px] text-white">
            Since our beginning, Joy Ice Cream has been spreading smiles with
            every scoop. While trends change, our passion for rich, creamy
            perfection remains the same.
          </h1>
          <h1 className="w-full text-sm lg:text-base lg:w-[550px] text-white">
            Come for the indulgent classics and signature scoops. Stay for the
            endless flavors of joy.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
