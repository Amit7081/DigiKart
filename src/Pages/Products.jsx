// src/pages/ProductPage.jsx
import React, { useContext, useState } from "react";
import FilterSidebar from "../components/Filter";
import Product_Cart from "../components/Product_Cart";
import { AuthContext } from "../Context/AuthProvider";

const ProductPage = () => {
  const { data } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [range, setRange] = useState([0, 5000]);
  const [search, setSearch] = useState("ALL");
  const [category, setCategory] = useState("ALL");

  const filterdata = data?.products?.filter((item) => {
    return (
      search === "ALL" ||
      (item.title.toLowerCase().includes(search.toLowerCase()) &&
        category === "ALL") ||
      item.category === category
    );
  });
  return (
    <div className="relative flex">
      {/* Sidebar */}
      <FilterSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        range={range}
        setRange={setRange}
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      {/* Main Product Section */}
      <Product_Cart setSidebarOpen={setSidebarOpen} filterdata={filterdata} />
    </div>
  );
};

export default ProductPage;
