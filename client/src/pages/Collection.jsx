import { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
const Collection = () => {
  const { products } = useContext(StoreContext);
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="container__width border-t border-gray-200 pt-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT SIDE */}
        <aside className="min-w-60">
          <p className="uppercase font-medium text-gray-500 text-xl md:text-2xl flex items-center gap-2 pt-2">
            filters
            <img
              onClick={() => setShowFilters(!showFilters)}
              src={assets.dropdown_icon}
              className={`h-3 md:hidden ${
                showFilters ? "rotate-90" : ""
              } cursor-pointer`}
              alt="down arrow"
            />
          </p>
          {/* CATEGORY FILTER */}
          <div
            className={`border border-gray-200 py-3 pl-3 mt-4 ${
              showFilters ? "" : "hidden"
            } md:block`}
          >
            <p>CATEGORIES</p>
            <div className="text-gray-500 mt-2">
              <label className="flex gap-2 mb-2">
                <input type="checkbox" className="w-4" value={"Men"} />
                Men
              </label>
              <label className="flex gap-2 mb-2">
                <input type="checkbox" className="w-4" value={"Women"} />
                Women
              </label>
              <label className="flex gap-2">
                <input type="checkbox" className="w-4" value={"Kids"} />
                Kids
              </label>
            </div>
          </div>
          {/* SUBCATEGORY FILTER */}
          <div
            className={`border border-gray-200 py-3 pl-3 mt-4 ${
              showFilters ? "" : "hidden"
            } md:block`}
          >
            <p>TYPE</p>
            <div className="text-gray-500 mt-2">
              <label className="flex gap-2 mb-2">
                <input type="checkbox" className="w-4" value={"Topwear"} />
                Topwear
              </label>
              <label className="flex gap-2 mb-2">
                <input type="checkbox" className="w-4" value={"Bottomwear"} />
                Bottomwear
              </label>
              <label className="flex gap-2">
                <input type="checkbox" className="w-4" value={"Winterwear"} />
                Winterwear
              </label>
            </div>
          </div>
        </aside>
        {/* RIGHT SIDE */}
        <section className="flex-1">
          <div className="flex justify-between">
            <Title text1={"All"} text2={"Collections"} />
            <select className="border border-gray-300 pl-3 py-2 outline-none text-sm">
              <option value="relavant">Sort by: Relavant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {products.map((item, index) => (
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
      </div>
    </div>
  );
};

export default Collection;
