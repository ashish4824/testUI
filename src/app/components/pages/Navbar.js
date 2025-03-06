import Link from "next/link";
import { Facebook, Mail, Phone } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-2 text-xs">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Facebook size={10} />
          </li>
          <li>
            <Instagram size={10} />
          </li>
          <li>
            <Linkedin size={10} />
          </li>
          <li>
            <Twitter size={10} />
          </li>
          <li>
            <Youtube size={10} />
          </li>
        </ul>
        <ul className="flex space-x-4 text-xs">
          <li>
            <Mail size={20} className="inline pr-1" />
            test@gmail.com
          </li>
          <li>
           <Phone size={16} className="inline" />
           <a href="tel:+911234567890">+91 1234567890</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
