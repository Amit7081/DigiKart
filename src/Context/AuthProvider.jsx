import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const url = `https://fakestoreapi.in/api/products?limit=150`;

      try {
        const res = await axios.get(url);
        setData(res.data);
        //  console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const getUniqueData = (data, property) => {
    const new_val = data?.map((elem) => elem[property]);
    const unique_val = ["ALL", ...new Set(new_val)];
    return unique_val;
  };
  var val = [];
  data ? (val = data.products) : [];
  const category_data = getUniqueData(val, "category");
  const brand_data = getUniqueData(val, "brand");

  return (
    <AuthContext.Provider value={{ data, setData, category_data, brand_data }}>
      {children}
    </AuthContext.Provider>
  );
};
