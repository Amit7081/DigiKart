import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const { category_data } = useContext(AuthContext);

  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 py-6 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
      {category_data.map((category, index) => (
        <button
          key={index}
          onClick={() => navigate(`/category/${category}`)}
          className="text-sm sm:text-base md:text-lg lg:text-xl font-medium capitalize text-white bg-gradient-to-r from-[#0f2027] to-[#764ba2] px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;
