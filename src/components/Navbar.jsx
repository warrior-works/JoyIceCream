"use client";
import React, { useState } from "react";
import logo from "../app/assets/HERO-SECTION/LOGO.webp";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import MobileMenu from "../components/MobileMenu";
import { usePathname } from 'next/navigation';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path ? "bg-white text-[#cc0000]" : "text-white";
  };

  return (
    <div className="w-full flex justify-between items-center z-40 overflow-hidden text-white">
      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      <Link className="lg:flex  hidden  items-center justify-start" href={"/"}>
        <div className="flex items-center gap-5 justify-start">
          <Image className="w-[6rem] md:w-[7rem] lg:w-[7.5rem]" src={logo} alt="logo" />
        </div>
      </Link>
      <div className="items-center gap-5 hidden lg:flex">
        <Link href="/">
          <button className={`px-5 py-2 border border-white rounded-full transition-all duration-300 hover:bg-white hover:text-[#cc0000] ${isActive("/")}`}>
            Home
          </button>
        </Link>
        <Link href="/about">
          <button className={`px-5 py-2 border border-white rounded-full transition-all duration-300 hover:bg-white hover:text-[#cc0000] ${isActive("/about")}`}>
            About
          </button>
        </Link>
        <Link href="/contact">
          <button className={`px-5 py-2 border border-white rounded-full transition-all duration-300 hover:bg-white hover:text-[#cc0000] ${isActive("/contact")}`}>
            Contact
          </button>
        </Link>
        <Link href="/catalog">
          <button className={`px-5 py-2 border border-white rounded-full transition-all duration-300 hover:bg-white hover:text-[#cc0000] ${isActive("/catalog")}`}>
            Catalog
          </button>
        </Link>
      </div>
      <div className="px-2 flex items-center justify-between w-full lg:hidden">
        <Image className="" width={90} src={logo} alt="logo" />
        <HiMenu
          onClick={() => setShowMenu(true)}
          className="text-3xl md:text-5xl text-white"
        />
      </div>
    </div>
  );
}

export default Navbar;
