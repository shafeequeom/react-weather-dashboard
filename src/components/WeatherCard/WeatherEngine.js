import React, { useState, useEffect } from "react";

import axios from "axios";

import WeatherCard from "./component";

const WeatherEngine = ({ location }) => {
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    country: null,
    condition: null,
    icon: null,
  });

  const getWheather = (city) => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=f4ac401d188e480496270919202505&q=${city}`
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
    getWheather(location);
  }, [location]);
  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
        icon={weather.icon}
        getWheather={getWheather}
      />
    </div>
  );
};

export default WeatherEngine;
