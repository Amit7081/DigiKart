// src/components/Product_Cart.jsx
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Product_Cart = ({ setSidebarOpen, filterdata }) => {
  const { data } = useContext(AuthContext);

  useEffect(() => {
    if (data) {
      console.log(data.products);
    }
  }, [data]);

  return (
    <div className="flex-1 p-4">
      <button
        className="px-4 py-2 mb-4 text-white bg-blue-600 rounded lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        Show Menu
      </button>

      {/* Product Grid */}
      <div className="h-[calc(100vh-100px)] overflow-y-auto px-2 scrollbar-hide mr-20">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 place-items-center">
          {filterdata?.map((item, index) => (
            <div
              key={index}
              className="border-2 border-gray-400 rounded-lg shadow-3xl h-[380px] w-[90%] max-w-[250px] my-6 p-4 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt="Loading"
                className="object-cover rounded-full shadow-lg h-[220px] w-[220px]"
              />
              <h3 className="mb-2 text-xl font-semibold text-left text-gray-700">
                ${item.price}
              </h3>
              <h3 className="mb-2 text-xl font-semibold text-center text-gray-700 truncate">
                {item.title}
              </h3>
              <button className="p-2 ml-8 font-semibold text-center bg-red-600 border-2 border-red-600 rounded-md shadow-sm hover:bg-red-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product_Cart;
