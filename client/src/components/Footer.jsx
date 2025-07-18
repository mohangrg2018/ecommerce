import { Link } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="container__width mt-10 sm:mt-30">
      <div className="flex flex-col md:flex-row justify-between gap-24 py-16">
        <div className="flex flex-col gap-6 w-[40%]">
          <Link to="/">
            <img src={assets.logo} className="w-32" alt="logo" />
          </Link>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            ipsam nam, nisi exercitationem iste assumenda placeat sit tenetur
            culpa unde similique possimus fugiat cupiditate molestias minima
            accusantium veritatis facere reprehenderit!
          </p>
        </div>
        <div className="flex flex-col gap-2 w-[30%]">
          <p className="font-semibold text-sl uppercase">Company</p>
          <ul className="text-gray-500 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 w-[30%]">
          <p className="font-semibold text-sl uppercase">get in touch</p>
          <ul className="text-gray-500 text-sm">
            <li>+1 234 567 890</li>
            <li>8Dx7s@example.com</li>
          </ul>
        </div>
      </div>
      <div className="py-4 border-t border-gray-200">
        <p className="text-center text-gray-400 text-sm">
          Copyright &copy; 2025 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
