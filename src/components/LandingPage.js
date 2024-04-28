import React, {useState} from "react";
import {cityArray} from "../utils/mockData";
import CityCard from "./CityCards";
import MapWithPin from "./MapWithPin";
import {Link} from "react-router-dom/dist";
// import {useParams} from "react-router-dom/dist";

const LandingPage = () => {
  const [highlightedCity, setHighlightedCity] = useState(null);

  const handleOnHover = (id) => {
    // console.log(id);
    setHighlightedCity(id);
  };
  //   console.log(cityArray);
  return (
    <div className=" relative w-full">
      <MapWithPin
        center={{lat: 28.679079, lng: 77.06971}}
        zoom={4}
        cityArray={cityArray}
        id={highlightedCity}
      />
      <div className="absolute top-11 w-full">
        <div className=" z-10">
          <div>
            <p className="text-3xl font-bold text-white opacity-50 flex m-8">
              Hello User,
            </p>
          </div>
          <div className="flex items-center gap-4 m-4 overflow-x-scroll p-4 scrollbar-hide ">
            {cityArray.map((e) => {
              return (
                <Link key={e.id} to={"/city/" + e.id}>
                  <CityCard cityData={e} handleOnHover={handleOnHover} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
