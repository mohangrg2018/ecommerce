import Link from "next/link";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-5">
        <Link href="/">
          <img
            src="./Daraz_Logo.png"
            alt="daraz logo"
            className="w-[100px] h-[50px] object-contain"
          />
        </Link>
        <nav className="flex items-center gap-5">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
      <div className="flex items-center gap-5">
        <button>Login</button>
        <AiOutlineSearch />
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
};

export default Header;
