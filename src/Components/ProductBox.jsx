import React, { useState } from "react";

const ProductBox = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Coconut electrolyte",
      image: "images/Prod1.png",
      price: 9.9,
      originalPrice: 11.0,
    },
    {
      id: 2,
      name: "Curacao electrolyte",
      image: "images/Prod2.png",
      price: 9.9,
      originalPrice: 11.0,
    },
    {
      id: 3,
      name: "Guava electrolyte",
      image: "images/Prod3.png",
      price: 9.9,
      originalPrice: 11.0,
    },
    {
      id: 4,
      name: "Mango electrolyte",
      image: "images/Prod4.png",
      price: 9.9,
      originalPrice: 11.0,
    },
  
    
  ];

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-yellow-100 min-h-screen">
   

<div className="relative text-center mb-8 m-20">
        <img
          src="images/blueBox.png"
          alt="Banner"
          className="w-screen h-full rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center   text-white bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-10 ">Try something new!</h1>
          <p className="text-lg mb-8">Rehydrate and replenish with our newly launched electrolytes</p>
          <button className="mt-6 px-6 py-2 bg-lime-200 hover:bg-lime-300 text-black rounded-full">
            See all products
          </button>
        </div>
      </div>

     
      
      
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center bg-yellow-100 p-4 rounded-full cursor-pointer"
          >
            <img src={product.image} alt={product.name} className="w-40 h-40 mb-4 rounded-lg"  />
            
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <div className="flex items-center justify-center mb-2">
                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
              <button
                className="px-4 py-2 bg-green-900 text-white rounded-full"
                onClick={() => handleProductClick(product)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed top-0 right-0 bottom-0 w-1/3 bg-yellow-100 p-6 shadow-lg overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Add product</h2>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-24 h-24 mb-4"
          />
          <h3 className="text-xl font-semibold">{selectedProduct.name}</h3>
          <p className="text-lg font-bold text-green-700">${selectedProduct.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500 line-through mb-4">
            ${selectedProduct.originalPrice.toFixed(2)}
          </p>
          <div className="flex items-center mb-4">
            <button className="px-3 py-1 bg-gray-300 text-black rounded-l">-</button>
            <input
              type="number"
              min="1"
              className="w-12 text-center border-t border-b"
              value="1"
              readOnly
            />
            <button className="px-3 py-1 bg-gray-300 text-black rounded-r">+</button>
          </div>
          <button className="px-6 py-2 bg-green-600 text-white rounded-full">
            Add one-time, save 10%
          </button>
          <button
            className="mt-4 block text-center text-gray-500"
            onClick={() => setSelectedProduct(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductBox;
