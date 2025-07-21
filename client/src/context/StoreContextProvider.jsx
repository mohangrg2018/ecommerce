import { useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { StoreContext } from "./StoreContext";

const StoreContextProvider = ({ children }) => {
  const currency = "$";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const ContextValue = {
    currency,
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
