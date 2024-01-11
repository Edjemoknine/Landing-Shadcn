import React from "react";
import { Button } from "../ui/button";
import Caroussel from "./Caroussel";

const Hero = () => {
  return (
    <section className="md:py-20 py-10 bg-gradient-to-r from-gray-00 to-gray-200 space-y-20">
      <div className="container mx-auto text-center">
        <div className="text-6xl font-bold flex justify-center items-center md:px-20 pb-10 bg-gradient-to-r from-blue-500 to-teal-300 bg-clip-text text-transparent">
          Build a brand and start selling in seconds.
        </div>
        <p className="text-transparent md:text-xl bg-clip-text bg-gradient-to-r from-black font-bold to-gray-500 mb-10">
          No matter what you sell, Bird software will provide you anythings you
          need to run your business.
        </p>
        <div className="flex gap-4 justify-center pt-10">
          <Button className="bg-blue-500 px-10 py-5 font-bold">
            Get Started
          </Button>
          <Button className="bg-gray-400 px-10 py-5 font-bold">
            Learn more
          </Button>
        </div>

        <div className="pt-10 max-w-3xl w-full mx-auto">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/coding.mp4" type="video/mp4" />
          </video>
        </div>
        <Caroussel />
      </div>
    </section>
  );
};

export default Hero;
