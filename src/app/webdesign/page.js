import Headers from "@/components/pages/Headers";
import bg from "./bg.jpg";
import Link from "next/link";
export default function RequirementsPage() {
    return (
        <>
        <Headers />
        <div
        className="relative bg-cover bg-center h-48 text-white flex items-center w-full"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="flex items-center justify-between xl:w-[90%] 2xl:w-[80%] md:w-[90%] lg:w-[90%] w-[95%] mx-auto">
          <div className="flex flex-col ">
            <h1 className="text-3xl font-bold text-white text-start">Web Design</h1>
            <p className="text-gray-300 text-sm">Customised business solutions to enhance your business potential</p>
          </div>
          {/* Breadcrumbs */}
          <div className="text-xs">
            <Link href="/" className="text-white hover:text-gray-300 cursor-pointer">HOME</Link>
            <span className="text-red-500 mx-2">/</span>
            <span className="text-white hover:text-gray-300 cursor-pointer">COMPANY</span>
            <span className="text-red-500 mx-2">/</span>
            <Link href="/ContactForm" className="text-red-400 font-semibold">CONTACT US</Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <section className="mb-10">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Current Website Requirement Analysis:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>A business analyst will be assigned by Critical Touch to do the functional analysis...</li>
            <li>A thorough study of the requirements will be done to reveal any gaps...</li>
            <li>Analyze business services and their relations.</li>
            <li>Identifying suitable components for the website like Blogs, News, Photos, and videos...</li>
          </ul>
          <p className="mt-4">At the end of this phase, a functional document consisting of all the requirements will be provided...</p>
        </section>
  
        <section className="mb-10">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">UI & Functional Elements engineering / Wireframes / Prototype:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Based on the requirement analysis, Critical Touch creates a design on paper...</li>
            <li>The next step, the website takes full shape in this part of designing...</li>
          </ul>
        </section>
  
        <section className="mb-10">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Functionality Development:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Critical Touch will start coding the templates selected.</li>
            <li>The infrastructure will be set up with a chosen CMS application.</li>
            <li>Customization and configuring of the CMS...</li>
            <li>Conversion of Graphic template to CMS theme...</li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Testing and Quality Assurance:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Critical Touch’s expert QA team will test the website and its functionality.</li>
            <li>Checklists are prepared for each and every deliverable...</li>
            <li>Cross-browser testing will be done post the development phase.</li>
          </ul>
        </section>
      </div>
      </>
    );
  }
  