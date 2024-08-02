import React from 'react';

const Body = () => {
  return (
    <div className="bg-yellow-100 p-4 md:p-8 rounded-lg">
      <div className="relative z-20 mt-6 text-black text-left bg-yellow-100 md:m-20 m-4">
        <p className="text-base md:text-lg px-4 md:px-20">#11782521051 <span className="text-green-600">Active</span></p>
        <p className="text-lg md:text-xl font-semibold px-4 md:px-20">$71.00 + $0 shipping</p>
        <p className="text-xs md:text-sm px-4 md:px-20">Deliver every 1 week</p>
      </div>

      <div className="bg-yellow-200 p-4 md:p-20 rounded-lg md:m-20 m-4">
        <div className="text-gray-700 font-bold text-lg md:text-xl mb-4 md:mb-10">
          Upcoming order: August 20, 2024
        </div>
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          <button className="bg-green-900 text-white py-2 px-6 md:px-20 rounded-full focus:outline-none focus:shadow-outline">
            Order now
          </button>
          <button className="bg-yellow-100 text-black hover:bg-green-900 hover:text-green-300 border-black py-2 px-6 md:px-20 rounded-full focus:outline-none focus:shadow-outline">
            Skip
          </button>
          <button className="bg-yellow-100 text-black border-gray-500 hover:bg-green-900 hover:text-green-300 py-2 px-6 md:px-20 rounded-full focus:outline-none focus:shadow-outline">
            Postpone
          </button>
        </div>
        <div className="text-gray-600 pt-4 md:pt-10">
          Last order was charged on July 30, 2024
        </div>
      </div>
    </div>
  );
};

export default Body;
