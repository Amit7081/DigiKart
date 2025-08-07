import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartData } from "../Context/CartContext";

const CategoryProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [CategorySearch, setCategorySearch] = useState([]);
  const { AddToCart } = useContext(CartData);

  const categoryPage = async () => {
    try {
      if (params.category?.toLowerCase() === "all") {
        const res = await axios.get(
          `https://fakestoreapi.in/api/products?limit=150`
        );
        setCategorySearch(res.data); // ✅ fix for direct array
      } else {
        const res = await axios.get(
          `https://fakestoreapi.in/api/products/category?type=${params.category}`
        );
        setCategorySearch(res.data.products);
      }
    } catch (err) {
      console.error("Error fetching category products:", err);
    }
  };

  useEffect(() => {
    categoryPage();
  }, [params.category]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-xl px-4 mx-auto mt-8">
      {CategorySearch?.length > 0 ? (
        CategorySearch.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between w-full gap-4 p-4 my-4 bg-gray-100 rounded-lg shadow-md md:flex-row"
          >
            {/* Left: Image */}
            <div className="flex justify-center w-full md:w-1/3">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain w-40 h-40 rounded-full cursor-pointer md:w-72 md:h-72"
                onClick={() => navigate(`/products/${item.id}`)}
              />
            </div>

            {/* Right: Info */}
            <div className="flex flex-col justify-between w-full mt-4 md:w-2/3 md:mt-0">
              <h2 className="mb-2 text-base font-semibold md:text-lg">
                {item.title}
              </h2>

              <h2 className="flex items-center mb-1 text-base font-semibold md:text-lg">
                $
                <span className="ml-2 text-2xl text-black md:text-4xl">
                  {Math.ceil(item.price - item.price * (item.discount / 100))}
                </span>
                <span className="ml-2 text-red-500">
                  ({item.discount}% off)
                </span>
              </h2>

              <p className="mb-2 text-sm text-green-700">Free delivery</p>

              <button
                className="px-4 py-2 text-white transition bg-red-600 border border-red-600 rounded w-fit hover:bg-red-800"
                onClick={() => AddToCart(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-lg font-semibold text-center">Loading...</div>
      )}
    </div>
  );
};

export default CategoryProduct;
