import Image from "next/image";
import siteImg17 from "./IndustrySection/site-img-17.jpg";
import siteImg18 from "./IndustrySection/site-img-18.jpg";
import siteImg19 from "./IndustrySection/site-img-19.jpg";
const industries = [
  {
    title: "Healthcare",
    description:
      "With increased government regulations, e-business challenges, rising patient safety expectations and demand for lower healthcare costs, the worldwide healthcare industry is facing immense.",
    highlight: "Outsourced Offshore Healthcare Solutions",
    imgSrc: siteImg17,
  },
  {
    title: "Social Networking",
    description:
      "Social Networking websites are a way of life today. It's one of the primary modes of keeping touch and communicating with friends and family. Millions are linked up through Social Networking sites which make it a great environment for organizations.",
    highlight: "",
    imgSrc: siteImg18,
  },
  {
    title: "E-commerce",
    description:
      "Social Networking websites are a way of life today. It's one of the primary modes of keeping touch and communicating with friends and family. Millions are linked up through Social Networking sites which make..",
    highlight: "",
    imgSrc: siteImg19,
  },
];
const IndustrySection = () => {
    return (
      <section className="py-16 bg-white">
        <div className="text-center">
          <h5 className="text-sm text-gray-500 tracking-wider">LATEST NEWS</h5>
          <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
            INDUSTRIES
            <span className="block w-12 h-1 bg-blue-500 mx-auto mt-2"></span>
          </h2>
        </div>
  
        <div className="mx-auto mt-10 flex flex-wrap gap-8 px-5 xl:w-[90%] 2xl:w-[80%] md:w-[90%] lg:w-[90%] w-[95%]">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col items-center  bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 xl:w-[31%] 2xl:w-[31%] md:w-[31%] lg:w-[31%] w-[100%]">
              <div className="relative w-full max-w-sm h-56">
                <Image
                  src={industry.imgSrc}
                  alt={industry.title}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {industry.title}
              </h3>
              {industry.highlight && (
                <p className="font-bold text-gray-800">{industry.highlight}</p>
              )}
              <p className="text-gray-600 text-sm mt-2">{industry.description}</p>
              <button className="mt-4 p-2 border rounded-lg text-gray-700 flex items-center mx-auto hover:bg-gray-200 transition">
                READ MORE <span className="ml-2">➜</span>
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default IndustrySection;