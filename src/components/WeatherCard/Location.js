import React from "react";
import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Location = ({ country, city, getWheather }) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);
  const inputRef = useRef("");

  useEffect(() => {
    if (inputMode) {
      inputRef.current.focus();
    }
  }, [inputMode]);

  if (inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FormElement
            onSubmit={(e) => {
              e.preventDefault();
              getWheather(query);
            }}
          >
            <InputField
              ref={inputRef}
              type="text"
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton type="submit">Search</SearchButton>
            <CancelButton onClick={() => setInputMode(false)}>X</CancelButton>
          </FormElement>
        </motion.div>
      </Container>
    );
  }

  return (
    <Container>
      <City onClick={() => setInputMode(true)}>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  text-align: center;
  height: 60px;
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

const FormElement = styled.form`
  display: flex;
  position: relative;
  background: #46618b;
  border-radius: 5px;
`;
const InputField = styled.input`
  padding: 5px;
  width: 100px;
  background: transparent;
  color: white;
  border: none;
  &:focus {
    outline: 0;
  }
`;
const SearchButton = styled.button`
  padding: 4px;
  background: #394e70;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
`;
const CancelButton = styled.span`
  position: absolute;
  background: #557fc2;
  top: -10px;
  right: -10px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
`;
