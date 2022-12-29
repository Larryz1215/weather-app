import axios from "axios";
const getWeatherData = (lat, lon) => {
  return axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum&current_weather=true&timezone=auto`
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
  } = daily;
  return {
    iconCode,
    currentTemp: currentTemp,
    windSpeed: windSpeed,
    highTemp: Math.round(maxTemp),
    lowTemp: Math.round(minTemp),
  };
};

const dailyWeather = ({ daily }) => {
  return daily.time.map((time, index) => {
    return {
      timestamp: time,
      maxTemp: Math.round(daily.temperature_2m_max[index]),
      minTemp: Math.round(daily.temperature_2m_min[index]),
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
        windspeed: hourly.windspeed_10m[index],
        time: hourly.time[index],
        humidity: hourly.relativehumidity_2m[index],
      };
    })
    .filter(({ time }) => time >= current_weather.time)
    .slice(0, 12);
};

export default getWeatherData;
