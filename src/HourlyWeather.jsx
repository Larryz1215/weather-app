import React from "react";
import moment from "moment/moment";
const HourlyWeather = ({ weather }) => {
  const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
  });
  return (
    <div className="hourlyWeather">
      <h1>HourlyWeather</h1>
      <div>
        {weather?.hourly.map((time, index) => (
          <div key={index} className="hourlyInfo">
            <div className="hourlyElement">
              <img
                src={`../icons/${time.iconCode}.svg`}
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
              <div>降雨機率</div>
              <span>{time.rain}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyWeather;
