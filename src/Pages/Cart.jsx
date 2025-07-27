import React, { useContext } from "react";
import { CartData } from "../Context/CartContext";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cartval, AddToCart, setCartVal } = useContext(CartData);
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

  return cartval?.length > 0 ? (
    <div className="flex flex-col items-center justify-center gap-4 m-8">
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
  ) : (
    <div className="flex items-center justify-center text-2xl font-bold h-[100px]">
      Empty Cart
    </div>
  );
};

export default Cart;
