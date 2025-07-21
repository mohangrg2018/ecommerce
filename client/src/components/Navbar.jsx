import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
const Navbar = () => {
  const { setShowSearch } = useContext(StoreContext);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="py-4">
      <div className="container__width flex items-center justify-between">
        <Link to="/">
          <img src={assets.logo} className="w-32" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 lg:gap-24">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/collection">Collection</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-4 cursor-pointer"
            alt="search icon"
          />
          <div className="group relative rounded-sm">
            <img
              src={assets.profile_icon}
              className="w-4 cursor-pointer"
              alt="profile icon"
            />
            <div className="group-hover:block hidden absolute right-0 pt-3 bg-white">
              <div className="flex flex-col gap-2 text-sm border px-4 py-2 rounded-sm border-gray-200 text-gray-500 w-[150px]">
                <NavLink to="/my-profile" className="hover:font-semibold">
                  My Profile
                </NavLink>
                <NavLink to="/orders" className="hover:font-semibold">
                  Orders
                </NavLink>
                <NavLink to="/logout" className="hover:font-semibold">
                  Logout
                </NavLink>
              </div>
            </div>
          </div>

          <img
            src={assets.cart_icon}
            className="w-4 cursor-pointer"
            alt="cart icon"
          />
          <img
            onClick={() => setOpenMenu(!openMenu)}
            src={assets.menu_icon}
            className="w-4 md:hidden cursor-pointer"
            alt="burger icon"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
          <p
            onClick={() => setOpenMenu(false)}
            className="absolute top-4 right-4 text-2xl cursor-pointer"
          >
            x
          </p>
          <ul className="flex flex-col items-center gap-4">
            <li onClick={() => setOpenMenu(false)}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={() => setOpenMenu(false)}>
              <NavLink to="/collection">Collection</NavLink>
            </li>
            <li onClick={() => setOpenMenu(false)}>
              <NavLink to="/about">About</NavLink>
            </li>
            <li onClick={() => setOpenMenu(false)}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
