import Image from "next/image";
import logo from "../pages/Home/Images/logo.png";
import isoBadge from "../pages/Home/Images/iso.png";
import Link from "next/link";
const Headers = () => {
  return (
    <div className=" xl:w-[90%] 2xl:w-[80%] md:w-[90%] lg:w-[90%] w-[95%] mx-auto" >

      {/* Navbar */}
      <nav className=" right-0 m-auto left-0 w-[100%] rounded-md bg-white sticky top-0 z-50 flex items-center justify-between px-10 py-2">
        <Image src={logo} alt="Logo" className="h-14 " />
        <ul className="flex space-x-6 text-gray-700 font-medium text-xs">
          <Link className="cursor-pointer uppercase"  href="/">HOME</Link>
          <Link className="cursor-pointer uppercase" href="/About">About</Link>
          <Link className="cursor-pointer uppercase" href="/Contact">Contact</Link>
          <Link className="cursor-pointer uppercase" href="/webdesign">Webdesign</Link>
          <Link className="cursor-pointer uppercase" href="/capabilitymatrix">Capability Matrix</Link>
        </ul>
        <Image src={isoBadge} alt="ISO Badge" className="size-12" />
      </nav>

      {/* <HeroSlider /> */}
    </div>
  );
};

export default Headers;
