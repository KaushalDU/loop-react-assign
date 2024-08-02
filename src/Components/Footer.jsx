import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* First Section */}
      <div className="bg-[#6811ff] text-white p-6 md:p-8">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold">This store is powered by Loop subscriptions!</h2>
            <p className="mt-2 text-sm md:text-base">Turn your customers into subscribers and drive recurring revenue for your DTC brand.</p>
            <button className="mt-4 px-4 py-2 bg-[#0f0c28] hover:bg-gray-500 text-white font-semibold rounded">Book a Demo</button>
          </div>
        </div>
      </div>
      
      {/* Second Section */}
      <div className="bg-[#0f0c28] text-white p-6 md:p-8">
        <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 text-left">
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul className="text-sm md:text-base">
              <li><a href="#" className="hover:underline">Widgets Gallery [New]</a></li>
              <li><a href="#" className="hover:underline">Subscription Gamification</a></li>
              <li><a href="#" className="hover:underline">Unbundling of Box Subscription</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Migration</h3>
            <ul className="text-sm md:text-base">
              <li><a href="#" className="hover:underline">Recharge</a></li>
              <li><a href="#" className="hover:underline">Bold</a></li>
              <li><a href="#" className="hover:underline">Migration reviews</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Compare Apps</h3>
            <ul className="text-sm md:text-base">
              <li><a href="#" className="hover:underline">Recharge vs Bold vs Loop</a></li>
              <li><a href="#" className="hover:underline">Recharge vs Skio vs Loop</a></li>
              <li><a href="#" className="hover:underline">Ordergroove vs Recharge vs Loop</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Integrations</h3>
            <ul className="text-sm md:text-base">
              <li><a href="#" className="hover:underline">Prediko for Inventory Management</a></li>
              <li><a href="#" className="hover:underline">Upsell Widget Designer</a></li>
              <li><a href="#" className="hover:underline">Littledata for BFCM analytics</a></li>
              <li><a href="#" className="hover:underline">All Integrations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Help</h3>
            <ul className="text-sm md:text-base">
              <li><a href="#" className="hover:underline">Loop Help Centre</a></li>
              <li><a href="#" className="hover:underline">How to setup subscription on Shopify</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Legal</h3>
            <ul className="text-sm md:text-base">
              <li><a href="#" className="hover:underline">Automatic Renewal Law (ARL)</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-[#0f0c28] text-white p-6 md:p-8">
        <div className="container mx-auto text-center">
          <div className="mt-6">
            <button className="px-4 py-2 bg-[#6811ff] hover:bg-gray-500 text-white font-semibold rounded">Follow on shop</button>
          </div>

          <hr className="my-6 border-gray-500" />

          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold">Country/region</label>
              <select className="bg-[#0f0c28] text-white p-2 border border-white">
                <option value="USD">USD $ | United States</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold">Language</label>
              <select className="bg-[#0f0c28] text-white p-2 border border-white">
                <option value="EN">English</option>
              </select>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-4">
              <img src="https://img.icons8.com/color/48/000000/amex.png" alt="AMEX" className="w-8 h-8"/>
              <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" className="w-8 h-8"/>
              <img src="https://img.icons8.com/color/48/000000/discover.png" alt="Discover" className="w-8 h-8"/>
              <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Meta" className="w-8 h-8"/>
              <img src="https://img.icons8.com/color/48/000000/google-pay.png" alt="Google Pay" className="w-8 h-8"/>
              <img src="https://img.icons8.com/color/48/000000/shopify.png" alt="Shopify" className="w-8 h-8"/>
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="w-8 h-8"/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
