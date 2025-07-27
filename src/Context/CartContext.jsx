import { createContext, useState } from "react";

export const CartData = createContext();

export const CartContext = ({ children }) => {
  const [cartval, setCartVal] = useState([]);

  const AddToCart = (product) => {
    const CartInItem = cartval.find((item) => {
      return item.id === product.id;
    });
    if (CartInItem) {
      const UpdateCartval = cartval.map((item) => {
        return product.id === item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      setCartVal(UpdateCartval);
    } else setCartVal([...cartval, { ...product, quantity: 1 }]);
  };

  return (
    <CartData.Provider value={{ cartval, setCartVal, AddToCart }}>
      {children}
    </CartData.Provider>
  );
};
