import { createContext, useEffect, useState } from "react";

export const CartData = createContext();

export const CartContext = ({ children }) => {
  const [cartval, setCartVal] = useState([]);
  const [price, setprice] = useState(0);

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

  useEffect(() => {
    let totalprice = 0;
    cartval.forEach((item) => {
      totalprice += item.price * (item.quantity || 1);
    });
    setprice(totalprice);
  }, [cartval]);
  return (
    <CartData.Provider value={{ cartval, setCartVal, AddToCart, price }}>
      {children}
    </CartData.Provider>
  );
};
