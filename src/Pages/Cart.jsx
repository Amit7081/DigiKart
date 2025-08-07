import React, { useContext } from "react";
import { CartData } from "../Context/CartContext";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cartval, AddToCart, setCartVal, price } = useContext(CartData);

  const decrementItem = (product) => {
    const updatedItem = cartval.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartVal(updatedItem.filter((item) => item.quantity > 0));
  };

  const deleteItem = (product) => {
    const updatedItem = cartval.map((item) =>
      item.id === product.id ? { ...item, quantity: 0 } : item
    );
    setCartVal(updatedItem.filter((item) => item.quantity > 0));
  };

  return (
    <>
      {cartval?.length > 0 ? (
        <div className="w-full">
          {/* Cart Items */}
          <div className="flex flex-col items-center justify-center gap-4 p-4 md:px-16">
            {cartval.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between w-full gap-4 p-4 bg-gray-100 border rounded-md shadow-md md:flex-row"
              >
                <div className="flex flex-col items-center w-full gap-4 sm:flex-row">
                  <img
                    src={item.image}
                    alt="product"
                    className="object-contain w-20 h-20 rounded-full"
                  />
                  <div>
                    <h2 className="text-base font-semibold md:w-96">
                      {item.title.slice(0, 50)}...
                    </h2>
                    <h2 className="mt-1 font-semibold text-red-600">
                      ${item.price}
                    </h2>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <button
                    className="px-2 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                    onClick={() => decrementItem(item)}
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="px-2 py-1 text-white bg-green-600 rounded hover:bg-green-700"
                    onClick={() => AddToCart(item)}
                  >
                    +
                  </button>
                </div>

                {/* Delete */}
                <button
                  className="mt-2 text-red-600 hover:text-red-800 md:mt-0"
                  onClick={() => deleteItem(item)}
                >
                  <Trash2 size={24} />
                </button>
              </div>
            ))}
          </div>

          {/* Delivery + Billing */}
          <div className="flex flex-col justify-between gap-6 p-4 lg:flex-row md:px-16">
            {/* Delivery Info */}
            <div className="w-full p-4 border rounded-md lg:w-1/2">
              <form>
                <h2 className="mb-4 text-xl font-bold">Delivery Info</h2>
                <div className="mb-2">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border rounded"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-2">
                  <label>Address</label>
                  <input
                    type="text"
                    className="w-full p-2 mt-1 border rounded"
                    placeholder="Enter your address"
                  />
                </div>
                <div className="flex flex-col gap-4 mb-2 sm:flex-row">
                  <div className="w-full">
                    <label>State</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Enter your state"
                    />
                  </div>
                  <div className="w-full">
                    <label>Postcode</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Postcode"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mb-2 sm:flex-row">
                  <div className="w-full">
                    <label>Country</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Country"
                    />
                  </div>
                  <div className="w-full">
                    <label>Phone No.</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-700"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Bill Info */}
            <div className="w-full p-4 border rounded-md shadow-md lg:w-1/2">
              <h2 className="mb-4 text-xl font-bold text-center">
                Bill Details
              </h2>
              <div className="flex justify-between mb-2">
                <span>Items Total</span>
                <span>${price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery Charge</span>
                <span>$9</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Handling Charge</span>
                <span>$9</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold">
                <span>Grand Total</span>
                <span>${price + 9 + 9}</span>
              </div>

              <div className="mt-4">
                <label>Apply Promo Code</label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    className="flex-1 p-1 border rounded"
                    placeholder="Promo code"
                  />
                  <button className="px-4 py-1 bg-gray-100 border rounded hover:shadow">
                    Apply
                  </button>
                </div>
              </div>

              <button className="w-full py-2 mt-4 text-white bg-red-600 rounded hover:bg-red-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-40 text-2xl font-bold">
          Empty Cart
        </div>
      )}
    </>
  );
};

export default Cart;
