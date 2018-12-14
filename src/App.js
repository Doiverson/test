import React, { Component } from 'react';
import Weather from "./weather";
import Form from "./form";
import Titles from "./titles";

const Api_Key = "1aaee2d1a170d4b12b65ba2f629dfe16";

class App extends Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) =>{
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        e.preventDefault();
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${Api_Key}`);
        const response = await api_call.json();
        console.log(response);

        if(city && country) {
            this.setState({
                    temperature: response.main.temp,
                    city: response.name,
                    country: response.sys.country,
                    humidity: response.main.humidity,
                    description: response.weather[0].description,
                    error: ""
                }
            )
        } else {
            this.setState({
            error: "Please enter the values..."
            })
        }
    }

    render() {
    return (
      <div>
          <div className="wrapper">
              <div className="main">
                  <div className="container">
                      <div className="row">
                          <div className="col title-container">
                            <Titles />
                          </div>
                          <div className="col form-container">
                              <Form loadWeather={this.getWeather} />
                              <Weather
                                temperature={this.state.temperature}
                                city={this.state.city}
                                country={this.state.country}
                                humidity={this.state.humidity}
                                description={this.state.description}
                                error={this.state.error}
                            />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
