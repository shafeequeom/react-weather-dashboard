import React from "react";
import Logo from "./logo.png";

import { Container, Row, Col, Navbar, Jumbotron } from "react-bootstrap";

import WeatherEngine from "./components/WeatherCard/WeatherEngine";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Wheather
        </Navbar.Brand>
      </Navbar>

      <Jumbotron>
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <WeatherEngine location="Calicut" />
            </Col>
            <Col>
              <WeatherEngine location="Kalpetta" />
            </Col>
            <Col>
              <WeatherEngine location="Kochi" />
            </Col>
            <Col>
              <WeatherEngine location="Trivandrum" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row className="justify-content-md-center ">
          <Col md="auto">
            <a href="https://www.weatherapi.com/" title="Free Weather API">
              <img
                src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
                alt="Weather data by WeatherAPI.com"
                border="0"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
