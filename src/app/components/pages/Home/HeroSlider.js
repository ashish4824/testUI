"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Slide data array
const slides = [
  {
    id: 1,
    title: "PRODUCT ENGINEERING",
    subtitle: "We thrive on technology is our strength",
    description: "NEED FOR OUTSOURCED PRODUCT DEVELOPMENT",
    image: "/your-image1.jpg",
  },
  {
    id: 2,
    title: "DIGITAL TRANSFORMATION",
    subtitle: "Innovate with cutting-edge solutions",
    description: "Empowering businesses with AI and Cloud",
    image: "/your-image2.jpg",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900 text-white">
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <p className="text-lg">{slide.subtitle}</p>
              <h1 className="text-6xl font-bold">{slide.title}</h1>
              <p className="text-sm mt-2">{slide.description}</p>
              <button className="bg-red-600 text-white px-6 py-2 mt-6 rounded-full">
                READ MORE →
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider Arrows */}
      <button className="swiper-button-prev absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10">
        <ChevronLeft size={24} />
      </button>
      <button className="swiper-button-next absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroSlider;
