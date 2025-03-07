"use client"
import { useState } from "react";
import HeroSlider from "./HeroSlider";
import Image from "next/image";
import logo from "../Home/Images/logo.png";
import isoBadge from "../Home/Images/iso.png";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
    >
      {/* Navbar */}
      <nav className="absolute z-50 top-5 right-0 left-0 w-[90%] md:w-[80%] mx-auto rounded-md bg-white shadow-md flex items-center justify-between px-6 py-3">
        <Image src={logo} alt="Logo" className="h-10 md:h-14" />
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-xs md:text-sm">
          <Link className="uppercase cursor-pointer" href="/">HOME</Link>
          <Link className="uppercase cursor-pointer" href="/About">About</Link>
          <Link className="uppercase cursor-pointer" href="/Contact">Contact</Link>
          <Link className="uppercase cursor-pointer" href="/webdesign">Webdesign</Link>
          <Link className="uppercase cursor-pointer" href="/capabilitymatrix">Capability Matrix</Link>
        </ul>
        
        <Image src={isoBadge} alt="ISO Badge" className="size-10 md:size-12" />
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden z-40 p-5 flex flex-col space-y-4 text-gray-700 font-medium text-sm">
          <Link href="/" className="uppercase" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link href="/About" className="uppercase" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/Contact" className="uppercase" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/webdesign" className="uppercase" onClick={() => setMenuOpen(false)}>Webdesign</Link>
          <Link href="/capabilitymatrix" className="uppercase" onClick={() => setMenuOpen(false)}>Capability Matrix</Link>
        </div>
      )}
      
      <HeroSlider />
    </div>
  );
};

export default HeroSection;