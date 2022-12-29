import React from "react";
import App from "../src/App";
import { ICON_MAP } from "./iconMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Detail({ weather }) {
  return (
    <div className="currentWeather">
      {/* <div className="currentWeather">{weather?.current.iconCode}</div> */}
      <div className="left">
        <img
          src={`../icons/${ICON_MAP.get(weather?.current.iconCode)}.svg`}
          className="iconLarge"
        ></img>
      </div>
      <div className="right">
        <div className="currentTemp">
          {/* <span>目前溫度</span> */}
          <div>
            {weather?.current.currentTemp}
            <span>&deg;</span>
          </div>
          <span>
            <span>
              <FontAwesomeIcon icon={faArrowUp} />
              <span>{weather?.current.highTemp}</span>
              <span>&deg;</span>
            </span>

            <span>
              <FontAwesomeIcon icon={faArrowDown} />
              <span>{weather?.current.lowTemp}</span>
              <span>&deg;</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Detail;
