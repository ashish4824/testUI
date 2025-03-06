import site from "./WelcomeSection/site.jpg"
import Image from "next/image";
const WelcomeSection = () => {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between  px-8 py-12 xl:w-[90%] 2xl:w-[80%] md:w-[90%] lg:w-[90%] w-[95%] mx-auto">
        {/* Left Text Section */}
        <div className="md:w-1/2">
          <h5 className="text-gray-500 uppercase font-bold text-sm tracking-widest">
            See What We Do 
          </h5>
          <h2 className="text-3xl font-bold mt-2">
            Welcome to <span className="text-red-500">Critical Touch</span>
          </h2>
          <p className="text-gray-700 mt-4">
            Critical Touch, a Delaware, US registered and ISO 9001:2015 certified
            Global software solutions provider, delivers high-quality and
            cost-effective solutions. Our global presence, process-oriented
            methodologies, and efficient delivery models allow us to provide a
            highly flexible mix of delivery options.
          </p>
          <p className="text-gray-700 mt-4">
            Our competencies include Strategy, Consulting, and Value Analysis to
            tailor IT Solutions and services that meet client needs.
          </p>
          <p className="text-gray-700 mt-4">
            We serve various industries, including Finance, Retail, Healthcare,
            Travel, and Online Marketing.
          </p>
  
          <button className="mt-6 px-6 py-2 border rounded-full border-gray-400 hover:bg-gray-100 transition">
            Read More →
          </button>
        </div>
  
        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src={site}
            alt="Analytics"
            className="w-full max-w-lg"
          />
        </div>
      </section>
    );
  };
  
  export default WelcomeSection;
  