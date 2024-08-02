import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 h-full md:h-3/4">
        <img
          src="images/hero.png"
          alt="Blur Background"
          className="w-full h-full object-cover filter blur-lg"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full md:h-3/4 text-white text-center px-4 md:px-0">
        <h1 className="text-2xl md:text-4xl font-bold">Loop Wellness Club</h1>
        <h2 className="text-xl md:text-2xl font-medium mt-2">Welcome, Abel</h2>

        {/* Bottle Image */}
        <div className="mt-8">
          <img
            src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/electrolytesss.svg?v=1722001529"
            alt="Bottles"
            className="w-full max-w-xs md:max-w-md mx-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
