import { useState, useEffect } from "react";
import "./App.css";
import CurrentWeather from "../components/CurrentWeather";
import DailyWeather from "../components/DailyWeather";
import HourlyWeather from "../components/HourlyWeather";
import TopButton from "../components/TopButton";
import getWeatherData from "../components/FetchAPI";


function App() {
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState(25.05);
  const [lon, setLon] = useState(121.53);

  const fetchWeather = async () => {
    const data = await getWeatherData(lat, lon);
    console.log("data:", data);
    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
  }, [lat, lon]);

  return (
    <div className="app">
      <TopButton setLat={setLat} setLon={setLon} />
      <CurrentWeather weather={weather} />
      <DailyWeather weather={weather} />
      <HourlyWeather weather={weather} />
    </div>
  );
}

export default App;
