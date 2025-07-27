import Title from "../components/Title";

const PlaceOrder = () => {
  return (
    <div className="container__width">
      <div className="border-t-2 border-gray-200 pt-5 sm:pt-14">
        {/* LEFT SIDE */}
        <div className="w-full sm:w-1/2">
          <Title text1={"delivery"} text2={"information"} />
          <div className=""></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full sm:w-1/2"></div>
      </div>
    </div>
  );
};

export default PlaceOrder;
