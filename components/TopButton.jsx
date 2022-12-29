import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const TopButton = ({ setLon, setLat }) => {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {       
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    }
  };

  const citys = [
    { id: 0, title: "Taipei", lat: 25.05, lon: 121.53 },
    { id: 1, title: "Hsinchu", lat: 24.8, lon: 120.97 },
    { id: 2, title: "Taichung", lat: 24.15, lon: 120.68 },
    { id: 3, title: "Tainan", lat: 22.99, lon: 120.1 },
    { id: 4, title: "Kaohiung", lat: 22.62, lon: 120.31 },
  ];

  return (
    <div className="area">
      {citys.map((city) => (
        <span
          key={city.id}
          onClick={() => {
            setLon(city.lon);
            setLat(city.lat);
          }}
        >
          {city.title}
        </span>
      ))}
      <FontAwesomeIcon
        icon={faLocationDot}
        onClick={getLocation}
        color="white"
        cursor="pointer"
        fontSize="1.5rem"
      />
    </div>
  );
};

export default TopButton;
