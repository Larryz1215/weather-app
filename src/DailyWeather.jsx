import React from "react";
import moment from "moment/moment";
const DailyWeather = ({ weather }) => {
  return (
    <div className="daily">
      {/* <p> {weather?.daily[0].maxTemp}</p> */}
      {weather?.daily.map((item, index) => (
        <div key={index} className="dailyElement">
          <h3>{moment(item.timestamp).format("dddd")}</h3>
          <div className="dailyInfo">
            <img
              src={`../icons/${item.weathercode}.svg`}
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
