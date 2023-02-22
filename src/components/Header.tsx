import Link from "next/link";
import Slogo from "./S_Logo";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

const Header = () => {
  return (
    <div className=" z-10 hidden justify-between py-4 px-8 text-white lg:flex">
      <div className="w-1/3">
        <Slogo />
      </div>
      <div className="flex w-1/3 justify-between font-playfair text-lg">
        <Link
          href="/"
          className="text-gray-400 underline decoration-indigo-500 decoration-2  underline-offset-8"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="text-gray-400 underline decoration-indigo-500 decoration-2  underline-offset-8"
        >
          Contact
        </Link>
        <Link
          href="/services"
          className="z-10 text-gray-400 underline decoration-indigo-500  decoration-2 underline-offset-8"
        >
          Services
        </Link>
      </div>
      <div className="z-10 flex w-1/3 justify-end space-x-10">
        <Link
          href="https://twitter.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiFillTwitterCircle className="text-3xl text-gray-400" />
        </Link>
        <Link
          href="https://www.facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiFillFacebook className="text-3xl text-gray-400" />
        </Link>
        <Link
          href="https://www.instagram.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AiFillInstagram className="text-3xl text-gray-400" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
