import React from "react";
import moment from "moment/moment";
import { ICON_MAP } from "../components/iconMap";
const DailyWeather = ({ weather }) => {
  return (
    <div className="daily">
      {weather?.daily.map((item, index) => (
        <div key={index} className="dailyElement">
          <h3>{moment(item.timestamp).format("dddd")}</h3>
          <div className="dailyInfo">
            <img
              src={`../icons/${ICON_MAP.get(item.weathercode)}.svg`}
              className="smallIcon"
            ></img>
            <span>
              <p>
                {item.maxTemp}
                <span>&deg;</span>
              </p>
              <p>
                {item.minTemp}
                <span>&deg;</span>
              </p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyWeather;
