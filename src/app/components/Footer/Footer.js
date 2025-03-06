import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import footerBg from "../Footer/footer.jpg";
const Footer = () => {
  return (
    <footer   style={{ backgroundImage: `url(${footerBg.src})` }} className=" text-white py-10 px-5 w-full h-full">
     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Company Section */}
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-red-500 inline-block pb-1">
            About Company
          </h3>
          <p className="text-gray-400 mt-3">
            Critical Touch currently serves its customers through its global
            delivery center in Bangalore.
          </p>
          <button className="mt-4 px-4 py-2 border border-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
            READ MORE →
          </button>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-red-500 inline-block pb-1">
            Services
          </h3>
          <ul className="text-gray-400 mt-3 space-y-2">
            <li>› Product Engineering</li>
            <li>› Application Development</li>
            <li>› Oracle</li>
            <li>› Professional Services</li>
            <li>› Share Point</li>
            <li>› Dot Net Practice</li>
          </ul>
        </div>

        {/* Industries Section */}
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-red-500 inline-block pb-1">
            Industries
          </h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              "Healthcare",
              "Non-Profits",
              "Hedge Fund",
              "Travel",
              "Real Estate",
              "Education",
              "Social Networking",
            ].map((industry, index) => (
              <span
                key={index}
                className="border border-gray-500 px-3 py-1 rounded-lg text-gray-400 hover:bg-gray-800 transition"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold border-b-2 border-red-500 inline-block pb-1">
            Contact Us
          </h3>
          <p className="text-gray-400 mt-3">
            📍 14/3A 1A4, Brigade Cosmopolis,
            <br /> Balaraj’s Arcade, 4th Floor, Whitefield Main Road, Bangalore
            India-560102.
          </p>
          <p className="text-gray-400 mt-2">📞 080-45687798</p>
          <p className="text-gray-400 mt-2">✉ info@criticaltouchinfo.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-5 flex justify-between items-center">
        <p className="text-gray-500 text-sm">
          Copyright © 2016 criticaltouch.com All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <FaFacebookF className="text-gray-500 hover:text-white transition cursor-pointer" />
          <FaTwitter className="text-gray-500 hover:text-white transition cursor-pointer" />
          <FaGoogle className="text-gray-500 hover:text-white transition cursor-pointer" />
          <FaLinkedinIn className="text-gray-500 hover:text-white transition cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
