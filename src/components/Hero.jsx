import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GLOWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 ">
            Fast, flexible financing for
          </p>
          <div className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2">
            <Typewriter
              options={{
                strings: ["BTC", "BTB", "SASS"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <p className="md:text-2xl text-xl text-gray-500">
          Moniter your data analytics to increase revenue from BTC, BTC, & SASS
          platforms.
        </p>
      </div>
    </div>
  );
};

export default Hero;
