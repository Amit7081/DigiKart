import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const { data, setData } = useContext(AuthContext);
  const products = data?.products?.slice(0, 5) || [];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!products.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [products]);

  const next = () => setCurrent((current + 1) % products.length);
  const prev = () =>
    setCurrent((current - 1 + products.length) % products.length);

  if (!products.length) {
    return (
      <div className="flex items-center justify-center h-[580px] bg-gray-100 ">
        <p className="text-xl font-medium text-gray-500">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[580px] overflow-hidden bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] mt-12">
      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow left-4 top-1/2 hover:bg-gray-200"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow right-4 top-1/2 hover:bg-gray-200"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${products.length * 100}%`,
          transform: `translateX(-${current * (100 / products.length)}%)`,
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="w-full flex-shrink-0 flex items-center justify-between h-[500px] px-6 gap-10 max-w-full"
            style={{ width: `${100 / products.length}%` }}
          >
            {/* Text */}
            <div className="ml-24 space-y-4 text-white md:w-1/2 font-family: 'Playfair Display', serif">
              <h1 className="text-3xl font-bold ">{item.title}</h1>
              <p className="text-sm text-gray-300 line-clamp-3 ">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                {/* <span className="px-3 py-1 rounded-lg bg-white/20">Category: {item.category}</span>
    <span className="px-3 py-1 rounded-lg bg-white/20">₹{item.price}</span>
    <span className="px-3 py-1 rounded-lg bg-white/20">⭐ {item.rating?.rate || 'N/A'}</span> */}
                <button className=" mt-4 bg-gradient-to-r from-[#0f2027] to-[#764ba2] text-white px-6 py-3 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl capitalize">
                  Show More
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="h-[400px] w-[400px] object-contain rounded-full shadow-lg transition-transform duration-500 hover:scale-105 bg-white p-4"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute z-20 flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {products.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
