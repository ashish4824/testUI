import HeroSlider from "./HeroSlider";
import Image from "next/image";
import logo from "../Home/Images/logo.png";
import isoBadge from "../Home/Images/iso.png";
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/your-image.jpg')" }}>

      {/* Navbar */}
      <nav className="absolute z-50 top-10 right-0 m-auto left-0 w-[80%] rounded-md bg-white shadow-md flex items-center justify-between px-10 py-2">
        <Image src={logo} alt="Logo" className="h-14 " />
        <ul className="flex space-x-6 text-gray-700 font-medium text-xs">
          <li>HOME</li>
          <li>COMPANY </li>
          <li>SERVICES </li>
          <li>INDUSTRIES</li>
          <li>CAPABILITY MATRIX</li>
          <li>ENGAGEMENT OPTIONS</li>
          <li>E-SOLUTIONS</li>
        </ul>
        <Image src={isoBadge} alt="ISO Badge" className="size-12" />
      </nav>

      <HeroSlider />
    </div>
  );
};

export default HeroSection;
