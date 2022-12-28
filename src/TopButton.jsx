import React from "react";

const TopButton = ({ setLon, setLat }) => {
  // const taipeiLocation = () => {
  //     setLat(25.05);
  //     setLon(121.53);
  //     fetchWeather();
  //   };
  //   const hsinchuLocation = () => {
  //     setLat(24.8);
  //     setLon(120.97);
  //     fetchWeather();
  //   };
  //   const taichungLocation = () => {
  //     setLat(24.15);
  //     setLon(120.68);
  //     fetchWeather();
  //   };
  //   const tainanLocation = () => {
  //     setLat(22.99);
  //     setLon(120.1);
  //     fetchWeather();
  //   };
  //   const kaohiungLocation = () => {
  //     setLat(22.62);
  //     setLon(120.31);
  //     fetchWeather();
  //   };

  const citys = [
    { id: 0, title: "Taipei", lat: 25.05, lon: 121.53 },
    { id: 1, title: "Hsinchu", lat: 24.8, lon: 120.97 },
    { id: 2, title: "Taichung", lat: 24.15, lon: 120.68 },
    { id: 3, title: "Kaohiung", lat: 22.62, lon: 120.31 },
    { id: 4, title: "Tainan", lat: 22.99, lon: 120.1 },
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
