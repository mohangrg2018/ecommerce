import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(StoreContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <div className="border-t border-b border-gray-200 bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          className="flex-1 outline-none bg-inherit text-sm"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search Products..."
        />
        <img src={assets.search_icon} className="w-4" alt="search icon" />
      </div>
      <img
        src={assets.cross_icon}
        onClick={() => setShowSearch(false)}
        alt="cross icon"
        className="w-4 cursor-pointer inline-flex"
      />
    </div>
  ) : null;
};

export default SearchBar;
