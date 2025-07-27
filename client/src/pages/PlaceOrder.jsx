import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { navigate } = useContext(StoreContext);
  const [method, setMethod] = useState("cod");

  return (
    <div className="container__width px-4 md:px-8 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 border-t border-gray-200 pt-6 lg:pt-12">
        {/* LEFT SIDE: Delivery Info */}
        <div className="w-full lg:w-1/2">
          <Title text1="Delivery" text2="Information" />
          <form className="flex flex-col gap-4 mt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full sm:w-1/2 border border-gray-300 px-3 py-2"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full sm:w-1/2 border border-gray-300 px-3 py-2"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 px-3 py-2"
            />
            <input
              type="text"
              placeholder="Street"
              className="w-full border border-gray-300 px-3 py-2"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="City"
                className="w-full sm:w-1/2 border border-gray-300 px-3 py-2"
              />
              <input
                type="text"
                placeholder="State"
                className="w-full sm:w-1/2 border border-gray-300 px-3 py-2"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Zip code"
                className="w-full sm:w-1/2 border border-gray-300 px-3 py-2"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full sm:w-1/2 border border-gray-300 px-3 py-2"
              />
            </div>
            <input
              type="text"
              placeholder="Phone"
              className="w-full border border-gray-300 px-3 py-2"
            />
          </form>
        </div>

        {/* RIGHT SIDE: Cart + Payment */}
        <div className="w-full lg:w-1/2">
          <Title text1="Cart" text2="Totals" />
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between border-b pb-2 border-gray-200">
              <span>Subtotal</span>
              <span>$60.00</span>
            </div>
            <div className="flex justify-between border-b pb-2 border-gray-200">
              <span>Shipping Fee</span>
              <span>$10</span>
            </div>
            <div className="flex justify-between font-semibold text-base mb-8 sm:mb-12">
              <span>Total</span>
              <span>$70.00</span>
            </div>
          </div>

          <Title text1="Payment" text2="Method" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-4">
            <label
              onClick={() => setMethod("stripe")}
              className={`flex items-center gap-2 border px-4 lg:px-6 py-2 cursor-pointer w-full md:w-auto ${
                method === "stripe" ? "ring-2 ring-green-500" : ""
              }`}
            >
              <input
                type="radio"
                name="payment"
                checked={method === "stripe"}
                readOnly
              />
              <img src={assets.stripe_logo} className="h-5" alt="Stripe" />
            </label>

            <label
              onClick={() => setMethod("razor")}
              className={`flex items-center gap-2 border px-4 lg:px-6 py-2 cursor-pointer w-full md:w-auto ${
                method === "razor" ? "ring-2 ring-green-500" : ""
              }`}
            >
              <input
                type="radio"
                name="payment"
                checked={method === "razor"}
                readOnly
              />
              <img src={assets.razorpay_logo} className="h-5" alt="Razorpay" />
            </label>

            <label
              onClick={() => setMethod("cod")}
              className="flex items-center gap-2 border px-4 lg:px-6 py-2 w-full md:w-auto"
            >
              <input type="radio" name="payment" />
              <span>Cash on Delivery</span>
            </label>
          </div>

          <div className="flex justify-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="w-full sm:w-auto mt-4 px-6 py-2 bg-black text-white font-semibold hover:bg-gray-800 cursor-pointer"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
