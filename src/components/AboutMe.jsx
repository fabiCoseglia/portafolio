import React from 'react'

import { Container, Row, Col, Card } from "react-bootstrap";
import { faCode, faGamepad, faGraduationCap, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const AboutMe = () => {
  return (
    <Container>
        <h2 className='text-center' style={{fontSize:'45px',color:'#9a00ff'}} id='about'>Sobre Mí</h2>
      <Row className="justify-content-center">
          <Col md={4} className='mt-3'>
            <Card className="border-1" style={{height:'335px',borderColor:'#537fe7'}}>
                
              <Card.Body className="text-center">
              <Card.Title>Estudios</Card.Title>
                <div className="display-1 mb-4">
                <FontAwesomeIcon icon={faGraduationCap} color='#9a00ff' />
                </div>
                <Card.Text>✔ Full Stack Node.js - DigitalHouse</Card.Text>
                <Card.Text >✔ Curso React intensivo - Fundación Formar</Card.Text>
                <Card.Text >✔ Profe educación física - UNPAZ</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={1} className='mt-3'>
            <Card className="border-1 " style={{height:'339px',borderColor:'#537fe7'}}>
                
              <Card.Body className="text-center">
              <Card.Title>Experiencia</Card.Title>
                <div className="display-1 mb-4">
                <FontAwesomeIcon icon={faCode} color='#9a00ff' />
                </div>
                <Card.Text style={{marginTop:'-10px'}}><span style={{fontWeight:'bold'}} >✔ Profesor Asistente:</span> Tutorías de ayuda a 2 comisiones y seguimiento de sus proyecto integradores en su cursada como desarrolladores full stack</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className='mt-3'>
            <Card className="border-1 " style={{height:'335px',borderColor:'#537fe7'}}>
                
              <Card.Body className="text-center">
              <Card.Title>Hobbies</Card.Title>
                <div className="display-1 mb-4">
                <FontAwesomeIcon icon={faGamepad} color='#9a00ff' />
                </div>
                <Card.Text>✔ Gaming </Card.Text>
                <Card.Text>✔ Salir con amigos/as </Card.Text>
                <Card.Text>✔ Hacer actividad física </Card.Text>
                <Card.Text>🧉 Mates!! </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
      </Row>
    </Container>
  )
}
