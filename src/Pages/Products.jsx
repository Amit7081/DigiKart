// src/pages/ProductPage.jsx
import React, { useContext, useState } from "react";
import FilterSidebar from "../components/Filter";
import Product_Cart from "../components/Product_Cart";
import { AuthContext } from "../Context/AuthProvider";

const ProductPage = () => {
  const { data } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [range, setRange] = useState([0, 5000]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [brand, setBrand] = useState("ALL");
  const [page, setPage] = useState(1);

  const filterdata = data?.products?.filter((item) => {
    return (
      (search === "ALL" ||
        item.title.toLowerCase().includes(search.toLowerCase())) &&
      (category === "ALL" || item.category === category) &&
      item.price >= range[0] &&
      item.price <= range[1] &&
      (brand == "ALL" || item.brand === brand)
    );
  });

  const dynamicpage = Math.ceil(filterdata?.length / 6 || 0);

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
        brand={brand}
        setBrand={setBrand}
        setPage={setPage}
      />

      {/* Main Product Section */}
      <Product_Cart
        setSidebarOpen={setSidebarOpen}
        filterdata={filterdata}
        page={page}
        setPage={setPage}
        dynamicpage={dynamicpage}
      />
    </div>
  );
};

export default ProductPage;
