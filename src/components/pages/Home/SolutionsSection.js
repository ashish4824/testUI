import Image from "next/image";
import { Wrench, Hammer } from "lucide-react";

import hotairballoon from "../Home/SolutionsSection/hotairballoon.svg"
const SolutionsSection = () => {
    return (
      <section className="flex flex-col md:flex-row w-full h-auto">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-black text-white p-10 flex flex-col justify-end items-end">
          <div className="mb-5">
            <span className="text-5xl">
                <Wrench />
                <Hammer />
            </span>
          </div>
          <h2 className="text-3xl font-bold">ERP SOLUTIONS</h2>
          <p className="mt-4 text-gray-400 max-w-lg text-end">
            Our offerings in PeopleSoft are oriented at cost and effort optimization for the customer. By using our onsite-offshore methodology, we deliver significant cost reduction to the customer.
          </p>
          <ul className="mt-4 text-gray-300 text-sm text-left list-none space-y-2">
            <li className="text-end">  Remote Application Support and Maintenance</li>
            <li className="text-end">  Offshore Maintenance Services</li>
            <li className="text-end">  Resource outsourcing & Consulting Services</li>
            <li className="text-end">  Custom Reports Development (SQR/nVision/Crystal)</li>
          </ul>
          <button className="mt-6 px-6 py-2 border border-white rounded-full text-white flex items-center hover:bg-white hover:text-black transition">
            READ MORE <span className="ml-2">➜</span>
          </button>
        </div>
  
        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-red-700 text-white p-10 flex flex-col justify-start  text-start">
          <div className="mb-5">
            <span className="text-5xl"><Image src={hotairballoon} alt="Hot Air Balloon" width={50} height={50} /></span>
          </div>
          <h2 className="text-3xl font-bold">MOBILE SOLUTIONS</h2>
          <p className="mt-4 text-gray-300 max-w-lg">
            Critical Touch has an experienced professional team of iPhone, iPod Touch, and iPad developers in place who can bring your ideas to life.
          </p>
          <ul className="mt-4 text-gray-200 text-sm text-left list-none space-y-2">
            <li>› iPad application development</li>
            <li>› iPad application testing</li>
            <li>› iPad development consulting</li>
            <li>› Integration with third-party devices</li>
          </ul>
          <button className="mt-6 w-fit px-6 py-2 border border-white rounded-full text-white flex items-center hover:bg-white hover:text-black transition">
            READ MORE <span className="ml-2">➜</span>
          </button>
        </div>
      </section>
    );
  };
  
  export default SolutionsSection;
  