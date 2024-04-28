import React from "react";

const CityCard = ({cityData, handleOnHover}) => {
  //   console.log(cityData);
  const {name, forecastNumber, forecastPercentage, id} = cityData;
  return (
    <div
      onMouseEnter={() => handleOnHover(id)}
      className="cursor-pointer min-w-[300px] bg-gray-300 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg shadow-xl p-6 hover:scale-95 transition-all hover:shadow-lg hover:backdrop-blur-md"
    >
      <div className="relative text-black ">
        <h3 className="text-xl font-base  text-left mb-5">{name}</h3>
        <div className="my-2">
          <p className=" text-left text-sm">forecast</p>
          <p className=" text-left font-bold">{forecastNumber[0] + "M"}</p>
        </div>
        <div>
          <p className=" text-left text-sm">forecast</p>
          <p className=" text-left font-bold">{forecastPercentage[0] + "%"}</p>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
