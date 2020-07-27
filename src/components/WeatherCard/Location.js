import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

const Location = ({ country, city, getWheather }) => {
  const [query, setQuery] = useState("");

  const [inputMode, setInputMode] = useState(false);

  return (
    <Container>
      {!inputMode && <City onClick={() => setInputMode(true)}>{city}</City>}
      {inputMode && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getWheather(query);
          }}
        >
          <input
            type="text"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Search</button>
          <button onClick={() => setInputMode(false)}>Cancel</button>
        </form>
      )}
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  text-align: center;
`;
const City = styled.h1`
  font-size: "Merriweather", sans-serif;
  font-size: 1.6rem;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -5px;
  }
`;

const Country = styled.h3`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.1rem;
`;
