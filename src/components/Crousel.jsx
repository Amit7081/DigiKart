import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const { data } = useContext(AuthContext);
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
      <div className="flex items-center justify-center h-[400px] bg-gray-100">
        <p className="text-xl font-medium text-gray-500">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] h-[580px] sm:h-auto py-10">
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

      {/* Slides */}
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
            className="flex flex-col-reverse items-center justify-between flex-shrink-0 w-full gap-6 px-6 md:flex-row"
            style={{ width: `${100 / products.length}%` }}
          >
            {/* Text Section */}
            <div className="w-full px-4 text-center text-white md:w-1/2 md:px-16 md:text-left">
              <h1 className="text-2xl font-bold md:text-4xl">{item.title}</h1>
              <p className="mt-2 text-sm text-gray-300 md:text-base line-clamp-3">
                {item.description}
              </p>
              <button className="mt-4 bg-gradient-to-r from-[#0f2027] to-[#764ba2] text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform">
                Show More
              </button>
            </div>

            {/* Image Section */}
            <div className="flex justify-center w-full mb-4 md:w-1/2 md:mb-0">
              <img
                src={item.image}
                alt={item.title}
                className="h-[300px] md:h-[400px] w-auto object-contain bg-white p-4 rounded-full shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      {/* <div className="absolute z-20 flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
        {products.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
