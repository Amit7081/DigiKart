import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Category = () => {
  const {category_data } = useContext(AuthContext);


  const unique_val = category_data;

  return (
    <div className="flex flex-wrap items-center gap-4 px-4 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] justify-evenly">
      {unique_val.map((elem, index) => (
        <button
          key={index}
          className=" mt-4 mb-4 bg-gradient-to-r from-[#0f2027] to-[#764ba2] text-white px-6 py-3 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl capitalize"
        >
          {elem}
        </button>
      ))}
    </div>
  );
};

export default Category;
