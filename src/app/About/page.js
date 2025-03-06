import bg from "./bg.jpg";
import Link from "next/link";
import Headers from "@/components/pages/Headers";
export default function AboutPage() {
    return (
        <>
        <Headers/>
        <div
        className="relative bg-cover bg-center h-48 text-white flex items-center w-full"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="flex items-center justify-between xl:w-[90%] 2xl:w-[80%] md:w-[90%] lg:w-[90%] w-[95%] mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-white">About Us</h1>
            <p className="text-gray-300 text-sm">Get in Touch with Us</p>
          </div>
          {/* Breadcrumbs */}
          <div className="text-xs">
            <Link href="/" className="text-white hover:text-gray-300 cursor-pointer">HOME</Link>
            <span className="text-red-500 mx-2">/</span>
            <span className="text-white hover:text-gray-300 cursor-pointer">COMPANY</span>
            <span className="text-red-500 mx-2">/</span>
            <Link href="#" className="text-red-400 font-semibold">About US</Link>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <p className="mb-6">
          Critical Touch currently serves its customers through its global delivery center in Bangalore.
        </p>
  
        <h2 className="text-lg font-semibold mt-4">Company Incorporated:</h2>
        <p>2004</p>
  
        <h2 className="text-lg font-semibold mt-4">Principle Location:</h2>
        <p>
          14/3A 1A4, Brigade Cosmopolis, Balaraj&apos;s Arcade, 4th Floor, <br />
          Whitefield Main Road, Whitefield, Bangalore India-560102.
        </p>
  
        <h2 className="text-lg font-semibold mt-4">Total number of employees</h2>
        <ul className="list-disc pl-5">
          <li>Total = 200</li>
          <li>Engineers = 160</li>
          <li>Administrative Staff = 25</li>
          <li>Design Team = 10</li>
          <li>Management & Board = 5</li>
        </ul>
  
        <h2 className="text-lg font-semibold mt-4">Core Competencies</h2>
        <p>
          Web Design/Re-design, Web Application Development, Travel & Tour Products, <br />
          Wireless Application Development, Security & Systems Applications.
        </p>
      </div>
      </>
    );
  }
  