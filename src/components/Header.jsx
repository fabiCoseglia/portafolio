import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'
import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#537FE7" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
            href="#home"
          >
            Fabian Coseglia{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
              <Link to="skills" spy={true} smooth={true}>
                Mis Skills
              </Link>
              </Nav.Link>
              <Nav.Link><Link to="about" spy={true} smooth={true}>
                Sobre Mí
              </Link></Nav.Link>
              <Nav.Link><Link to="projects" spy={true} smooth={true}>
                Mis Proyectos
              </Link></Nav.Link>
              <Nav.Link ><Link to="contact" spy={true} smooth={true}>
                Contactame
              </Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <svg
        style={{ marginTop: "-2" }}
        className="waveHeader"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#537FE7"
          fill-opacity="1"
          d="M0,32L60,53.3C120,75,240,117,360,117.3C480,117,600,75,720,74.7C840,75,960,117,1080,117.3C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
