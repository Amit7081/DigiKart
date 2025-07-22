import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Filter = ({
  sidebarOpen,
  setSidebarOpen,
  range,
  setRange,
  search,
  setSearch,
  category,
  setCategory,
}) => {
  const { category_data, brand_data } = useContext(AuthContext);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`
          fixed lg:static top-0 left-0 h-full bg-gray-200 p-4 z-40
          w-auto sm:w-1/2 lg:w-64
          transition-transform duration-300
          mt-10 mb-16 ml-20 rounded-md 
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Close Button for Mobile */}
        <button
          className="absolute text-2xl font-bold top-4 right-4 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          ×
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            className="p-2 my-2 border-2 border-gray-600 rounded-md outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />

          <div>
            {category_data?.map((item, index) => (
              <label
                key={index}
                className="flex items-center gap-2 my-3 text-xl cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5"
                  style={{ accentColor: "red" }}
                  value={item}
                  name={item}
                  checked={category === item}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <h1 className="my-4 text-xl font-semibold">Brands</h1>
          <select
            defaultValue="Sony"
            className="p-2 ml-6 border-2 border-gray-600 rounded-md outline-none cursor-pointer"
          >
            {brand_data?.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>

          <h1 className="mt-4 text-xl font-semibold">Price Range</h1>
          <label className="my-2">
            Price Range: ${range[0]} - ${range[1]}
          </label>
          <input
            type="range"
            className="mb-6"
            min={range[0]}
            max={5000}
            style={{ accentColor: "red" }}
            value={range[1]}
            onChange={(e) => {
              setRange([range[0], Number(e.target.value)]);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
