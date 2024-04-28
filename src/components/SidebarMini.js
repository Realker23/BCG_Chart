import React from "react";
import {FaArrowLeft} from "react-icons/fa6";
import {Link} from "react-router-dom/dist";

const SidebarMini = () => {
  return (
    <div className="w-[5%] bg-slate-800 text-white py-8 shadow-[inset_-2px_6px_18px_rgba(0,0,0,0.4)] h-svh">
      <Link to={"/"}>
        <FaArrowLeft className="mx-auto cursor-pointer" />
      </Link>
    </div>
  );
};

export default SidebarMini;
