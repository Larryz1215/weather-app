import React from "react";
import moment from "moment/moment";
import { ICON_MAP } from "../components/iconMap";
const HourlyWeather = ({ weather }) => {
  return (
    <div className="hourlyWeather">
      <h1>HourlyWeather</h1>
      <div>
        {weather?.hourly.map((time, index) => (
          <div key={index} className="hourlyInfo">
            <div className="hourlyElement">
              <img
                src={`../icons/${ICON_MAP.get(time.iconCode)}.svg`}
                className="smallIcon"
              ></img>
            </div>
            <div className="hourlyText">
              <div>{moment(time.time).format("dddd")}</div>
              <span>{moment(time.time).format("LT")}</span>
            </div>
            <div className="hourlyText">
              <div>溫度</div>
              <span>
                {time.temp}
                <span>&deg;</span>
              </span>
            </div>
            <div className="hourlyText">
              <div>風速</div>
              <span>{time.windspeed}</span>
            </div>
            <div className="hourlyText">
              <div>濕度</div>
              <span>{time.humidity}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyWeather;
