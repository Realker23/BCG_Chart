import React from "react";
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";
import {TiWarningOutline} from "react-icons/ti";
import {CiFlag1} from "react-icons/ci";
import {RiAttachmentFill} from "react-icons/ri";
import {BsToggle2Off} from "react-icons/bs";
import {BiToggleLeft} from "react-icons/bi";
import {IoMdArrowDropdown, IoIosInformationCircleOutline} from "react-icons/io";
import LineChartForecast from "./LineChartForecast";
import LineChartHistorical from "./LineChartHistorical";
// import {Line} from "react-chartjs-2";

const MainContainer = ({handleClick, isSidebarOpen, stackId, stockTab}) => {
  const currentStock = stockTab.find((e) => e.stackId === stackId);

  const {historicalData, forecastPercentage, forecastData} = currentStock;

  return (
    <div className="w-full bg-slate-800 h-svh">
      <div className="w-full">
        <div className="w-full flex space-x-4 items-center text-white text-lg border-b-4 border-slate-950">
          <div onClick={() => handleClick()}>
            {isSidebarOpen ? (
              <FaAngleDoubleLeft className="bg-cyan-300 text-black cursor-pointer" />
            ) : (
              <FaAngleDoubleRight className="bg-cyan-300 text-black cursor-pointer" />
            )}
          </div>
          <div className="p-5 flex items-center ">
            <div className="flex space-x-4 items-center pr-28 border-r border-gray-400">
              <TiWarningOutline className="text-yellow-300 text-2xl" />{" "}
              <span className="font-bold ">Sample Stack</span>
            </div>
            <div className=" px-8 text-sm  mr-8">
              <p>Stack Id: {!stackId ? "0123" : stackId} </p>
            </div>
            <div className="flex  py-1 px-4 bg-slate-700 rounded-lg text-base">
              <div className="pr-20">
                <p>FORECAST</p>
                <p>{forecastPercentage} %</p>
              </div>
              <div className="pr-16">
                <p>FORECAST</p>
                <p>{forecastPercentage} %</p>
              </div>
            </div>
            <div className="mx-10">
              <CiFlag1 />
            </div>
          </div>
        </div>
        <div className="flex space-x-1 items-center text-white border-b-4  border-slate-950">
          <RiAttachmentFill className="ml-12 my-3 text-3xl" />
          <div className="mr-8 text-sm">SPECIAL REQUIREMENTS</div>
          <BsToggle2Off className="text-3xl" />
          <div className="text-sm">INCLUDE</div>
        </div>
        <div className="flex items-center py-5 px-10 text-sm text-white bg-slate-950">
          <p className="mr-6">Forecast Horizon</p>
          <p className="mr-6">Latest Issues</p>
          <p className="mr-6 text-white">
            <IoMdArrowDropdown />
          </p>
          <p className="mr-6 pr-6 text-cyan-400 text-lg border-r border-gray-400">
            <IoIosInformationCircleOutline />
          </p>
          <p className="mr-6 text-white">
            <BiToggleLeft className="text-2xl" />
          </p>
          <p className="mr-6">SHOW CONFIDENTIAL INFORMATION</p>
        </div>
        <div className="w-full pt-8  bg-slate-950 flex h-[500px] md:flex-col  md:pl-28 md:h-[550px] lg:pl-2 lg:h-[500px] lg:flex-row">
          <div className="w-[48%] md:h-[500px] md:mx-auto">
            <LineChartHistorical
              aiForecast={historicalData.aiForecast}
              finalForecast={historicalData.finalForecast}
              consumption={historicalData.consumption}
            />
          </div>

          <div className="w-[48%] md:h-[500px] md:mx-auto">
            <LineChartForecast
              aiForecast={forecastData.aiForecast}
              finalForecast={forecastData.finalForecast}
              previousQuaterFinalForecast={
                forecastData.previousQuaterFinalForecast
              }
            />
          </div>

          {/* <Line data={chartData} /> */}
        </div>
        <div className="data1 mx-8 my-4 flex justify-between text-white items-center border-b border-gray-700">
          <div className="">AI Forecast</div>
          <div className="flex ">
            {forecastData.aiForecast.map((e, i) => {
              return (
                <p className="ml-[5.2rem]" key={i}>
                  {e}
                </p>
              );
            })}
          </div>
        </div>
        <div className="data2 mx-8 my-4 flex justify-between text-white items-center border-b border-gray-700">
          <div className="">Previous Quarter Final Forecast</div>
          <div className="flex ">
            {forecastData.previousQuaterFinalForecast.map((e, i) => {
              return (
                <p className="ml-[5.2rem]" key={i}>
                  {e}
                </p>
              );
            })}
          </div>
        </div>
        <div className="data3 mx-8 my-4 flex justify-between text-white items-center border-b border-gray-700">
          <div className="">Final Forecast</div>
          <div className="flex ">
            {forecastData.finalForecast.map((e, i) => {
              return (
                <p className="ml-[5.2rem]" key={i}>
                  {e}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
