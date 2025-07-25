import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
const SingleProduct = () => {
  const param = useParams();
  const [singleData, setSingleData] = useState("");
  const productData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/${param.id}`
      );
      console.log(res.data.product);
      setSingleData(res.data.product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    productData();
  }, [param.id]);

  const originalPrice = Math.ceil(singleData.price);
  const discountedPrice = Math.ceil(
    singleData.price - singleData.price * (singleData.discount / 100)
  );
  return (
    <>
      {/* Whole page */}
      <div className="flex items-center justify-center">
        {/* Content is only at 80% */}
        <div className=" flex justify-around w-[80%] shadow-lg h-auto my-2 rounded-lg">
          {/* Content of product */}
          <div className="flex justify-around w-full mt-12 mb-8">
            {/* Image Section  Left Part*/}
            <div>
              <img
                src={singleData.image}
                alt="Loading..."
                className="mt-4 rounded-full w-72 h-72 lg:w-96 lg:h-96"
              />
            </div>
            {/* Right Part */}
            <div className="flex flex-col gap-4 w-[400px]">
              <h1 className="w-auto text-2xl font-bold lg:w-96">
                {singleData.title}
              </h1>
              {/* <h1 className="font-semibold">
                {`${singleData.brand.toUpperCase()} / ${singleData.category.toUpperCase()} / ${singleData.model.toUpperCase()}`}
              </h1> */}
              <h1 className="">
                <span className="p-1 text-lg font-bold text-red-700">
                  {" "}
                  ${discountedPrice}
                </span>{" "}
                {"  "}
                <span className="p-1 text-lg font-semibold line-through">
                  ${originalPrice}
                </span>{" "}
                {"       "}
                <span className="p-1 font-bold bg-red-600 border-2 border-red-600 rounded-md">
                  {singleData.discount} % discount
                </span>
              </h1>

              <p>{singleData.description}</p>

              <div>
                <label htmlFor="" className="font-semibold">
                  Quantity:
                </label>

                <input
                  type="number"
                  min={1}
                  className="w-12 p-1 ml-4 border-2 border-gray-400 rounded-md outline-none appearance-none"
                />
              </div>
              <button className="flex items-center justify-center w-auto gap-2 p-2 font-semibold text-white bg-red-600 border-2 border-red-600 rounded-md shadow-md hover:bg-red-900">
                <IoCartOutline className="text-3xl" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
