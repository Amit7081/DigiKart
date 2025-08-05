import React, { useContext } from "react";
import { CartData } from "../Context/CartContext";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cartval, AddToCart, setCartVal, price } = useContext(CartData);
  const decrementItem = (product) => {
    const updatedItem = cartval.map((item) => {
      return item.id === product.id
        ? { ...item, quantity: item.quantity - 1 }
        : item;
    });

    const updatedItem1 = updatedItem.filter((item) => {
      return item.quantity > 0;
    });
    setCartVal(updatedItem1);
  };
  const deleteItem = (product) => {
    const updatedItem = cartval.map((item) => {
      return item.id === product.id
        ? { ...item, quantity: (item.quantity = 0) }
        : item;
    });

    const updatedItem1 = updatedItem.filter((item) => {
      return item.quantity > 0;
    });
    setCartVal(updatedItem1);
  };

  return (
    <>
      {cartval?.length > 0 ? (
        <div>
          <div className="flex flex-col items-center justify-center gap-4 mx-32 my-8">
            {cartval?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between w-full gap-12 p-4 mx-4 bg-gray-100 border-2 rounded-md shadow-3xl"
                >
                  <div className="flex items-center justify-start w-full gap-8">
                    <img
                      src={item.image}
                      alt="Loading"
                      className="w-20 h-20 my-1 rounded-full"
                    />

                    <div>
                      <h2 className="text-lg font-semibold md:w-96 sm:64">
                        {item.title.slice(0, 50)}...
                      </h2>
                      <h2 className="mt-2 text-lg font-semibold text-red-600">
                        ${item.price}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center justify-start text-lg font-bold">
                    <button
                      className="p-1 bg-red-600 rounded-lg cursor-pointer w-[20px] hover:text-red-800 text-lg"
                      onClick={() => decrementItem(item)}
                    >
                      -
                    </button>
                    <span className="p-2">{item.quantity}</span>
                    <button
                      className="p-1 bg-green-600 rounded-lg cursor-pointer w-[20px] hover:text-red-800 text-lg"
                      onClick={() => AddToCart(item)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-red-600 hover:text-red-800 "
                    onClick={() => deleteItem(item)}
                  >
                    <Trash2 size={25} />
                  </button>
                </div>
              );
            })}
          </div>
          {/* // Contact details */}
          <div className="flex items-center justify-between mx-32 my-8">
            <div className="flex flex-col items-start justify-center gap-4 p-4 border-2 border-gray-300">
              <div className="w-full text-xl font-bold text-center">
                Delivery Info
              </div>
              <div className="w-full">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 mt-1 border-2 border-gray-200 rounded-md outline-none"
                />
              </div>
              <div className="w-full">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Enter your Address"
                  className="w-full p-2 border-2 border-gray-200 rounded-md outline-none"
                />
              </div>
              <div className="flex items-center justify-start gap-4 p-2">
                <div>
                  <h1>State</h1>
                  <input
                    type="text"
                    placeholder="Enter your state"
                    className="p-2 border-2 border-gray-200 rounded-md outline-none"
                  />
                </div>
                <div>
                  <h1>Postcode</h1>
                  <input
                    type="text"
                    placeholder="Enter your Postcode"
                    className="p-2 border-2 border-gray-200 rounded-md outline-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 p-2">
                <div>
                  <h1>Country</h1>
                  <input
                    type="text"
                    placeholder="Enter your Country"
                    className="p-2 border-2 border-gray-200 rounded-md outline-none"
                  />
                </div>
                <div>
                  <h1>phone no.</h1>
                  <input
                    type="text"
                    placeholder="Enter your Phone no."
                    className="p-2 border-2 border-gray-200 rounded-md outline-none"
                  />
                </div>
              </div>
              <button className="p-2 ml-40 font-semibold text-center bg-red-600 border-2 border-red-400 rounded-md hover:bg-red-700">
                Submit
              </button>
            </div>
            <div className="flex flex-col items-start justify-center gap-4 p-4 border-2 border-white shadow-xl">
              <h1 className="w-full text-xl font-bold text-center">
                Bill details
              </h1>
              <div className="flex items-center justify-between w-full">
                <h1>items Total</h1>
                <h2>${price}</h2>
              </div>
              <div className="flex items-center justify-between w-full">
                <h1>Delivery Charge</h1>
                <h2>$9</h2>
              </div>
              <div className="flex items-center justify-between w-full">
                <h1>Handling Charge</h1>
                <h2>$9</h2>
              </div>
              <hr />
              <div className="flex items-center justify-between w-full">
                <h1>Grand total</h1>
                <h2>${price + 9 + 9}</h2>
              </div>
              <div>
                <h1>Apply Promo code</h1>
                <div className="flex items-center justify-between w-full gap-2 mt-2">
                  <input
                    type="text"
                    placeholder="Apply promo code"
                    className="p-1 border-2 border-gray-400 outline-none"
                  />
                  <button className="p-1 bg-white border-2 shadow-xl ">
                    Apply
                  </button>
                </div>
                <button className="items-center justify-center w-full p-2 mt-4 font-semibold bg-red-600 hover:bg-red-700">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center text-2xl font-bold h-[100px]">
          Empty Cart
        </div>
      )}
    </>
  );
};
export default Cart;
