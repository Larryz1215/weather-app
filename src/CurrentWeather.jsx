import React from "react";
import "./App.css";
function Detail({ weather }) {
  return (
    <div className="weather">
      {/* <div className="currentWeather">{weather?.current.iconCode}</div> */}
      <div className="left">
        <img
          src={`../icons/${weather?.current.iconCode}.svg`}
          className="iconLarge"
        ></img>
      </div>
      <div className="right">
        <div className="currentElement">
          <span>目前溫度</span>
          <div>
            {weather?.current.currentTemp}
            <span>&deg;</span>
          </div>
        </div>
        <div className="currentElement">
          <div>風速</div>
          <div>{weather?.current.windSpeed}</div>
        </div>
        <div className="currentElement">
          <div>最高溫度</div>
          <div>
            {weather?.current.highTemp}
            <span>&deg;</span>
          </div>
        </div>
        <div className="currentElement">
          <div>最低溫度</div>
          <div>
            {weather?.current.lowTemp}
            <span>&deg;</span>
          </div>
        </div>
        <div className="currentElement">
          <div>降雨機率</div>
          <div>{weather?.current.rain}</div>
        </div>      
      </div>
    </div>
  );
}

export default Detail;
