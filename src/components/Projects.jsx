import React from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import trainingShop from '../images/trainingShop.jpg'
import projectManager from '../images/projectManager.jpg'
import dashboard from '../images/dashboard.jpg'
import './Skills.css'

export const Projects = () => {
  return (
    <>
      <Container fluid className='projectBackgroundColor'>
      <Container className="p-3  mt-4" >
        <h2
          className="text-center mb-4 mt-4"
          style={{ fontSize: "45px",color:'#9a00ff'}}
          id='projects'
        >
          Mis Proyectos
        </h2>
        <Row>
          <Col className='d-flex justify-content-center col-12 col-lg-6 mx-auto'>
          <Carousel indicators={false}> 
        <Carousel.Item>
          <Container className="card p-3" style={{borderColor:'#537fe7'}}>
            <Card.Img variant="top" src={trainingShop} />
            <Card.Title className="text-center mt-2">
              Training Shop - Ecommerce
            </Card.Title>
            <Card.Body className="mt-3">
              <Card.Text className="text-start">
                <span style={{ fontWeight: "bold" }}>Proyecto:</span> Ecommerce
                desarrollado junto con 4 personas bajo metodología SCRUM
              </Card.Text>
              <Card.Text className="text-start">
                <span style={{ fontWeight: "bold" }}>Funcionalidades:</span>{" "}
                Registro de usuarios, Login, CRUD de usuarios y productos,
                perfil ADMIN donde se accede a los CRUD's
              </Card.Text>
              <Card.Text className="text-start">
                <span style={{ fontWeight: "bold" }}>Tecnologías:</span>{" "}
                Javascript, MySQL, Sequelize, CSS, HTML, BOOTSTRAP, Node.js,
                Patron de diseño MVC.
              </Card.Text>
            </Card.Body>
            <div className="d-flex justify-content-center">
              <Button
                style={{ backgroundColor: "#537FE7" }}
                href="https://github.com/JoaquinAcosta/grupo_6_trainingShop"
                target="_blank"
              >
                Abir GitHub
              </Button>
            </div>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container className="card p-3" style={{borderColor:'#537fe7'}}>
            <Card.Img variant="top" src={projectManager} />
            <Card.Title className="text-center mt-2">
              Project Manager
            </Card.Title>
            <Card.Body className="mt-3">
              <Card.Text className="text-start">
                <span style={{ fontWeight: "bold" }}>Proyecto:</span> Manager
                de proyectos donde se puede visualizar los proyectos de los
                usuarios de la App.
              </Card.Text>
              <Card.Text className="text-start">
                <span style={{ fontWeight: "bold" }}>Funcionalidades:</span>{" "}
                Registro de usuarios autorizando con Tokens, CRUD de proyectos,
                Registro de usuarios utilizando nodeMailer y mailTrap para
                confirmación de registros.
              </Card.Text>
              <Card.Text className="text-start">
                <span style={{ fontWeight: "bold" }}>Tecnologías:</span>{" "}
                Javascript, React, consumo de API de un tercero, reacto-bootstrap,
                MongoDB, Mongoose, Axios.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button
                  style={{ backgroundColor: "#537FE7" }}
                  href="https://github.com/fabiCoseglia/ProjectManager"
                  target="_blank"
                >
                  Abrir GitHub
                </Button>
              </div>
            </Card.Body>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
          <Container className="card p-3" style={{borderColor:'#537fe7'}}>
            <Card.Img variant="top" src={dashboard} />
            <Card.Title className="text-center mt-2">
              Admin Dashboard - React
            </Card.Title>
            <Card.Body className="mt-3">
              <Card.Text className="text-start">
                <span style={{ fontWeight: "bold" }}>Proyecto:</span> Panel de administrador desarrollado en React comsumiendo API del proyecto TrainingShop
              </Card.Text>
              <Card.Text className="text-start">
                <span style={{ fontWeight: "bold" }}>Funcionalidades:</span>{" "}
                Permite al Administrador poder visualizar todo el contenido de productos y usuarios creados del proyecto TrainingShop.
              </Card.Text>
              <Card.Text className="text-start">
                <span style={{ fontWeight: "bold" }}>Tecnologías:</span>{" "}
                Javascript, React, maquetación en html y css, consumo de API con Fetch.
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Button
                  style={{ backgroundColor: "#537FE7" }}
                  href="https://github.com/JoaquinAcosta/grupo_6_trainingShop/tree/master/admin"
                  target="_blank"
                >
                  Abrir GitHub
                </Button>
              </div>
            </Card.Body>
          </Container>
        </Carousel.Item>
          </Carousel>
          </Col>
        </Row>
      </Container>
      </Container>
      <svg style={{marginTop:'-1'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
        <path className='waveProjectCSS' fill="#537fe7" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,250.7C672,267,768,277,864,266.7C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>

    </>
  );
}
