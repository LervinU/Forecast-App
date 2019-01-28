import React, { Component } from "react";
import "../styles/SingleWeather.css";

class SingleWeather extends Component {
  state = {};
  render() {
    const { day } = this.props.weather;
    const date = new Date(this.props.weather.date);
    let dayOfWeek = date.getDay();
    dayOfWeek++;
    if (dayOfWeek === 7) {
      dayOfWeek = 0;
    }
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Saturday"
    ];

    return (
      <div className="dayWeatherBox">
        <h1 id="dayOfWeek">{days.filter((day, i) => i === dayOfWeek)}</h1>
        <div className="dayTemp">
          {this.props.temp === false ? (
            <h1>
              {Math.round(day.avgtemp_c)}º<span>C</span>
            </h1>
          ) : (
            <h1>
              {Math.round(day.avgtemp_f)}º<span>F</span>
            </h1>
          )}

          <img src={day.condition.icon} alt={day.condition.text} />
        </div>
      </div>
    );
  }
}

export default SingleWeather;
