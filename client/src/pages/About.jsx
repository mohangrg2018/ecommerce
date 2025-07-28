import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets.js";
import Newsletter from "../components/Newsletter.jsx";

const About = () => {
  return (
    <section className="container__width">
      {/* ABOUT COMPANY */}
      <div className="border-t-2 border-gray-200 pt-5 sm:pt-10 flex justify-center">
        <Title text1={"about"} text2={"us"} />
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16 mt-5 sm:mt-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full sm:w-1/2 h-[500px]"
        />

        <div className="flex flex-col gap-10 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <div>
            <p className="font-semibold">Our Mission</p>
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="my-10 sm:my-20">
        <Title text1={"why"} text2="choose us" />
        <div className="border border-gray-200 grid grid-cols-1 sm:grid-cols-3 mt-10">
          <div className="px-10 py-15 sm:px-15 flex flex-col gap-4 sm:py-25 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-200">
            <p className="font-semibold">Quality Assurance:</p>
            <p>
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
            <p></p>
          </div>
          <div className="px-10 py-15 sm:px-15 flex flex-col gap-4 sm:py-25 border-b-2 sm:border-b-0 sm:border-r-2 border-gray-200">
            <p className="font-semibold">Convenience:</p>
            <p>
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className="px-10 py-15 sm:px-15 flex flex-col gap-4 sm:py-25">
            <p className="font-semibold">Exceptional Customer Service:</p>
            <p>
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter />
    </section>
  );
};

export default About;
