import React, { Component } from "react";
import "../styles/weather.css";
import { Spring } from "react-spring";

class Weather extends Component {
  render() {
    const { location, current } = this.props.weather;
    return (
      <React.Fragment>
        <div className="container mt-2">
          <div className="row">
            <div className="col-md">
              {this.props.status ? (
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 weatherBox">
                      <div className="weatherBox-bg">
                        <div className="currentTemp">
                          <h2 id="cityName">{location.name}</h2>
                          <h4 id="countryName">{location.country}</h4>
                          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                            {props => (
                              <div style={props}>
                                {this.props.tempUnit === false ? (
                                  <h1 id="cityTemp">
                                    {Math.round(
                                      this.props.weather.forecast.forecastday[0]
                                        .day.avgtemp_c
                                    )}
                                    º <span>C</span>
                                  </h1>
                                ) : (
                                  <h1 id="cityTemp">
                                    {Math.round(
                                      this.props.weather.forecast.forecastday[0]
                                        .day.avgtemp_f
                                    )}
                                    º <span>F</span>
                                  </h1>
                                )}

                                <h1 id="currentWeather">
                                  {current.condition.text}
                                </h1>
                              </div>
                            )}
                          </Spring>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {this.props.status === false
                    ? "No matching location found."
                    : "Please, enter your city"}
                </div>
              )}{" "}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Weather;
