import React from "react";

import WeatherEngine from "./components/WeatherCard/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine />
      <a href="https://www.weatherapi.com/" title="Free Weather API">
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
          border="0"
        />
      </a>
    </div>
  );
}

export default App;
