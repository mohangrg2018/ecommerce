import { products } from "../assets/frontend_assets/assets";
import ProductItem from "./ProductItem";
import Title from "./Title";

const LatestCollection = () => {
  console.log(products);
  return (
    <section className="container__width my-10 sm:my-20">
      <div className="flex flex-col items-center gap-4">
        <Title text1={"Latest"} text2={"Collections"} />
        <p className="text-gray-400 text-center sm:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. NostrumNeque
          magnam
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
        {products.slice(0, 10).map((item, index) => (
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

export default LatestCollection;
