import HeroSlider from "./HeroSlider";
import Image from "next/image";
import logo from "../Home/Images/logo.png";
import isoBadge from "../Home/Images/iso.png";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/your-image.jpg')" }}>

      {/* Navbar */}
      <nav className="absolute z-50 top-10 right-0 m-auto left-0 w-[80%] rounded-md bg-white shadow-md flex items-center justify-between px-10 py-2">
        <Image src={logo} alt="Logo" className="h-14 " />
        <ul className="flex space-x-6 text-gray-700 font-medium text-xs">
          <Link className="uppercase cursor-pointer" href="/">HOME</Link>
          <Link className="uppercase cursor-pointer" href="/About">About</Link>
          <Link className="uppercase cursor-pointer" href="/Contact">Contact</Link>
          <Link className="uppercase cursor-pointer" href="/webdesign">Webdesign</Link>
          <Link className="uppercase cursor-pointer" href="/capabilitymatrix">Capability Matrix</Link>
        </ul>
        <Image src={isoBadge} alt="ISO Badge" className="size-12" />
      </nav>

      <HeroSlider />
    </div>
  );
};

export default HeroSection;
