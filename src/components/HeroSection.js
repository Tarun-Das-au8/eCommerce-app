import React from "react";
import VeggiesImage from "../images/veggies-hero-image.webp";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = "category-section";
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative w-full h-auto md:h-[calc(100vh_-_5rem)] flex flex-col md:flex-row items-center mt-20 md:mt-0">
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 md:gap-8 px-4 md:pl-20 lg:pl-32 text-center md:text-left">
        <h1 className="text-4xl md:text-7xl font-bold text-black">
          Where Fresh is a Lifestyle
        </h1>
        <p className="md:mt-4 text-lg md:text-xl text-black">
          Join us, elevate meals, support local farmers, and reduce food waste.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 md:gap-4 md:mt-6">
          <Link
            to="/product"
            className="w-60 md:w-full text-center p-4 md:p-6 font-semibold text-white bg-black rounded-full hover:bg-gray-800"
          >
            Shop Now
          </Link>
          <p
            onClick={scrollToSection}
            className="w-60 md:w-full text-center p-4 md:p-6 text-lg font-semibold text-black bg-white border border-black rounded-full hover:bg-gray-200"
          >
            Choose fresh now!
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center mt-8 md:mt-0">
        <img
          src={VeggiesImage}
          alt="Vegetables"
          className="relative w-full h-auto"
        />
      </div>
    </main>
  );
};

export default HeroSection;
