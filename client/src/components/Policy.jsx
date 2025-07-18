import { assets } from "../assets/frontend_assets/assets";
const Policy = () => {
  return (
    <section className="container__width flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-26 my-20 sm:my-30">
      <div className="flex flex-col items-center gap-2">
        <img src={assets.exchange_icon} className="w-8" alt="exchange icon" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-sm text-gray-400 text-center">
          We offer hassle free exchange policy
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={assets.quality_icon} className="w-8" alt="exchange icon" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-sm text-gray-400 text-center">
          We provide 7 days free return policy
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={assets.support_img} className="w-8" alt="exchange icon" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-sm text-gray-400 text-center">
          We provide 24/7 customer support
        </p>
      </div>
    </section>
  );
};

export default Policy;
