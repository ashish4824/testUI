import Link from "next/link";
import { Facebook, Mail, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-2 text-xs">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
  <Link href="/About">About</Link>
</li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          {/* Add other links as needed */}
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