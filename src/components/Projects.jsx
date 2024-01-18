import React from "react";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import trainingShop from "../images/trainingShop.jpg";
import projectManager from "../images/projectManager.jpg";
import dashboard from "../images/dashboard.jpg";
import "./Skills.css";
import { Slider } from "./Slider";

export const Projects = () => {
  return (
    <>
      <Container fluid className="projectBackgroundColor">
        <Container className="p-3  mt-4">
          <h2
            className="text-center mb-4 mt-4"
            style={{ fontSize: "45px", color: "#9a00ff" }}
            id="projects"
          >
            Mis Proyectos
          </h2>
          <Slider />
        </Container>
      </Container>
      <svg
        style={{ marginTop: "-1" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          className="waveProjectCSS"
          fill="#537fe7"
          fill-opacity="1"
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,250.7C672,267,768,277,864,266.7C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};
