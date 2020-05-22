import React from "react";

import WeatherCard from "./components/WeatherCard/component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={30} condition="Clear" city="Sydney" country="AU" />
      <WeatherCard temp={10} condition="Clouds" city="Melborne" country="AU" />
      <WeatherCard temp={-10} condition="Clear" city="London" country="UK" />
    </div>
  );
}

export default App;
