import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "4b4875a4aa1ad99ee265ed1dc59a8d80";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

    axios.get(url).then(displayWeather);

    function displayWeather(response) {
      setLoaded(true);
      setWeather({
        name: response.data.name,
        description: response.data.weather[0].description,
        temperature: Math.round(response.data.main.temp),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      });
    }
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h2>{weather.name} </h2>
        <ul>
          <li>Description: {weather.description}</li>
          <li>Temperature: {weather.temperature}°F</li>
          <li>Wind: {weather.wind} miles per hour</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>
            <img src={weather.icon} alt="Weather Icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
