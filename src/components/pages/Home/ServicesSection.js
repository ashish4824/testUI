import { Lightbulb, Umbrella, PencilRuler } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        
        {/* Services */}
        <div className="flex flex-col items-center space-y-4">
          <Lightbulb className="w-10 h-10 text-gray-700" />
          <h3 className="text-lg font-bold tracking-wide">SERVICES</h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            It is common knowledge that it is easier to sell to existing customers than to new ones, but on average US-based companies lose half their customers every five years.
          </p>
          <a href="#" className="text-red-500 font-semibold text-sm">Read More</a>
          <div className="w-10 border-b-2 border-red-500 mt-1"></div>
        </div>

        {/* E Solutions */}
        <div className="flex flex-col items-center space-y-4">
          <Umbrella className="w-10 h-10 text-gray-700" />
          <h3 className="text-lg font-bold tracking-wide">E SOLUTIONS</h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            With increased government regulations, e-business challenges, rising patient safety expectations, and demand for lower healthcare costs.
          </p>
          <a href="#" className="text-red-500 font-semibold text-sm">Read More</a>
          <div className="w-10 border-b-2 border-red-500 mt-1"></div>
        </div>

        {/* Industries */}
        <div className="flex flex-col items-center space-y-4">
          <PencilRuler className="w-10 h-10 text-gray-700" />
          <h3 className="text-lg font-bold tracking-wide">INDUSTRIES</h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            A business analyst will be assigned by Critical Touch to do the functional analysis to understand the requirements of the client website beyond.
          </p>
          <a href="#" className="text-red-500 font-semibold text-sm">Read More</a>
          <div className="w-10 border-b-2 border-red-500 mt-1"></div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
