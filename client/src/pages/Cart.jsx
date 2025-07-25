import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const Cart = () => {
  const { cartItems, products, currency, updateQuantity } =
    useContext(StoreContext);
  const [cartData, setCartData] = useState([]);

  // Logic to display cart items
  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="container__width border-t-2 border-gray-200 pt-10">
      <div>
        <Title text1={"your"} text2={"cart"} />
      </div>
      <div className="mt-6 ">
        {cartData.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              if (!productData) return null;
              console.log("Product Data:", productData);
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border-t border-gray-200"
                >
                  {/* Product Image + Details */}
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={productData.image[0]}
                      className="w-16 sm:w-20"
                      alt=""
                    />
                    <div className="flex flex-col">
                      <h3 className="text-sm sm:text-lg font-medium">
                        {productData.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <p>
                          {currency}
                          {productData.price}
                        </p>
                        <p className="px-2 sm:px-3 py-1 bg-slate-50">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quantity and Delete Button */}
                  <div className="flex items-center gap-4">
                    <input
                      onChange={(e) =>
                        e.target.value === "" || e.target.value === "0"
                          ? null
                          : updateQuantity(
                              item._id,
                              item.size,
                              parseInt(e.target.value)
                            )
                      }
                      type="number"
                      className="border border-gray-200 outline-none w-12 sm:w-16 px-2 py-1 text-center"
                      min={1}
                      defaultValue={item.quantity}
                    />
                    <img
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      src={assets.bin_icon}
                      className="w-4 cursor-pointer"
                      alt="Delete"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
