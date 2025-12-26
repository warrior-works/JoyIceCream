import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import ellipseImg from "../../app/assets/MOBILE/HOME/Ellipse.png";

const thunder = localFont({
  src: "../../app/fonts/Thunder-BoldLC.otf",
  weight: "900",
});
const signatie = localFont({
  src: "../../app/fonts/Signatie.otf",
  weight: "100 900",
});

function ContactFooter() {
  return (
    <div className=" w-full h-auto bg-gradient-to-b from-red-900 to-red-800 py-10 flex items-center justify-center text-white overflow-hidden">
      <div className=" flex flex-col gap-5 items-center px-7 lg:px-0 text-white">

      </div>

    </div>
  );
}

export default ContactFooter;
