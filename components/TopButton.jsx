import React from "react";

const TopButton = ({ setLon, setLat }) => {
 
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
    </div>
  );
};

export default TopButton;
