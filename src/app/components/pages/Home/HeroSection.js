import HeroSlider from "./HeroSlider";
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/your-image.jpg')" }}>

      {/* Navbar */}
      {/* <nav className="absolute top-0 left-0 w-full bg-white shadow-md flex items-center justify-between px-10 py-4">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <span className="text-red-600 font-bold text-lg">CRITICALTOUCH</span>
        </div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>HOME</li>
          <li>COMPANY ▼</li>
          <li>SERVICES ▼</li>
          <li>INDUSTRIES ▼</li>
          <li>CAPABILITY MATRIX</li>
          <li>ENGAGEMENT OPTIONS</li>
          <li>E-SOLUTIONS ▼</li>
        </ul>
        <img src="/iso-badge.png" alt="ISO Badge" className="h-10" />
      </nav> */}

      <HeroSlider />
    </div>
  );
};

export default HeroSection;
