import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(StoreContext);
  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      to={`/product/${id}`}
      className="w-full flex flex-col gap-3"
    >
      {/* Image Wrapper */}
      <div className="overflow-hidden">
        <img
          src={image[0]}
          className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
          alt="image"
        />
      </div>

      <div>
        <p className="text-sm">{name}</p>
        <p className="text-sm">
          <span className="mr-1">{currency}</span>
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
