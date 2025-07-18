import { products } from "../assets/frontend_assets/assets";
import { StoreContext } from "./StoreContext";

const StoreContextProvider = ({ children }) => {
  const currency = "$";
  const ContextValue = { currency, products };

  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
