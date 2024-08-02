import React from 'react';

const Body = () => {
  return (
    <div className="bg-yellow-100 p-4 rounded-lg ">
      {/* <div className="text-green-500  font-bold text-lg mb-2 text-left ">
        #11782521051 <span className="text-green-600">Active</span>
      </div> */}
       
      {/* <div className="text-gray-700 mb-4 text-left m-10">
        $71.00 + $0 shipping
        <br />
        Deliver every 1 week
      </div> */}
      <div className="relative z-20 mt-6 ml-6 text-black text-left bg-yellow-100 m-20">
        <p className="text-lg px-20">#11782521051 <span className="text-green-600">Active</span></p>
        <p className="text-xl font-semibold px-20">$71.00 + $0 shipping</p>
        <p className="text-sm px-20">Deliver every 1 week</p>
      </div>

      <div className="bg-yellow-200 p-20 rounded-lg m-20">
        <div className="text-gray-700 font-bold text-xl mb-10">
          Upcoming order: August 20, 2024
        </div>
        <div className="flex justify-between">
          <button className="bg-green-900  text-white  py-2 px-20 rounded-full focus:outline-none focus:shadow-outline">
            Order now
          </button>
          <button className="bg-yellow-100 text-black hover:bg-green-900 hover:text-green-300 border-black py-2 px-20 rounded-full focus:outline-none focus:shadow-outline">
            Skip
          </button>
          <button className="bg-yellow-100 text-black border-gray-500 hover:bg-green-900 hover:text-green-300  py-2 px-20 rounded-full focus:outline-none focus:shadow-outline ">
            Postpone
          </button>
        </div>
        <div className="text-gray-600 pt-10">
          Last order was charged on July 30, 2024
        </div>
      </div>
      {/* <div className="bg-blue-400 p-20 m-20 rounded-lg text-white font-bold text-xl">
        Try something new!
      </div> */}
     
    </div>
  );
};

export default Body;