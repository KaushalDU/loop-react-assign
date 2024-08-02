import React from 'react';

const WellnessBonus = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-yellow-100 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="bg-yellow-400 p-6 sm:p-8 md:p-12 lg:p-20 rounded-lg shadow-lg text-gray-800 max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-left">Wellness Bonus</h1>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 text-lg sm:text-xl text-left">
          <div className="flex items-center group">
            <span className="text-2xl mr-2 sm:mr-4">💵</span>
            <span className="relative group-hover:underline">
              40% off on your first order
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </span>
          </div>
          <div className="flex items-center group">
            <span className="text-2xl mr-2 sm:mr-4">🔖</span>
            <span className="relative group-hover:underline">
              20% off on your next orders
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </span>
          </div>
          <div className="flex items-center group">
            <span className="text-2xl mr-2 sm:mr-4">👩‍⚕️</span>
            <span className="relative group-hover:underline">
              Free consultation with our nutrition expert
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </span>
          </div>
          <div className="flex items-center group">
            <span className="text-2xl mr-2 sm:mr-4">🚚</span>
            <span className="relative group-hover:underline">
              A gift after 2 orders
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </span>
          </div>
          <div className="flex items-center group">
            <span className="text-2xl mr-2 sm:mr-4">🔍</span>
            <span className="relative group-hover:underline">
              Sneak peek into our new product launches
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </span>
          </div>
          <div className="flex items-center group">
            <span className="text-2xl mr-2 sm:mr-4">👑</span>
            <span className="relative group-hover:underline">
              Unlock VIP benefits on 8th order
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </span>
          </div>
        </div>
      </div>
      <button className="mt-8 sm:mt-10 md:mt-14 px-4 sm:px-6 md:px-8 py-2 bg-white text-gray-800 rounded-lg shadow-md hover:bg-green-900 hover:text-green-300 transition duration-300">
        Pause Subscription
      </button>
      <a href="#" className="mt-4 mb-8 sm:mb-10 text-gray-800 hover:underline">
        Cancel Subscription
      </a>
    </div>
  );
};

export default WellnessBonus;

