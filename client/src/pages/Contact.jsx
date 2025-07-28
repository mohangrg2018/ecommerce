import { assets } from "../assets/frontend_assets/assets";
import Newsletter from "../components/Newsletter";
import Title from "../components/Title";

const Contact = () => {
  return (
    <section className="container__width">
      <div className="border-t-2 border-gray-200 pt-5 sm:pt-14 flex flex-col items-center gap-14">
        <Title text1={"contact"} text2={"us"} />
        <div className="flex flex-col sm:flex-row gap-10 items-center">
          <img src={assets.contact_img} alt="" className="h-[500px]" />
          <div className="flex flex-col gap-6 w-full sm:w-1/2">
            <div className="flex flex-col gap-4">
              <b className="text-xl">Our Store</b>
              <div>
                <p className="text-gray-400 text-sm">54709 Willms Station</p>
                <p className="text-gray-400 text-sm">
                  Suite 350, Washington, USA
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Tel: (415) 555-0132</p>
                <p className="text-gray-400 text-sm">
                  Email: admin@forever.com
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <b>Careers at Forever</b>
              <p className="text-gray-400 text-sm">
                Learn more about our teams and job openings.
              </p>
              <button className="px-4 py-2 border w-fit">Explore Jobs</button>
            </div>
          </div>
        </div>
        <Newsletter />
      </div>
    </section>
  );
};

export default Contact;
