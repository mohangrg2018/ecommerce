import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <section className="container__width">
      <div className="border border-gray-300 flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="w-full sm:w-1/2 flex flex-col gap-4 items-start justify-center px-10 sm:px-20 py-10 sm:py-0">
          <div className="flex items-center gap-2">
            <p className="w-8 sm:w-12 h-0.5 bg-[#414141]"></p>
            <p className="uppercase font-medium">our bestsellers</p>
          </div>
          <h1 className="prata-regular text-2xl sm:text-4xl">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="uppercase font-medium">Shop now</p>
            <p className="w-8 sm:w-12 h-0.5 bg-[#414141]"></p>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full sm:w-1/2">
          <img src={assets.hero_img} alt="girl image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
