import React from "react";
import GoogleMapReact from "google-map-react";
import {FaLocationDot} from "react-icons/fa6";

const MapWithPin = ({center, zoom, cityArray, id}) => {
  // Coordinates for the pinned location

  return (
    <div className="h-svh overflow-hidden">
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyCLVCKotce_N2rwc2nwg3coknokdXoTxRs"}} // Replace 'YOUR_API_KEY' with your actual API key
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/* Marker for the pinned location */}

        {cityArray.map((e) => {
          return (
            <Marker
              lat={e.lat}
              lng={e.lon}
              text={
                <FaLocationDot
                  className={` ${
                    e.id === id
                      ? "text-4xl font-extrabold text-red-700"
                      : "text-3xl font-bold"
                  } text-black`}
                />
              }
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

// Marker component to display a pin on the map
const Marker = ({text}) => <div className="marker">{text}</div>;

// Default center and zoom level for the map

export default MapWithPin;
