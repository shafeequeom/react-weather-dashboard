import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = ({ temp, condition, country, city, icon }) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgba(255, ${highColor}, 0),
      rgba(255, ${lowColor}, 0)
    )`;
  } else if (temp <= 12) {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgba(0, ${highColor}, 255),
      rgba(0, ${lowColor}, 255)
    )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    <Card>
      <Location city={city} country={country} />
      <Icon icon={icon} />
      <Condition temp={temp} condition={condition} />
    </Card>
  );
};

export default WeatherCard;
