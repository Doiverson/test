import React, { Component } from 'react';
import Weather from "./weather";
import Titles from "./titles";
import Form from "./form";



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
        const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city},${country}`);
        const response = await api_call.json();
        console.log(response);
    }

    render() {
    return (
      <div>
        <Titles/>
        <Form loadWeather={this.getWeather} />
        <Weather/>
      </div>
    );
  }
}

export default App;
