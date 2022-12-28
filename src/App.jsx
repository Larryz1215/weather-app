import { useState, useEffect } from "react";
import "./App.css";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";
import TopButton from "./TopButton";

const getWeatherData = (lat, lon) => {
  return axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,rain,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum&current_weather=true&timezone=auto`
    )
    .then(({ data }) => {
      console.log("data:", data);
      return {
        current: currentWeather(data),
        daily: dailyWeather(data),
        hourly: hourlyWeather(data),
      };
    });
};

const currentWeather = ({ current_weather, daily }) => {
  const {
    temperature: currentTemp,
    windspeed: windSpeed,
    weathercode: iconCode,
  } = current_weather;
  const {
    temperature_2m_max: [maxTemp],
    temperature_2m_min: [minTemp],
    rain_sum: [rain],
  } = daily;
  return {
    iconCode,
    currentTemp: currentTemp,
    windSpeed: windSpeed,
    highTemp: Math.round(maxTemp),
    lowTemp: Math.round(minTemp),
    rain: rain,
  };
};

const dailyWeather = ({ daily }) => {
  return daily.time.map((time, index) => {
    return {
      timestamp: time,
      maxTemp: Math.round(daily.temperature_2m_max[index]),
      minTemp: Math.round(daily.temperature_2m_min[index]),
      rain: daily.rain_sum[index],
      weathercode: daily.weathercode[index],
    };
  });
};

const hourlyWeather = ({ hourly, current_weather }) => {
  return hourly.time
    .map((time, index) => {
      return {
        iconCode: hourly.weathercode[index],
        temp: Math.round(hourly.temperature_2m[index]),
        rain: hourly.rain[index],
        windspeed: hourly.windspeed_10m[index],
        time: hourly.time[index],
      };
    })
    .filter(({ time }) => time >= current_weather.time)
    .slice(0, 12);
};

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
