import React from "react";

const SavingPlanDetails = () => {
  const products = [
    {
      id: 1,
      name: "Meal Box",
      details: ["LPBNDLko92f", "VIP Discount", "Bread & Rusk x 1", "Healthy Cereal x 2", "Sausage & Egg x 1"],
      price: 45.8,
      image: "images/menu1.png",
    },
    {
      id: 2,
      name: "Banana & Eggs",
      details: ["Subscription discount (25%)", "VIP Discount"],
      price: 13.65,
      originalPrice: 25.0,
      image: "images/menu2.png",
    },
    {
      id: 3,
      name: "Ageless Loop - Face cream",
      details: ["Subscription discount (100%)"],
      price: 0.0,
      originalPrice: 23.0,
      image: "images/menu3.png",
    },
    {
      id: 4,
      name: "Bacon, Egg with Toast",
      details: ["Subscription discount (25%)", "VIP Discount"],
      price: 11.55,
      originalPrice: 21.09,
      image: "images/menu1.png",
    },
    {
      id: 5,
      name: "Order Note",
      details: [""],
      price: 0,
      image: "images/menu1.png",
    },
    {
      id: 6,
      name: "Protein Bars",
      details: ["Subscription discount (15%)"],
      price: 12.0,
      originalPrice: 14.0,
      image: "images/menu1.png",
    },
    {
      id: 7,
      name: "Salad Bowl",
      details: ["Subscription discount (10%)", "VIP Discount"],
      price: 10.5,
      originalPrice: 12.0,
      image: "images/menu1.png",
    },
    {
      id: 8,
      name: "Energy Drink",
      details: ["Subscription discount (20%)"],
      price: 2.99,
      originalPrice: 3.99,
      image: "images/menu1.png",
    },
    {
      id: 9,
      name: "Granola Mix",
      details: ["VIP Discount"],
      price: 5.5,
      image: "images/menu1.png",
    },
  ];

  return (
    <div className=" bg-yellow-100 min-h-screen p-24">
        <hr class="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700"></hr>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Saving plan details</h1>
        <div className="space-x-4">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-green-900 hover:text-green-300 transition duration-300">
            Upcoming orders
          </button>
        
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-green-900 hover:text-green-300 transition duration-300">
            Order history
          </button>
          
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex bg-yellow-200 p-4 rounded-lg shadow-md border border-black">
            <img src={product.image} alt={product.name} className="w-24 h-24 rounded-lg mr-4" />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <ul className="text-gray-600 mb-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-sm">- {detail}</li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
                <button className="bg-green-900 text-green-300 px-4 py-1 rounded-full">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavingPlanDetails;
