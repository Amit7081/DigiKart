import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Pagination from "./Pagination";
import Lottie from "lottie-react";
import animationdata from "../assets/Data Not Found.json";
import { useNavigate } from "react-router-dom";
import { CartData } from "../Context/CartContext";

const Product_Cart = ({
  setSidebarOpen,
  filterdata,
  dynamicpage,
  page,
  setPage,
}) => {
  const { data } = useContext(AuthContext);
  const { AddToCart } = useContext(CartData);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="flex-1 p-4">
      {/* Show Sidebar on Mobile */}
      <button
        className="px-4 py-2 mb-4 text-sm font-medium text-white bg-blue-600 rounded md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        Show Menu
      </button>

      {/* Products */}
      {filterdata?.length > 0 ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="grid w-full grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl">
            {filterdata?.slice((page - 1) * 6, page * 6).map((item, index) => (
              <div
                key={index}
                className="flex h-[380px] flex-col items-center justify-between w-full p-4 transition-transform duration-300 bg-gray-100 border border-gray-200 shadow-md rounded-xl hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover bg-white rounded-full shadow-lg cursor-pointer h-44 w-44"
                  onClick={() => navigate(`/products/${item.id}`)}
                />
                <h3 className="mt-2 text-lg font-semibold text-gray-700">
                  ₹{item.price}
                </h3>
                <h4 className="w-full px-2 text-sm font-medium text-center text-gray-600 truncate">
                  {item.title}
                </h4>
                <button
                  className="w-full px-4 py-2 mt-2 text-white transition bg-red-600 border border-red-600 rounded-lg shadow sm:w-auto hover:bg-red-700"
                  onClick={() => AddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8">
            <Pagination
              page={page}
              setPage={setPage}
              dynamicpage={dynamicpage}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <Lottie
            animationData={animationdata}
            className="h-[300px] sm:h-[400px] md:h-[500px]"
          />
          <p className="mt-4 text-lg font-medium text-gray-500">
            No Products Found
          </p>
        </div>
      )}
    </div>
  );
};

export default Product_Cart;
