import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(StoreContext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller === true);
    setBestSeller(bestProduct);
  }, [products]);
  return (
    <section className="container__width my-10 sm:my-20">
      <div className="flex flex-col items-center gap-4">
        <Title text1={"Best"} text2={"Seller"} />
        <p className="text-gray-400 text-center sm:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. NostrumNeque
          magnam
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
        {bestSeller.slice(0, 5).map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSeller;
