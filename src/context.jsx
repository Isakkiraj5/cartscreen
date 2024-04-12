/* eslint-disable react/prop-types */

import  { createContext } from "react";
import data from "../public/data.json";

export const CartContext = createContext();

const products = data;

const CartData = ({ children }) => {
  return (
    <CartContext.Provider value={{ products }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartData;