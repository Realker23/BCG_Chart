import React from "react";
import {FaRegSquare} from "react-icons/fa";
import {IoMailUnreadOutline} from "react-icons/io5";

const SectionTab = ({isActive, onClick, stockTab}) => {
  // console.log(isActive, onClick);
  return (
    <div
      className={`h-18 border-b border-gray-300 m-4 cursor-pointer shadow-2xl pl-[10%] pt-2 ${
        isActive ? "bg-slate-500 border border-cyan-300" : "null"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-2 text-sm  justify-between">
        <div className="flex items-center space-x-2">
          <FaRegSquare className="text-lg mr-1" />
          <button className="bg-gray-300 rounded-sm px-2 text-black font-semibold py-[2px]">
            ⬇ F'CAST STAB.
          </button>
          <button className="bg-gray-300 rounded-sm px-2 text-black font-semibold py-[2px]">
            ⬆ F'CAST ACC.
          </button>
        </div>
        <div className="pr-4">
          <IoMailUnreadOutline className="text-cyan-400 " />
        </div>
      </div>
      <p className="m-2">Sample Stack</p>
    </div>
  );
};

export default SectionTab;
