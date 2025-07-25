import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(StoreContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  return productData ? (
    <div className="container__width">
      {/* PRODUCT INFO */}
      <div className="flex flex-col sm:flex-row gap-12 border-t border-gray-300 pt-10">
        {/* LEFT SIDE */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ${
                  image === item ? "border-2 border-black" : ""
                }`}
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="h-auto w-full" alt="" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full sm:w-1/2 flex flex-col gap-4 sm:gap-6">
          <h1 className="text-2xl font-semibold">{productData.name}</h1>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={assets.star_icon}
                  alt=""
                  className="inline-block w-4 h-4"
                />
              ))}
            </div>
            <p>(122)</p>
          </div>
          <p className="text-2xl font-semibold">
            {currency}
            {productData.price}
          </p>
          <p className="text-sm text-gray-500">{productData.description}</p>

          {/* SELECT SIZE */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-gray-500">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border border-gray-300 px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                    item === size ? "border-orange-400" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* ADD TO CART BUTTON */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className="uppercase w-fit px-8 py-3 bg-black text-white cursor-pointer text-sm hover:bg-black/80 transition-all duration-300"
          >
            Add to cart
          </button>
          <div className="border-t border-gray-300 pt-6 flex flex-col gap-1">
            <p className="text-sm text-gray-500">100% Original product.</p>
            <p className="text-sm text-gray-500">
              Cash on delivery is available on this product.
            </p>
            <p className="text-sm text-gray-500">
              Easy return and exchange policy within 7 days.
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCT DESCRIPTION */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-200 px-5 py-3 text-sm">
            Description
          </b>
          <p className="border border-gray-200 px-5 py-3 text-sm">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col border border-gray-200 gap-4 p-6 text-gray-500 text-sm">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div>
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </div>
  ) : (
    <div>
      <h1>No Product Found</h1>
      <p>The product you're trying to find is not available</p>
    </div>
  );
};

export default Product;
