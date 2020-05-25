import React, { useState, useEffect } from "react";

import axios from "axios";

import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  const [query, setCity] = useState("London");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    country: null,
    condition: null,
    icon: null,
  });

  const getWheather = (e) => {
    if (typeof e != "undefined") e.preventDefault();
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=f4ac401d188e480496270919202505&q=${query}`
      )
      .then((res) => {
        if (res.status === 200) {
          setWeather({
            temp: res.data.current.temp_c,
            city: res.data.location.name,
            country: res.data.location.country,
            condition: res.data.current.condition.text,
            icon: res.data.current.condition.icon,
          });
        }
      });
  };

  useEffect(() => {
    getWheather();
  }, []);

  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
        icon={weather.icon}
      />
      <form>
        <input
          type="text"
          value={query}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={(e) => getWheather(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
