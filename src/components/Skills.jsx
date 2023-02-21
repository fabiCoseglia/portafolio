import React from 'react'
import { Card, Container, Col, Row  } from 'react-bootstrap'
import htmlIcon from '../images/html.png';
import cssIcon from '../images/css.png';
import mysqlIcon from '../images/mysql-icon.png';
import jsIcon from '../images/js.png';
import mongoIcon from '../images/mongodb.png';
import reactIcon from '../images/react-icon.png';
import nodejs from '../images/nodejs.png';
import sequelizeIcon from '../images/sequelize-icon.png';
import figmaIcon from '../images/figma-icon.png';
import './WaveSeparate.css'
import './Skills.css'

export const Skills = () => {
  return (
    <Container fluid className='waveCSS'>
      <h2 className='text-center SkillsInDesktop' id='skills'>Mis Skills</h2>
      <Row className="g-4 justify-content-center ">
        <Col className="col-6 col-md-4 d-flex justify-content-center flex-column align-items-center ">
          <Card.Img variant="top" src={htmlIcon} style={{ width: "100px" }} />

          <Card.Title
            className="text-center text-white"
            style={{ width: "100px" }}
          >
            HTML
          </Card.Title>
        </Col>
        <Col className="col-6 col-md-4 d-flex justify-content-center flex-column align-items-center">
          <Card.Img variant="top" src={cssIcon} style={{ width: "100px" }} />

          <Card.Title
            className="text-center text-white"
            style={{ width: "100px" }}
          >
            CSS
          </Card.Title>
        </Col>
        <Col className="col-6 col-md-4 d-flex justify-content-center flex-column align-items-center">
          <Card.Img variant="top" src={jsIcon} style={{ width: "100px" }} />

          <Card.Title
            className="text-center text-white"
            style={{ width: "100px" }}
          >
            Javascript
          </Card.Title>
        </Col>
        <Col className="col-6 col-md-4 d-flex justify-content-center flex-column align-items-center">
          <Card.Img variant="top" src={mysqlIcon} style={{ width: "100px" }} />

          <Card.Title
            className="text-center text-white"
            style={{ width: "100px" }}
          >
            MySQL
          </Card.Title>
        </Col>
        <Col className="col-6 col-md-4 d-flex justify-content-center flex-column align-items-center">
          <Card.Img variant="top" src={mongoIcon} style={{ width: "100px" }} />

          <Card.Title
            className="text-center text-white"
            style={{ width: "100px" }}
          >
            MongoDB
          </Card.Title>
        </Col>
        <Col className="col-6 col-md-4 d-flex justify-content-center flex-column align-items-center">
          <Card.Img variant="top" src={reactIcon} style={{ width: "100px" }} />

          <Card.Title
            className="text-center text-white"
            style={{ width: "100px" }}
          >
            React JS
          </Card.Title>
        </Col>
        <Col className="col-6 col-md-4 d-flex justify-content-center flex-column align-items-center">
          <Card.Img variant="top" src={nodejs} style={{ width: "100px" }} />

          <Card.Title
            className="text-center text-white"
            style={{ width: "100px" }}
          >
            Node JS
          </Card.Title>
        </Col>
        <Col className="col-6 col-md-4 d-flex justify-content-center flex-column align-items-center">
          <Card.Img variant="top" src={sequelizeIcon} style={{ width: "100px" }} />

          <Card.Title
            className="text-center text-white"
            style={{ width: "100px" }}
          >
            sequelize
          </Card.Title>
        </Col>
        <Col className="col-6 col-md-4 d-flex justify-content-center flex-column align-items-center">
          <Card.Img variant="top" src={figmaIcon} style={{ width: "100px" }} />

          <Card.Title
            className="text-center text-white"
            style={{ width: "100px" }}
          >
            Figma
          </Card.Title>
        </Col>
      </Row>
    </Container>
  );
}
