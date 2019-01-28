import React, { Component } from "react";
import SingleWeather from "./SingleWeather";
import { Spring } from "react-spring";
import "../styles/Forecast.css";

class Forecast extends Component {
  state = {};
  render() {
    return (
      <div className="forecast">
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => (
            <div style={props}>
              {this.props.weather.forecast.forecastday.map((weather, i) => (
                <SingleWeather
                  weather={weather}
                  key={i}
                  temp={this.props.temp}
                />
              ))}
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default Forecast;
