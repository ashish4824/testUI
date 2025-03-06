import React from 'react'
import IndustrySection from './IndustrySection'
import SolutionsSection from './SolutionsSection'
import WelcomeSection from './WelcomeSection'
import parallax from "../Home/Images/parallax.jpg"
import ServicesSection from './ServicesSection'
import HeroSection from './HeroSection'
export default function Index() {
  return (
    <>
    <HeroSection />
    <ServicesSection />
    <div className="w-full bg-gray-100 p-10 h-48 flex items-center justify-center"style={{ backgroundImage: `url(${parallax.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" }} >
        <p className="text-[#fff] text-center">Familiar with software development / maintenance life cycle in a Large size development project. Good track record of development / maintenance of DOT NET framework, C-SHARP programming, distributed development, windows services</p>
        </div> 
    <WelcomeSection />
    <SolutionsSection />
    <IndustrySection />
    </>
  )
}
