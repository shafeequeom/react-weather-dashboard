import React from "react";
import styled from "@emotion/styled";

const Icon = ({ icon }) => {
  const Icon = styled.img`
    width: 40%;
  `;
  return <Icon src={icon} alt="Weather Icon" />;
};

export default Icon;
