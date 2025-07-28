import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(StoreContext);
  return (
    <div className="container__width">
      <div className="border-t border-gray-200 pt-5 sm:pt-14">
        <div className="border-b-2 border-gray-200 pb-8 mb-4">
          <Title text1={"my"} text2={"orders"} />
        </div>
        <div className="flex flex-col gap-6">
          {products.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm border-b border-gray-200 pb-8"
            >
              <div className="flex gap-2">
                <img src={item.image[0]} className="w-16" alt="" />
                <div className="flex flex-col justify-between">
                  <p className="font-semibold">{item.name}</p>
                  <div className="flex items-center gap-2">
                    <p>
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity: 1</p>
                    <p>Size: L</p>
                  </div>
                  <p>
                    Date: <span className="text-gray-400">25,May,2025</span>
                  </p>
                </div>
              </div>
              <div className="w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="h-3 w-3 bg-green-400 rounded-full"></p>
                  <p>Ready to ship</p>
                </div>
                <button className="px-4 py-1 border border-gray-300 cursor-pointer">
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
