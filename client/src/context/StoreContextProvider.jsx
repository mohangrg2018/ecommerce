import { StoreContext } from "./StoreContext";

const StoreContextProvider = ({ children }) => {
  const currency = "$";
  const ContextValue = { currency };

  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
