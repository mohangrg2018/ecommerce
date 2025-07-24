import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { products, currency, cartItems } = useContext(StoreContext);
  return <div>Cart</div>;
};

export default Cart;
