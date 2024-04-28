import React from "react";
import {FaArrowLeft} from "react-icons/fa6";
import {TbRectangleFilled} from "react-icons/tb";
import {Link} from "react-router-dom/dist";
import {IoFilter} from "react-icons/io5";
import SectionTab from "./SectionTab";

const Sidebar = ({stockTab, setStackId, stackId}) => {
  // console.log(stockTab);
  // const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setStackId(index);
  };

  return (
    <div className="w-[50rem] ">
      <div className=" bg-slate-800 text-white py-8 shadow-[inset_-2px_6px_18px_rgba(0,0,0,0.4)]  h-svh">
        <Link to={"/"}>
          <FaArrowLeft className=" cursor-pointer ml-[10%]" />
        </Link>
        <div className="flex space-x-4 my-4 pl-[10%] text-cyan-400 ">
          <TbRectangleFilled className="text-xl opacity-40" />
          <TbRectangleFilled className="text-xl scale-110" />
          <TbRectangleFilled className="text-xl opacity-40" />
          <TbRectangleFilled className="text-xl opacity-40" />
          <TbRectangleFilled className="text-xl opacity-40" />
        </div>
        <div className="pl-[10%]">
          <p className="text-xl">Sample Stack</p>
        </div>
        <div className="relative flex pl-[10%] pb-2 text-sm font-bold mt-8 ">
          <p className="z-2 border-b-2 border-cyan-400 text-cyan-400 p-2">
            BACKLOG{" "}
            <span className="text-xs font-normal text-white">{`(${stockTab.length})`}</span>
          </p>
          <p className="z-2 border-b p-2 border-gray-500">
            PENDING <span className="text-xs font-normal">{"(0)"}</span>
          </p>
          <p className="z-2 border-b p-2 border-gray-500">
            FINAL SIGN-OFF <span className="text-xs font-normal">{"(0)"}</span>
          </p>
        </div>
        <div className="pl-[10%] mt-4 font-semibold flex space-x-4 items-center text-cyan-400">
          <p>Filter</p>
          <IoFilter />
        </div>
        <div className=" mt-4">
          {stockTab.map((e, i) => {
            return (
              <SectionTab
                key={i}
                isActive={i === stackId}
                onClick={() => handleClick(i)}
                stockTab={stockTab}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
