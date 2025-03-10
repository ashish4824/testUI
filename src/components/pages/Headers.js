"use client"
import { useState } from "react";
import Image from "next/image";
import logo from "../pages/Home/Images/logo.png";
import isoBadge from "../pages/Home/Images/iso.png";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="xl:w-[90%] 2xl:w-[80%] md:w-[90%] lg:w-[90%] w-[95%] mx-auto">
      {/* Navbar */}
      <nav className="w-full rounded-md bg-white sticky top-0 z-50 flex items-center justify-between px-6 py-3 shadow-md">
        <Link href="/">
        <Image src={logo} alt="Logo" className="h-10 md:h-14" />
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-xs md:text-sm">
          <Link className="cursor-pointer uppercase" href="/">HOME</Link>
          <Link className="cursor-pointer uppercase" href="/About">About</Link>
          <Link className="cursor-pointer uppercase" href="/Contact">Contact</Link>
          <Link className="cursor-pointer uppercase" href="/webdesign">Webdesign</Link>
          <Link className="cursor-pointer uppercase" href="/capabilitymatrix">Capability Matrix</Link>
        </ul>

        <Image src={isoBadge} alt="ISO Badge" className="size-10 md:size-12" />

        
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

    
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-40 p-5 flex flex-col space-y-4 text-gray-700 font-medium text-sm">
          <Link href="/" className="uppercase" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link href="/About" className="uppercase" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/Contact" className="uppercase" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/webdesign" className="uppercase" onClick={() => setMenuOpen(false)}>Webdesign</Link>
          <Link href="/capabilitymatrix" className="uppercase" onClick={() => setMenuOpen(false)}>Capability Matrix</Link>
        </div>
      )}
    </div>
  );
};

export default Headers;