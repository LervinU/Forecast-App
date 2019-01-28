import React, { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";
import Form from "./components/Form";
import Forecast from "./components/Forecast";
import BackArrow from "./components/BackArrow";
import ChngTemp from "./components/ChngTemp";

class App extends Component {
  state = {
    weather: "",
    city: "",
    status: false,
    doHaveCity: false,
    tempUnit: false
  };

  getCity = async city => {
    await this.setState({ city });
  };

  getWeather = async () => {
    const res = await fetch(
      `http://api.apixu.com/v1/forecast.json?key=f9999a87bb694b8dad7142828191801&q=${
        this.state.city
      }&days=5`
    );
    const data = await res.json();
    if (res.ok) {
      this.setState({
        weather: data,
        status: true,
        doHaveCity: true
      });
    } else {
      this.setState({
        weather: data,
        status: false
      });
    }
  };

  handleBack = () => {
    this.setState({
      doHaveCity: false
    });
  };

  handleBackground = is_day => {
    return is_day === 1 ? "day-bg" : "night-bg";
  };

  changeTemp = () => {
    this.setState({
      tempUnit: !this.state.tempUnit
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.doHaveCity ? (
          <div
            className={
              this.state.status === true
                ? this.handleBackground(this.state.weather.current.is_day)
                : ""
            }
          >
            <BackArrow handleBack={this.handleBack} />
            <ChngTemp
              tempUnit={this.state.tempUnit}
              changeTemp={this.changeTemp}
            />
            <Weather
              weather={this.state.weather}
              city={this.state.city}
              status={this.state.status}
              tempUnit={this.state.tempUnit}
            />

            <Forecast weather={this.state.weather} temp={this.state.tempUnit} />
          </div>
        ) : (
          <div>
            <Form getCity={this.getCity} getWeather={this.getWeather} />{" "}
            <footer>
              Made By <a href="https://github.com/LervinU">Lervin</a>
            </footer>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
