import { createContext, useContext } from "react";
import { Cart } from "./cart";

export const rootStore = {
  cart: new Cart()
};

const Store = createContext({
  root: {}
});

export const useStore = () => {
  return useContext(Store).root;
};

export const Provider = Store.Provider;
