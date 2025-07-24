import { useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { StoreContext } from "./StoreContext";
import { toast } from "react-toastify";

const StoreContextProvider = ({ children }) => {
  const currency = "$";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    const cartData = structuredClone(cartItems);

    if (!size) {
      toast.error("Please select a size for the item.");
      return;
    }
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        try {
          totalCount += cartItems[itemId][size];
        } catch (error) {
          console.error("Error calculating cart count:", error);
        }
      }
    }
    return totalCount;
  };

  const ContextValue = {
    currency,
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    getCartCount,
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
