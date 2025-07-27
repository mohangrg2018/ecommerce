import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, shippingFee, getCartAmount, navigate } =
    useContext(StoreContext);
  return (
    <section className="w-[400px]">
      <Title text1={"cart"} text2={"total"} />
      <div className="flex items-center justify-between mt-4">
        <p>Subtotal</p>
        <p>
          {currency}
          {getCartAmount()}
        </p>
      </div>
      <div className="flex items-center justify-between border-y border-gray-300 py-2 my-2">
        <p>Shipping Fee</p>
        <p>
          {currency}
          {shippingFee}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-semibold">Total</p>
        <p>
          {currency}
          {parseFloat(getCartAmount()) + shippingFee}
        </p>
      </div>
      <div className="w-full flex justify-end mt-6">
        <button
          onClick={() => navigate("/place-order")}
          className="px-6 py-2 bg-black text-white cursor-pointer hover:bg-gray-800 transition-colors duration-300"
        >
          proceed to checkout
        </button>
      </div>
    </section>
  );
};

export default CartTotal;
