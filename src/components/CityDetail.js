import React, {useState} from "react";
import {useParams} from "react-router-dom/dist";
import {CityDetailsData} from "../utils/mockData";
import Sidebar from "./Sidebar";
import SidebarMini from "./SidebarMini";
import MainContainer from "./MainContainer";

const CityDetail = () => {
  const [stackId, setStackId] = useState(0);
  const {keyId} = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const citySpecificData = CityDetailsData[keyId];

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const {forecastPercentage, stockTab} = citySpecificData;

  return (
    <div className="flex">
      {isSidebarOpen ? (
        <Sidebar
          stockTab={stockTab}
          setStackId={setStackId}
          stackId={stackId}
        />
      ) : (
        <SidebarMini />
      )}
      <MainContainer
        handleClick={handleClick}
        isSidebarOpen={isSidebarOpen}
        stackId={stackId}
        stockTab={stockTab}
      />
    </div>
  );
};

export default CityDetail;
