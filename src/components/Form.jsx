import React, { Component } from "react";
import "../styles/form.css";
import { Spring } from "react-spring";

class Form extends Component {
  state = {
    city: ""
  };
  onSubmit = async e => {
    e.preventDefault();
    await this.props.getCity(this.state.city);
    await this.props.getWeather();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <div style={props}>
            <div className="container form-middle">
              <form onSubmit={this.onSubmit}>
                <h3 className="form-title">Enter your city</h3>
                <input
                  className="cityInput"
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.onChange}
                />
                <input
                  className="getWeatherBtn"
                  type="submit"
                  value="Get Weather"
                />
              </form>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Form;
