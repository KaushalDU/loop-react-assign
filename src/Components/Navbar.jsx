import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const handleClickOutside =
  (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-100 shadow-md sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 md:px-1">
        <div className="flex items-center">
          <img src="images/logo1.png" alt="Logo" className="w-[80px] h-10 object-cover pt-2" />
          <button
            className="block md:hidden ml-2 text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <nav className={`flex-col md:flex-row md:flex ${isMobileMenuOpen ? 'flex' : 'hidden'} md:space-x-4 space-y-4 md:space-y-0`}>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => handleDropdown('shop')}
              className="text-gray-800 hover:text-blue-500 hover:underline"
            >
              Shop Subscription 
            </button>
            {dropdown === 'shop' && (
              <div className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                <ul className='text-left'>
                  <li className="p-2 hover:bg-gray-100">Auto-ship subscriptions</li>
                  <li className="p-2 hover:bg-gray-100">Trial Subscription</li>
                  <li className="p-2 hover:bg-gray-100">Add-on subscription</li>
                  <li className="p-2 hover:bg-gray-100">Membership Subscription</li>
                  <li className="p-2 hover:bg-gray-100">Only Subscriptions</li>
                  <li className="p-2 hover:bg-gray-100">All subscriptions</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => handleDropdown('bundles')}
              className="text-gray-800 hover:text-blue-500 hover:underline"
            >
              Bundles
            </button>
            {dropdown === 'bundles' && (
              <div className="absolute mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                <ul className='text-left'>
                  <li className="p-2 hover:bg-gray-100">Meal Bundle (BYOB)</li>
                  <li className="p-2 hover:bg-gray-100">Wine Box</li>
                  <li className="p-2 hover:bg-gray-100">Coffee Box</li>
                  <li className="p-2 hover:bg-gray-100">Bundle Examples</li>
                </ul>
              </div>
            )}
          </div>
          <button className="text-gray-800 hover:text-blue-500 hover:underline">
            Manage Subscriptions
          </button>
          <button className="text-gray-800 hover:text-blue-500 hover:underline">
            Recharge Alternative
          </button>
        </nav>
        <div className="flex space-x-4">
          <button className="text-gray-800 hover:text-blue-500 hover:underline">
            <img src="images/search1.png" alt="Search" className="w-6 h-6 object-contain" />
          </button>
          <button className="text-gray-800 hover:text-blue-500 hover:underline">
            <img src="images/login.png" alt="Login" className="w-6 h-6 object-contain" />
          </button>
          <button className="text-gray-800 hover:text-blue-500 hover:underline">
            <img src="images/cart.png" alt="Cart" className="w-6 h-6 object-contain" />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-100 p-4">
          <div className="space-y-2">
            <button className="block w-full text-left text-gray-800 hover:text-blue-500 hover:underline" onClick={() => handleDropdown('shop')}>
              Shop Subscription
            </button>
            {dropdown === 'shop' && (
              <div className="bg-white border border-gray-200 shadow-lg">
                <ul className='text-left'>
                  <li className="p-2 hover:bg-gray-100">Auto-ship subscriptions</li>
                  <li className="p-2 hover:bg-gray-100">Trial Subscription</li>
                  <li className="p-2 hover:bg-gray-100">Add-on subscription</li>
                  <li className="p-2 hover:bg-gray-100">Membership Subscription</li>
                  <li className="p-2 hover:bg-gray-100">Only Subscriptions</li>
                  <li className="p-2 hover:bg-gray-100">All subscriptions</li>
                </ul>
              </div>
            )}
            <button className="block w-full text-left text-gray-800 hover:text-blue-500 hover:underline" onClick={() => handleDropdown('bundles')}>
              Bundles
            </button>
            {dropdown === 'bundles' && (
              <div className="bg-white border border-gray-200 shadow-lg">
                <ul className='text-left'>
                  <li className="p-2 hover:bg-gray-100">Meal Bundle (BYOB)</li>
                  <li className="p-2 hover:bg-gray-100">Wine Box</li>
                  <li className="p-2 hover:bg-gray-100">Coffee Box</li>
                  <li className="p-2 hover:bg-gray-100">Bundle Examples</li>
                </ul>
              </div>
            )}
            <button className="block w-full text-left text-gray-800 hover:text-blue-500 hover:underline">
              Manage Subscriptions
            </button>
            <button className="block w-full text-left text-gray-800 hover:text-blue-500 hover:underline">
              Recharge Alternative
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;



