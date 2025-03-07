import Link from "next/link";
import { Facebook, Mail, Phone, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-2 text-xs xl:block md:block lg:block hidden">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <ul className="flex space-x-4 mb-2 sm:mb-0">
          <li>
            <Facebook size={16} />
          </li>
          <li>
            <Instagram size={16} />
          </li>
          <li>
            <Linkedin size={16} />
          </li>
          <li>
            <Twitter size={16} />
          </li>
          <li>
            <Youtube size={16} />
          </li>
        </ul>
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-xs text-center sm:text-left">
          <li className="flex items-center">
            <Mail size={16} className="inline pr-1" />
            <span>info@criticaltouchinfotech.com</span>
          </li>
          <li className="flex items-center">
            <Phone size={16} className="inline pr-1" />
            <a href="tel:080-45687798">080-45687798</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;