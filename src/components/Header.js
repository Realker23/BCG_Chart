import React from "react";
import {RxHamburgerMenu} from "react-icons/rx";
import {SlGlobe} from "react-icons/sl";
import {FaUser} from "react-icons/fa";
import {Link} from "react-router-dom/dist";

const Header = () => {
  return (
    <header className="bg-slate-950 text-white py-3 px-6 flex justify-between items-center ">
      <Link to={"/"}>
        <div className="flex items-center space-x-4 ">
          <RxHamburgerMenu className="cursor-pointer" />
          <h1 className="text-base font-semibold  cursor-pointer">Webapp</h1>
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <SlGlobe className="cursor-pointer" />
        <button className=" cursor-pointer flex  items-center space-x-4 bg-white text-black py-1 px-4 rounded-full font-semibold">
          <FaUser /> <p>Login</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
