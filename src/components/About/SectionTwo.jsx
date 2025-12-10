"use client";

import React from "react";
import localFont from "next/font/local";
import ReactCompareImage from "react-compare-image";
import oldBox from "../../app/assets/ABOUT US/old-icecream.png";
import newBox from "../../app/assets/ABOUT US/new-icecream.png";

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

function SectionTwo() {
  return (
    <div className=" w-full h-auto text-white lg:h-auto flex justify-center bg-gradient-to-b from-red-900 to-red-800 px-5 lg:px-20">
      <div className=" w-full py-10 lg:py-0 gap-10 lg:gap-0 flex flex-col lg:flex-row  items-center justify-between">
        <div className="w-full lg:w-[55%] flex flex-col gap-5 lg:gap-0">
          <h1 className={`${thunder.className} text-[3rem] lg:text-[7.5vw] w-full leading-none  text-white uppercase`}>
            same great taste new different look
          </h1>
         <div className="flex flex-col gap-3">
         <h1 className="text-white text-sm lg:text-base">
            Enjoy the flavors you love with a fresh new twist! We've given our
            brand a makeover, but rest assured your favorite delicious taste
            remains unchanged.{" "}
          </h1>
          <h1 className="text-white text-sm lg:text-base">
            From the creamy textures to the rich, irresistible flavors you love,
            every scoop is crafted with the same dedication that has made JOY a
            household favorite. Whether you're reliving cherished memories or
            creating new ones{" "}
          </h1>
         </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="w-full h-full overflow-hidden rounded-3xl">
            <ReactCompareImage
              className="w-full h-full"
              leftImage="new-icecream.png"
              rightImage="old-icecream.png"
              sliderLineColor="#fff"
              sliderLineWidth={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
