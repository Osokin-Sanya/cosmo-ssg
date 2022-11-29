import React from "react";
import { NOOP } from "@utils/index";

const defaultValue = {
  products: [],
  setProducts: NOOP,
};

const AppContext = React.createContext(defaultValue);

export function AppProvider({ children }) {
  const [products, setProducts] = React.useState([]);

  const provideValue = {
    products,
    setProducts: products.length > 0 ? NOOP : setProducts,
  };

  return (
    <AppContext.Provider value={provideValue}>{children}</AppContext.Provider>
  );
}

export default function useStore() {
  return React.useContext(AppContext);
}
